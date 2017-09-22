<template>
<main>
  <img src="~/assets/images/logo.svg" alt="corum">
  <p>Please Select a Subforum!</p>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home'
    };
  }
};
</script>


<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: main;
  background-color: #eee;
}

img {
  height: 6rem;
}

p {
  font-size: 1.7rem;
}
</style>
