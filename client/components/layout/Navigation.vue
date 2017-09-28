<template>
<nav>
  <h1>Subforums</h1>
  <input type="search" placeholder="Search...">
  <ul>
    <li v-for="subforum in allSubforums" :key="subforum.id">
      <nuxt-link :to="`/subforum/${subforum.url}`">
        {{ subforum.name }}
      </nuxt-link>
    </li>
  </ul>
</nav>
</template>

<script>
import allSubforums from '~/apollo/queries/allSubforums.gql';

export default {
  apollo: {
    allSubforums: {
      prefetch: true,
      query: allSubforums
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: $primary-blue;
}

h1 {
  margin: 0;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  background-color: black;
  color: $nav-hover;
  text-transform: uppercase;
}

input[type="search"] {
  width: 100%;
  padding: 0.6rem 1.5rem;
  font-size: 1.5rem;
  border: none;
}

ul {
  margin: 0;
  padding: 0;
  overflow: auto;
}

li {
  list-style: none;
  margin: 0;
  
  a {
    font-size: 1.3rem;
    display: block;
    padding: 1.25rem 1.5rem;
    color: $nav-text;
    font-weight: 600;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: $hover-blue;
      color: $nav-text-hover;
      border-left: 0.3rem solid $nav-hover;
    }
  }
}

.nuxt-link-active {
  background-color: #000;
  color: white;
  padding-left: 1.75rem;
  border-left: 0.3rem solid $nav-hover;
}
</style>