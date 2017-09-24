<template>
<main>
  <h1>{{ $route.params.subforum }}</h1>
  <div id="toolbar">
    <form>
      <input type="radio" id="popular" name="sort" value="popular" checked>
      <label for="popular">Most Popular</label>
      <input type="radio" id="new" name="sort" value="new">
      <label for="new">Newest</label>
    </form>
    <nuxt-link to="/new/post">New Post</nuxt-link>
  </div>
  <post-list />
</main>
</template>

<script>
import PostList from '~/components/subforum/PostList.vue';

export default { // $route.params.subforum
  components: {
    PostList
  },
  head() {
    return {
      title: 'Subforum' // TODO: wire up to subforum name
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  background-color: #eee;
  overflow: hidden;
}

h1 {
  font-size: 2rem;
  text-transform: capitalize;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: black;
  color: white;
  width: 93%;
  border-left: 2px solid black;
  border-right: 2px solid black;

  @media screen and (min-width: 1800px) {
    width: 1500px;
  }
}

#toolbar {
  margin: 0 auto;
  padding: 0.5em 1.5rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  width: 93%;
  align-items: center;
  background-color: #ddd;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;

  @media screen and (min-width: 1800px) {
    width: 1500px;
  }

  form {
    label[for="popular"] {
      padding-right: 0.7rem;
    }
    label {
      padding-left: 0.25rem;
    }
  }

  a {
    padding: 1rem;
    border: none;
    color: white;
    background-color: black;
    border-radius: 7px 7px 0 7px;
    
    &:hover {
      background-color: #333;
    }
  }
}
</style>
