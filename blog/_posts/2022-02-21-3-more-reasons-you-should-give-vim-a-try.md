---
title: 3 More Reasons You Should Give Vim a Try
date: 2022-02-21
author: Nicholas Horton
tags:
  - Opinion
  - Vim
  - Editor
---

Now, the "editor wars" are downright silly and you won't find any of that
nonsense here. Choosing an editor is important and will have a large impact on
your workflow but your editor choice isn't what magically makes you a good
developer. Your editor is a tool which helps you browse and understand existing
code, while also helping you write new code by providing you the tools to
efficiently transcribe abstract concepts from your brain into code on screen.
Hopefully, it can also do all of this comfortably and intuitively.

Here are my top three reasons why I think you should give Vim a shot!

## Reason 1: Vim's Jumplists Help You Better Navigate Code
Have you ever been browsing a codebase wanting to jump between to different
pieces of code? "Jump to definition" and "Go to next reference" are amazing,
but Vim's jumplists are something special. I had been using Vim for some time
before discovering this feature and was shocked I hadn't known this was missing
from my workflow previously. Essentially, every time you make a significant
"jump" from one place to another (say, go to definition or go to reference) Vim
records where you were previously in a jump list. Using the `CTRL+O` and
`CTRL+I` keys, you can intuitively navigate the list and jump back and forth
through your position history in the code. It gives you a neat breadcrumb trail
you can call up whenever you need it. I use this feature constantly.

## Reason 2: Vim is Ergonomic
It's nice and all to show off that you don't need to use your mouse but let's
be realistic... The real benefit you get out of avoiding switching back and forth
between your mouse and keyboard is **ergonomics**. Repetitive Strain Injury
(RSI) is a serious problem in our profession and avoiding or reducing your
exposure to it is important. Even if you don't choose to switch to an editor
like Vim, consider your current setup and its ergonomics. Avoid using the mouse
when you can or consider how you can [use a mouse or other pointer device
ergonomically](https://www.ccohs.ca/oshanswers/ergonomics/office/mouse/mouse_problems.html).

Vim promotes ergonomics by always keeping you on the home row. All editor
motions and commands are generally accessible without needing to reach or
unnaturally contort your hands. If there is some function missing that you
need, Vim allows you to add to its language by creating new key bindings in
your `.vimrc` configuration file. Note, these bindings fit right into Vim's
mnemonic "language", without you needing to bind them behind some modifier
keybinding chord.

Your fingers and wrists will thank you.

## Reason 3: Vim Runs Right in the Terminal
There is something incredibly convenient about having your editor live right in
the terminal. With `tmux`, your editor can have its own dedicated `tmux` window
or sit in a vertical split next to unit tests as you execute them. No need to
switch applications to spin up your dev server or fiddle with an IDE's run
options or subpar terminal emulation. It's trivial to switch right to a full
terminal prompt. But also, by running right in `tmux` you can do all of this
without leaving the home row. I have my `tmux` leader set to `CTRL+A` (with my
`caps lock` key set to `CTRL`), which allows me to access `tmux` features like
scrollback and window/pane management very comfortably.

In addition to this, Vim is also fairly ubiquitous. If you're connecting
remotely to a machine, there's a good chance either Vim is already installed or
can be installed quickly if you need to edit files remotely. If anything, I'd
recommend learning a little Vim just to have this convenience available to you!

## What About What Everyone is Already Talking About?

### Vim is Incredibly Customizable
Due to its age and popularity, there is a wealth of plugins and customizations
available. There is even a popular rewrite, Neovim (which is in a very good
state now) that even further opens up the possibilities for customizing and
tailoring Vim to your needs. Vim's `.vimrc` and Vimscript gives you complete
control over the editor.

If you can think of some way you'd like to augment Vim, there's a good chance
someone out there has written a plugin for it.

### Once you learn Vim, does your speed as a developer increase exponentially?
How quickly can you really write code in Vim? Speed of writing code is
frequently touted as the most compelling reason to choose Vim over another
editor. I disagree.

While I do believe embracing Vim will help you efficiently write and edit code,
in my experience, I would argue that putting significant effort into learning
and understanding **any** editor or IDE will help you be just as efficient.

The deciding factor for me lies in how Vim is designed as a [*modal
editor*](https://vimhelp.org/usr_02.txt.html#usr_02.txt). Vim's *NORMAL* and
*INSERT* modes mirror the two states of my workflow when I edit code. I browse
code (*NORMAL* mode) to understand it before making a change (*INSERT* mode). A
lot of programming on large, shared codebases involves gaining a deep
understanding of the code you are working on before making a change. Vim's
*NORMAL* mode allows me to browse the codebase, jumping back and forth between
function definitions and references, all without the use of my mouse. This is
efficient and, most importantly, comfortable. I find the efficiency and comfort
to be much more compelling than the negligible amount of time actually saved.
Once I have understood where I need to make a change, I am already on the home
row and can switch to insert mode using one of Vim's [(mnemonic)
verbs](https://vimhelp.org/change.txt.html) to make the change I need.
