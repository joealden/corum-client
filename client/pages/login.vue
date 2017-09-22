<template>
<main>
  <section>
    <img src="~/assets/images/logo.svg" alt="corum">
    <form>
      <input type="text" placeholder="Username" autofocus>
      <input type="password" placeholder="Password">
      <input type="submit" value="Log In" @click.prevent>
    </form>
    <p>Don't have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
  </section>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Log In'
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border: 3px solid hsla(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 37rem;
  height: 40rem;
}

form {
  margin: 1.5rem auto;
  padding: 1rem;
  width: 30rem;
  border: 3px solid hsla(0, 0, 0, 0.35);
  border-radius: 5px;
}

input {
  width: 100%;
  height: 4rem;
  font-size: 1.75rem;
  margin-bottom: 0.7rem;
  text-align: center;
  border: 2px solid hsla(0, 0, 0, 0.35);
  border-radius: 5px;
  box-sizing: content-box;
}

input[type="text"],
input[type="password"] {
  background-color: rgb(245, 245, 245);

  &:hover,
  &:focus {
    background-color: white;
  }
}

input[type="submit"] {
  color: white;
  background-color: black;
  width: 220px;
  margin-bottom: 0;
}

p {
  margin: 0;
  font-size: 1.15rem;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: grey;
  }
}

img {
  height: 6rem;
}
</style>