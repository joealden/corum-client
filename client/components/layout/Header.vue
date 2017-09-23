<template>
<header>
  <nuxt-link to="/signup">Sign Up</nuxt-link>
  <nuxt-link to="/login">Login</nuxt-link>
</header>
</template>

<style lang="scss" scoped>
header {
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ccc;
}

a {
  font-size: 1.5em;
  margin-right: 1.5rem;
  padding: 0.8rem;
  background: black;
  color: white;
  border: none;
  border-radius: 7px 7px 0 7px;
  text-decoration: none;
}
</style>
