<template>
<header>
  <nuxt-link to="/signup">
    <i class="fa fa-user-plus" aria-hidden="true"/>Sign Up
  </nuxt-link>
  <nuxt-link to="/login">
    <i class="fa fa-sign-in" aria-hidden="true"/>Login
  </nuxt-link>
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
  margin-right: 3rem;
}

a {
  font-size: 1.5rem;
  padding: 0.8rem 1.6rem;
  background: $primary-blue;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.15s ease-in-out;

  i {
    color: $nav-hover;
    margin-right: 0.4rem;
  }

  &:first-child {
    margin-right: 1.5rem;
  }

  &:hover {
    transform: translateY(-0.2rem); 
    box-shadow: 0 4px 10px #999;
    background-color: $nav-hover;

    i {
      color: white;
    }
  } 
}

.nuxt-link-active {
  background-color: $nav-hover;
  color: white;

  i {
    color: white;
  }
}
</style>
