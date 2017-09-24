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
  overflow: hidden;
  background-color: #eee;
}

h1,
#toolbar {
  width: 93%;
  margin: 0 auto;
  border-left: 2px solid black;
  border-right: 2px solid black;

  @media screen and (min-width: 1800px) {
    width: 1500px;
  }
}

h1 {
  padding: 0.75rem 0;
  font-size: 2rem;
  text-transform: capitalize;
  background-color: black;
  color: white;
}

#toolbar {
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  background-color: #ddd;
  border-bottom: 2px solid black;

  form {
    margin-left: 0.5rem;

    label[for="popular"] {
      padding-right: 0.7rem;
    }

    label {
      padding-left: 0.25rem;
    }
  }

  a {
    margin-right: 0.5rem;
    padding: 0.6rem 0.6rem 0.4rem 0.6rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 7px 7px 0 7px;

    &:hover {
      background-color: #333;
    }
  }
}
</style>