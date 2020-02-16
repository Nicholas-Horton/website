<template>
  <div class="author-info">
    <div
      v-if="author"
      class="post-meta-author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
    >
      <span itemprop="name">{{ author }}</span>
      <span v-if="location" itemprop="address"> &nbsp; in {{ location }}</span>
    </div>
    <div v-if="date" class="post-meta-date">
      <time pubdate itemprop="datePublished" :datetime="date">
        @{{ resolvedDate }}
      </time>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { NavigationIcon, ClockIcon } from "vue-feather-icons";

export default {
  name: "AuthorInfo",
  components: { NavigationIcon, ClockIcon },
  props: {
    author: {
      type: String
    },
    date: {
      type: String
    },
    location: {
      type: String
    }
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || "ddd MMM DD YYYY"
      );
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags;
      return [this.tags];
    }
  }
};
</script>

<style lang="stylus">
.author-info
  display flex
  justify-content flex-end

  > div
    display inline-flex
    line-height 12px
    font-size 12px

  svg
    margin-right 5px
    width 14px
    height 14px
</style>
