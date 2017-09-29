<template>
<section>
  <div id="title-wrapper">
    <h1>{{ Post.title }}</h1>
  </div>
  <div id="post-details">
    <div id="author-created">
      <span>Created By: {{ Post.author }}</span>
      <span>Created At: {{ formatedTime }}</span>
    </div>
    <div id="vote-count">
      <button>Up</button>
      <span>{{ Post.voteCount }}</span>
      <button>Down</button>
    </div>
  </div>
</section>
</template>

<script>
import post from '~/apollo/queries/post.gql';

export default {
  data() {
    return {
      Post: {}
    };
  },
  computed: {
    formatedTime() {
      const time = new Date(this.Post.createdAt);
      const day = time.getDate();
      const month = time.getMonth();
      const year = time.getFullYear();
      const hours = time.getHours();
      const minutes = time.getMinutes();

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
  },
  apollo: {
    Post: {
      query: post,
      variables() {
        return {
          id: this.$route.params.post
        };
      }
    }
  },
  head() {
    return {
      title: 'Post' // TODO: wire up to post title
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

#title-wrapper {
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 3rem;
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

#post-details {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
}

#author-created {
 text-align: left;
}

span {
  display: block;
}

button {
  text-transform: uppercase;
}
</style>