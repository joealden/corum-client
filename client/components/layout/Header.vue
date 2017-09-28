<template>
<header>
  <nuxt-link to="/signup">Sign Up</nuxt-link>
  <nuxt-link to="/login">Login</nuxt-link>
</header>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

header {
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  margin-right: 2.5rem;
}

a {
  font-size: 1.5rem;
  padding: 0.8rem 1.6rem;
  background: $primary-blue;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;

  &:first-child {
    margin-right: 1.5rem;
  }

  &:hover {
    background-color: $hover-blue;
  }
}

.nuxt-link-active {
  background-color: $hover-blue;
}
</style>
