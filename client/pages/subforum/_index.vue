<template>
<main>
  <h1>Currently Selected Subforum</h1>
  <p>{{ $route.params.index }}</p>
</main>
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