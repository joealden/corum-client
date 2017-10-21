<template>
<section>
  <img src="~/assets/images/logo-dark.svg" alt="corum">
  <p>Please Select a Subforum!</p>
</section>
</template>

<script>
/*
  TODO:
  Change this page to have 2 states. 1 for when the
  user is logged in, and 1 for when the user is not
  
  When the user is logged in, display a collection of posts
  from their favourites.
  
  When the user is not logged in, display a 'getting started'
  page.
*/

export default {
  head: () => ({ title: 'Home' })
}
</script>

<style lang="stylus" scoped>
img
  height 6rem
p
  font-size 1.7rem
  font-weight bold
</style>
