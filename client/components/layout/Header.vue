<template>
<header>
  <nuxt-link to="/signup">Sign Up</nuxt-link>
  <nuxt-link to="/login">Log In</nuxt-link>
</header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: header;
  background-color: #ccc;;;
}

a {
  font-size: 1.5em;
  background: #222;
  color: white;
  border-radius: 10px;
  margin-right: 25px;
  text-decoration: none;
  padding: 7px 12px 10px 12px;
  border: none;
}
</style>
