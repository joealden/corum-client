<template>
<section>
  <p>{{ $route.params.index }}</p>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Subforum'
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
}
</style>