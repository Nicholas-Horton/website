---
title: test post please ignore
date: 2020-02-15
author: Nicholas Horton
tags:
  - Learning
  - Vue
---

I've been writing a lot of Vue recently so it made sense to give [VuePress](https://vuepress.vuejs.org/) a try.

All in all, it was very easy to set up - most of everything worked out of the box. I found it very interesting that the entire static site is basically generated out of a hierarchy of markdown files. VuePress takes your markdown and crunches it though Vue components to generate static pages.

You can even easily make your own components and use them in markdown!

```markdown
---
title: My Blog Post
date: 2020-02-15
author: Bob Example
tags:
  - Vue
  - Learning
---

Here is a custom VuePress component -> <ButtonLink text="My Text" location="/example" />
```

```vue
<template>
  <router-link :to="location" class="btn">{{ text }}</router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    text: {
      type: [String]
    },
    location: {
      type: [String]
    }
  }
};
</script>

<style lang="stylus">
.btn {
  display: inline-block;
  font-size: 16px;
  border: 2px solid $accentColor;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px 12px;
}
</style>
```

Once your components are set up, all you need to focus on is writing content, going forward.
