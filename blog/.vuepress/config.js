module.exports = {
  title: "~nhorton/",
  theme: "@vuepress/blog",
  description: "Welcome to the blog, folks!",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    dateFormat: "DD-MM-YYYY",
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/posts/",
        itemPermalink: "/posts/:year/:month/:day/:slug"
      }
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/nicholas-horton"
        },
        {
          type: "mail",
          link: "mailto:nicholas.oryan.horton@gmail.com"
        }
      ],
      copyright: [
        {
          text: "MIT Licenced | Copyright © 2020 Nicholas Horton",
          link: ""
        }
      ]
    },
    nav: [
      {
        text: "Blog",
        link: "/posts/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "GitHub",
        link: "https://github.com/nicholas-horton"
      }
    ],
    sitemap: {
      hostname: "https://nhorton.ca"
    }
  }
};
