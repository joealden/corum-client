<template>
<nav>
  <h1>Subforums</h1>
  <input v-model.trim="search" type="search" placeholder="Search..." spellcheck="false">
  <transition name="fadeIn">
    <div v-if="loading"></div>
    <ul v-else>
      <li v-for="subforum in subforumSearch" :key="subforum.id">
        <nuxt-link :to="`/subforum/${subforum.url}`">
          {{ subforum.name }}
        </nuxt-link>
      </li>
    </ul>
  </transition>
</nav>
</template>

<script>
import allSubforums from '~/apollo/queries/allSubforums.gql';

export default {
  apollo: {
    allSubforums: {
      query: allSubforums,
      prefetch: true,
      loadingKey: 'loading'
    }
  },
  computed: {
    subforumSearch() { // change to use simpler regex
      return this.allSubforums.filter(subforum => (
        subforum.name.toLowerCase().includes(this.search.toLowerCase())
      ));
    }
  },
  data() {
    return {
      allSubforums: '',
      loading: 0,
      search: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import '../../assets/styles/fadeTransition';

nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: $primary-blue;
}

h1 {
  margin: 0;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
}

input[type="search"] {
  width: 100%;
  padding: 0.6rem 1.5rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
}

div {
  height: 100%;
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
    padding: 1.5rem;
    color: $nav-text;
    font-weight: 600;
    outline: none;

    &:hover,
    &:focus {
      background-color: $hover-blue;
      color: white;
      padding-left: 1.1rem;
      border-left: 0.4rem solid $nav-hover;
    }
  }
}

.nuxt-link-active {
  background-color: #000;
  color: white;
  padding-left: 1.1rem;
  border-left: 0.4rem solid $nav-hover;
}
</style>