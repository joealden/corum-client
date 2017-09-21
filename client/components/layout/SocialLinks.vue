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

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: footer-left;
  background-color: #c0c0c0;
  border-top: 2px solid black;
}
</style>
