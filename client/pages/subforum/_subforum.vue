<!-- TODO: FIX SCROLL ISSUE (SECTION SCROLLS - IT SHOULDNT) -->

<template>
<section>
  <h1>{{ $route.params.subforum }}</h1> <!-- Use actual title instead -->
  <div id="toolbar">
    <form>
      <label>
        <input type="radio" id="popular" name="sort" value="popular" checked>
        Popular
      </label>
      <label>
        <input type="radio" id="new" name="sort" value="new">
        Newest
      </label>
    </form>
    <nuxt-link to="/new/post">New Post</nuxt-link>
  </div>
  <ul>
    <li v-for="post in allPosts" :key="post.id">
      <nuxt-link :to="'/post/' + post.id">
        <div class="post-title">{{ post.title }}</div>
        <div v-if="post.voteCount < 0" class="negative post-vote-count">{{ post.voteCount }}</div>
        <div v-if="post.voteCount === 0" class="neutral post-vote-count">{{ post.voteCount }}</div>
        <div v-if="post.voteCount > 0" class="positive post-vote-count">{{ post.voteCount }}</div>
      </nuxt-link> 
    </li>
  </ul>
</section>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql';

export default {
  apollo: {
    allPosts: {
      query: allPosts,
      fetchPolicy: 'cache-and-network',
      // pollInterval: 10000, // If subscriptions are too difficult to use efficently
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
@import '../../assets/styles/variables';

section {
  overflow: auto;
  margin: 3rem;
  font-size: 1.5rem;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 25px #999;
}

h1 {
  border-radius: 0.5rem 0.5rem 0 0;
  font-size: 2.5rem;
  margin: 0;
  padding: 0.75rem;
  background-color: $primary-blue;
  color: white;
}

#toolbar {
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid $border;

  form > label {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    transition: 0.2s ease-in-out;

    &:hover {
      color: $nav-hover;
    }
  }

  form > label:first-child {
    margin-left: 0.25rem;
    margin-right: 1rem;
  }
  
  a {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    background: $primary-blue;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: translateY(-0.2rem); 
      box-shadow: 0 4px 10px #999;
      background-color: $nav-hover
    }
  }
}

ul {
  overflow: auto;
  padding: 0;
  margin: 0; 
}

li {
  list-style: none;

  a {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    transition: 0.3s ease-in;

    &:hover {
      background-color: $border;
    }
  }
}

.negative { color: DarkRed }
.neutral { color: black }
.positive { color: MediumSeaGreen }
</style>