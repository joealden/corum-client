<template>
<main>
  <section>
    <form>
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Password">
    </form>
  </section>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Login'
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

form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

input {
  height: 2rem;
  width: 50%;
}

img {
  height: 6rem;
}

p {
  font-size: 1.7rem;
}

input {
  display: block;
}
</style>