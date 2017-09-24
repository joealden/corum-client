<template>
<main>
  <h1>Currently Selected Post</h1>
  <p>{{ $route.params.post }}</p>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Post' // TODO: wire up to post title
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-decoration: underline;
  font-size: 2.5rem;
}

p {
  font-size: 30px;
  text-transform: capitalize;
}
</style>