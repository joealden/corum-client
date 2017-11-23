<template>
<div>
  <nuxt-link to="/">
    <img src="~/assets/images/logo-light.svg" alt="corum" />
  </nuxt-link>
</div>
</template>

<script>
export default {
  name: 'corum-logo'
}
</script>

<style lang="stylus" scoped>
div
  grid-area logo
  display flex
  justify-content left
  padding-left 1.5rem
  align-items center
  background-color #101218

img
  height 4rem
  vertical-align middle
</style>
