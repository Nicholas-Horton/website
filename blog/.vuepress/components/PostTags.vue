<template>
  <div class="post-meta">
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>

<script>
import PostTag from "./PostTag.vue";

export default {
  name: "PostTags",
  components: { PostTag },
  props: {
    tags: {
      type: [Array, String]
    }
  },
  computed: {
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags;
      return [this.tags];
    }
  }
};
</script>

<style lang="stylus">
.post-meta
  &-tags
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0
    margin 20px 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    line-height 12px
    font-size 12px
    margin-right 20px
</style>
