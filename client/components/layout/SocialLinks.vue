<template>
<div>
  <social-circle />
  <social-circle />
  <social-circle />
</div>
</template>

<script>
import SocialCircle from '~/components/SocialCircle.vue';

export default {
  components: {
    SocialCircle
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: footer-left;
  background-color: #ccc;
}
</style>
