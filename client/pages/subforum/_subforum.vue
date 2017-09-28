<template>
<main>
  <section>
    <h1>{{ $route.params.subforum }}</h1> <!-- Use actual title instead -->
    <div id="toolbar">
      <form>
        <label>
          <input type="radio" id="popular" name="sort" value="popular" checked>
          Most Popular
        </label>
        <label>
          <input type="radio" id="new" name="sort" value="new">
          Newest
        </label>
      </form>
      <nuxt-link to="/new/post">New Post</nuxt-link>
    </div>
    <ul id="post-list">
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
</main>
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

main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2.5rem;
}

section {
  overflow: hidden;
  font-size: 1.5rem;
  height: 100%;
  border: 2px solid $primary-blue;
  border-radius: 0.5rem;
  background-color: white;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  padding: 0.75rem;
  background-color: $primary-blue;
  color: white;
}

#toolbar {
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid black;

  form > label:first-child {
    margin-right: 0.75rem;
  }

  form > label > input {
    margin-right: -2px;
  }

  a {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    background: #18191E;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
      background-color: #333;
    }
  }
}

#post-list {
  overflow: auto;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;

  &:hover,
  &:active {
    a > div {
      color: white;
    }
  }

  &:hover {
    background-color: #222;
  }

  &:active {
    background-color: black;
  }
}

.post {
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
}

.negative { color: DarkRed }
.neutral { color: black }
.positive { color: MediumSeaGreen }
</style>