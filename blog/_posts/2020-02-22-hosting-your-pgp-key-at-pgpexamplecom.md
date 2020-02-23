---
title: Hosting Your PGP Key at pgp.example.com
date: 2020-02-22
author: Nicholas Horton
tags:
  - Tutorial
  - PGP
  - NGINX
---

With the existence of keyservers, it is *not* really necessary [or recommended](https://www.gnupg.org/gph/en/manual/x457.html) to host your PGP key yourself. Keyservers help greatly in propagating public key signatures, when building your web of trust. However, I've found it convenient over the years to be able to quickly share a plaintext version of my key. I'd only recommend doing this for fun or to have a convenient way to always grab your public key, when you need it.

I'm going to assume you're already hosting a website on your domain, `www.example.com`, and are using [NGINX](https://nginx.com) as your webserver and getting your SSL certificates from [Let's Encrypt, via Cerbot](https://certbot.eff.org).

First, we're going to need to export the plaintext version of your key, that we will be serving.

```shell
$> gpg --list-keys
/home/user/.gnupg/pubring.kbx
--------------------------------
pub   rsa4096 2020-02-22 [SC]
      FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
uid           [ultimate] Foo Bar <Foo.Bar@example.com>
sub   rsa4096 2020-02-22 [E]
```

You can specify which key to export by passing the email associated with the key to the `gpg --armor --export` command. The `--armor` option outputs the export key in the ASCII-armor format.

```shell
$> gpg --armor --export Foo.Bar@example.com > pubkey.asc
```

Now, transfer your key to your webserver using your preferred method. If you have SSH access, I personally find `scp` to be the most convenient.

```shell
$> scp pubkey.asc user@example.com:/home/user/pubkey.asc
```

Don't forget to substitute `user` and `example.com` with the real user and domain for your webserver.

That's all we need to do locally. Now let's move onto the webserver. The first thing we need to do is ensure both `example.com` and `pgp.example.com` are pointing to our webserver's IP. Log into your domain name registrar and create the necessary A records.

Once that's done, let's SSH in and configure our server.

```shell
$> ssh user@example.com
```

The first thing we're going to do is create the pgp.example.com subdomain. Create a new subdirectory under either `/var/www/` or `/srv/www`, depending on your configuration and place your PGP public key as the only file in that directory.

```shell
$> mkdir /srv/www/pgp.example.com
$> mv ~/pubkey.asc /srv/www/pgp.example.com/index.asc
```

Now, all we need to do is tell NGINX to serve that plaintext file. We can easily add a subdomain by creating a new site entry under `/etc/nginx/sites-available/`.

```shell
$> vim /etc/nginx/sites-available/pgp.example.com
```

All we need to do is specify the `root` for our new site as the folder we created earlier, the `index` as our plaintext public PGP key and the `server_name` as our new subdomain.

```nginx
server {
  root /srv/www/pgp.example.com;
  index index.asc;

  server_name pgp.example.com;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

We're going to have to specify to NGINX that we'd like to serve the `.asc` file as `Content-Type: text/plain`.

```sh
vim /etc/nginx/mime.types
```

Find the section of the configuration file containing the `text/plain` MIME type definitions and add the line highlighted below for the asc extension.

```nginx{5}
types {
  # [...]
  text/mathml                           mml;
  text/plain                            txt;
  text/plain                            asc;
  text/vnd.sun.j2me.app-descriptor      jad;
  text/vnd.wap.wml                      wml;
  # [...]
}
```

Now, symlink the configuration file into `/etc/nginx/sites-available/` into `/etc/nginx/sites-enabled` and validate your configuration, using `nginx -t`

```sh
$> ln -s /etc/nginx/sites-available/pgp.example.com /etc/nginx/sites-enabled/pgp.example.com
$> nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Now you should be good to go! Restart your NGINX server and your PGP file should be served at `pgp.example.com`!

To enable SSL, simply run `certbot` and sepecify that you would like to add the new subdomain and force-redirect to HTTPS.

```sh
$> certbot
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: example.com
2: pgp.example.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel):
```

Follow the prompts on screen and Certbot will automagically update your configurations to support SSL. Restart your NGINX server again to see your key served over SSL!

```sh
$> sudo service nginx restart
```
