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
  <ul id="post-list">
    <li v-for="post in allPosts" :key="post.id">
      <nuxt-link :to="'/post/' + post.id" class="post">
        <div class="post-title">{{ post.title }}</div>
        <div v-if="post.voteCount < 0" class="negative post-vote-count">{{ post.voteCount }}</div>
        <div v-if="post.voteCount === 0" class="neutral post-vote-count">{{ post.voteCount }}</div>
        <div v-if="post.voteCount > 0" class="positive post-vote-count">{{ post.voteCount }}</div>
      </nuxt-link> 
    </li>
  </ul>
</main>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql';

export default { // $route.params.subforum
  apollo: {
    allPosts: {
      query: allPosts,
      variables() {
        return {
          subforumUrl: this.$route.params.subforum
        };
      }
    }
  },
  head() {
    return {
      title: 'Subforum' // TODO: wire up to subforum name
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/subforum'; 
</style>