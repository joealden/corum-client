<template>
<nav>
  <ul>
    <li 
      v-for="subforum in subforums" 
      :key="subforum.id"
      :class="subforum.id % 2 === 0 ? 'even-item' : ''"
    >
      <nuxt-link :to="'/subforum/' + subforum.name">
        {{ subforum.name }}
      </nuxt-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data() {
    return {
      subforums: [
        { id: 1, name: 'programming' },
        { id: 2, name: 'gaming' },
        { id: 3, name: 'linux' },
        { id: 4, name: 'javascript' },
        { id: 5, name: 'vuejs' },
        { id: 6, name: 'reactjs' },
        { id: 7, name: 'webdev' },
        { id: 8, name: 'lineageos' },
        { id: 9, name: 'nodejs' },
        { id: 10, name: 'solusproject' },
        { id: 11, name: 'tv' },
        { id: 12, name: 'bestof' },
        { id: 13, name: 'pics' },
        { id: 14, name: 'movies' },
        { id: 15, name: 'gifs' },
        { id: 16, name: 'worldnews' },
        { id: 17, name: 'funny' },
        { id: 18, name: 'politics' },
        { id: 19, name: 'books' },
        { id: 20, name: 'videos' },
        { id: 21, name: 'design' },
        { id: 22, name: 'photoshop' },
        { id: 23, name: 'angularjs' },
        { id: 24, name: 'expressjs' },
        { id: 25, name: 'gatsbyjs' },
        { id: 26, name: 'nuxtjs' },
        { id: 27, name: 'create-react-app' },
        { id: 28, name: 'styled-components' },
        { id: 29, name: 'css' },
        { id: 30, name: 'postcss' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  grid-area: nav;
  background-color: #eee;
  overflow: auto;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  font-size: 1.35rem;
  list-style: none;
  text-align: right;
}

li:hover {
  background-color: #444;
  a {
    color: white;
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
