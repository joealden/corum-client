<template>
<div>
  <nuxt-link to="/">
    <img src="~/assets/logo.svg" alt="corum" />
  </nuxt-link>
</div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: logo;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
}

img {
  width: 120px;
  vertical-align: middle;
}
</style>
