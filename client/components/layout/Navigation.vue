<template>
<nav>
  <div>
    <h1>Subforums</h1>
    <input type="search" placeholder="Search...">
    <ul>
      <li v-for="subforum in allSubforums" :key="subforum.id">
        <nuxt-link :to="`/subforum/${subforum.url}`">
          {{ subforum.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
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
  justify-content: space-between;
  overflow: hidden;
  background-color: #101218;
}

h1 {
  margin: 0;
  padding: 20px 0.5rem 20px 2rem;
  font-size: 1.5rem;
  background-color: #0a0b10;
  color: white;
  text-align: left;
  text-transform: uppercase;
}

input[type="search"] {
  padding: 10px 2rem;
  margin-bottom: 10px;
  font-size: 1.5rem;
  border: none;
  background-color: #2b2d38;
  color: white;
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
  overflow: auto;
}

li {
  font-size: 1.35rem;
  list-style: none;
  text-align: left;
  padding-left: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  
  a {
    color: #bfc1c9;
    font-weight: 600;
  }

  &:hover {
    background-color: #282E37;
    border-left: 0.3rem solid white;
    padding-left: 1.2rem;
    a {
      color: white;
    }
  }
}

a {
  display: block;
  padding: 10px;
}

.nuxt-link-active {
  & {
    background-color: black;
    color: white;
  }
}
</style>