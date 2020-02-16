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
