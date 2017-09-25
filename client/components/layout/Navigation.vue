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
nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 2px solid black;
}

h1 {
  margin: 0;
  padding: 0.5rem;
  font-size: 1.75rem;
  background-color: black;
  color: white;
  text-align: center;
}

input[type="search"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.4rem;
  border: none;
  border-bottom: 2px solid black;
}

ul {
  margin: 0;
  padding: 0;
  background-color: #eee;
  overflow: auto;
}

li {
  font-size: 1.35rem;
  list-style: none;
  text-align: right;

  &:nth-child(even) {
    background-color:white;
  }

  &:hover {
    background-color: #444;
    a {
      color: white;
    }
  }
}

a {
  display: block;
  padding: 10px;
}

.even-item {
  background-color: rgb(229, 229, 229);
}

.nuxt-link-active {
  background-color: black;
  color: white;
}
</style>