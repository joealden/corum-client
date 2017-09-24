<template>
<div>
  <nuxt-link to="/">
    <img src="~/assets/images/logo.svg" alt="corum" />
  </nuxt-link>
</div>
</template>

<style lang="scss" scoped>
div {
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-bottom: 2px solid black;
}

img {
  height: 3.5rem;
  vertical-align: middle;
}
</style>
