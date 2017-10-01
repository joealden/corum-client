<template>
<nav>
  <h1>Subforums</h1>
  <input type="search" placeholder="Search..." spellcheck="false">
  <div v-if="loading">
    <img src="~/assets/images/loading-light.svg" alt="loading" />
  </div>
  <transition name="fade">
    <ul v-if="!loading">
      <li v-for="subforum in allSubforums" :key="subforum.id">
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
  data() {
    return {
      allSubforums: '',
      loading: 0
    };
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fade-enter-active {
  transition: all 0.7s;
}

.fade-enter {
  opacity: 0;
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