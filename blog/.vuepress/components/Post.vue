<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <AuthorInfo
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
      </header>
      <Content itemprop="articleBody" />
      <footer>
        <Newsletter v-if="$service.email.enabled" />
        <hr />
        <PostTags :tags="$frontmatter.tags" />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";
import PostMeta from "@theme/components/PostMeta.vue";
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    Toc,
    PostMeta,
    Comment,
    Newsletter: () => import("@theme/components/Newsletter.vue")
  }
};
</script>

<style lang="stylus">
$wrapper
  max-width $contentWidth
  margin 0 auto
  background-color $bgColor
  @media (min-width: $MQNarrow)
    padding 2rem
  @media (max-width: $MQMobileNarrow)
    padding 1.5rem

.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  color $textColor
  position relative
  background-color transparent

  @media (min-width: $MQNarrow)
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.10), 0 5px 12px rgba(0, 0, 0, 0.20)
    background-color $bgColor

  .post-title
    margin-top 0
    padding-top 0

@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0

  .post-title
    margin-top 0
</style>
