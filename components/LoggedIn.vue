<template>
<div>
  <img src="~/assets/images/logo-dark.svg" alt="corum">
  <p>You are already logged in!</p>
  <p>{{ bottomText }}</p>
</div>
</template>

<script>
export default {
  name: 'logged-in',
  props: {
    bottomText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
img
  height 6rem
p
  font-size 1.7rem
  margin-bottom -1rem
  font-weight bold
</style>