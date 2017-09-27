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
  background-color: white;
  margin-right: 3rem;
}

a {
  font-size: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.8rem 1.6rem;
  background: #18191E;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background-color: #333;
  }
}

.nuxt-link-active {
  background-color: #333;
}
</style>
