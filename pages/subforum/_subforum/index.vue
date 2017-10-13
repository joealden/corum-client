<template>
<transition name="fadeIn">
  <div v-if="loading"></div>
  <section v-else>
    <div id="title-wrapper">
      <h1>{{ Subforum.name }}</h1>
    </div>
    <div id="toolbar">
      <form>
        <label>
          <input 
            type="radio" 
            id="popular"
            name="sort"
            value="popular"
            checked
          >
          Most Popular
        </label>
        <label>
          <input
            type="radio"
            id="new"
            name="sort"
            value="new"
          >
          Newest
        </label>
      </form>
      <nuxt-link :to="`/subforum/${$route.params.subforum}/new`">
        <i class="fa fa-plus" aria-hidden="true"></i>New Post
      </nuxt-link>
    </div>
    <div id="row-titles">
      <span>Post Title</span>
      <span>Vote Count</span>
    </div>
    <div v-if="allPosts.length === 0" id="no-posts">
      <p>It looks like there aren't any posts here yet!</p>
    </div>
    <ul v-else>
      <li v-for="post in allPosts" :key="post.id">
        <nuxt-link :to="`/subforum/${$route.params.subforum}/post/${post.id}`">
          <div class="post-title">
            {{ post.title }}
          </div>
          <div v-if="post.voteCount < 0" class="negative">
            {{ post.voteCount }}
          </div>
          <div v-else-if="post.voteCount > 0" class="positive">
            {{ post.voteCount }}
          </div>
          <div v-else class="neutral">
            {{ post.voteCount }}
          </div>
        </nuxt-link> 
      </li>
    </ul>  
  </section>
</transition>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql';
import subforumName from '~/apollo/queries/subforumName.gql';

export default {
  apollo: {
    Subforum: {
      query: subforumName,
      variables() { return { url: this.$route.params.subforum } },
      loadingKey: 'loading'
    },

    allPosts: {
      query: allPosts,
      fetchPolicy: 'cache-and-network', // fetch new posts when going to same subforum
      variables() { return { subforumUrl: this.$route.params.subforum } },
      loadingKey: 'loading'
    }
  },

  data: () => ({
    Subforum: '',
    allPosts: '',
    loading: 0
  }),

  head() {
    if (this.Subforum.name) {
      return { title: this.Subforum.name }
    }
    return { title: 'Loading...' }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';
@import '../../../assets/styles/fadeTransition';

section {
  flex-grow: 1;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 25px #999;

}

#title-wrapper {
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0;
  padding: 0.75rem;
  background-color: $primary-blue;
  color: white;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
}

#toolbar {
  padding: 0 0.75rem;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    padding: 0.8rem 1.1rem;
    background: $primary-blue;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.15s ease-in-out;

    i {
      margin-right: 0.4rem;
      color: $nav-hover;
    }

    &:hover {
      background-color: $nav-hover;

      i {
        color: white;
      }
    }
  }
}

#row-titles {
  padding: 0.75rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-blue;
  color: white;

  span {
    font-weight: 600;
    text-transform: uppercase;
  }
}

#no-posts {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
}

ul {
  flex-grow: 1;
  overflow: auto;
  padding: 0;
  margin: 0; 
}

li {
  list-style: none;

  a {
    display: flex;
    justify-content: space-between;
    padding: 1.75rem;
    transition: 0.3s ease-in;

    &:hover {
      background-color: #eee;
    }
  }
}

.negative { color: red }
.neutral { color: black }
.positive { color: $nav-hover }
</style>