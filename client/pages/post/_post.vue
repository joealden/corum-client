<template>
<section>
  <div id="title-wrapper">
      <h1>{{ Post.title }}</h1>
  </div>
  <div id="wrapper">
    <div id="author-created">
      <div>Author: <span>{{ Post.author }}</span></div>
      <div>Created At: <span>{{ formatedTime }}</span></div>
    </div>
    <div id="post-details">
      <div id="post-content">
        <p>{{ Post.content }}</p>
      </div>
      <div id="vote-count">
        <button><i class="fa fa-angle-up" aria-hidden="true"></i></button>
        <span>{{ Post.voteCount }}</span>
        <button><i class="fa fa-angle-down" aria-hidden="true"></i></button>
      </div>
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

      // make the output of time.getMinutes() padded
      let minutes = time.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      return ` ${hours}:${minutes} - ${day}/${month}/${year} `;
    }
  },
  apollo: {
    Post: {
      query: post,
      variables() {
        return { id: this.$route.params.post };
      }
    }
  },
  head() {
    return { title: this.Post.title };
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

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
  }
}

#wrapper {
  margin: 1.5rem;
}

#author-created {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  background-color: $primary-blue;
  color: white;
  padding: 1rem 1.2rem;
  border-radius: 0.5rem;

  div {
    text-transform: uppercase;
    font-weight: 600;
  }

  div > span {
    color: $nav-hover;
    text-transform: lowercase;
    font-weight: normal;
    margin-left: 0.2rem;
  }
}

#post-details {
  display: flex;
  justify-content: space-between;
}

#post-content {
  width: 100%;
  background-color: #ddd;
  margin-right: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

#vote-count {
  padding: 0.75rem;
  background-color: $primary-blue;
  color: white;
  border-radius: 0.5rem;

  button {
    padding: 0.8rem 1rem;
    background-color: $hover-blue;
    color: white;
    border: none;
    border-radius: 0.3rem;
    transition: 0.15s ease-in-out;

    &:hover:first-child {
      background-color: $nav-hover;
    }

    &:hover:last-child {
      background-color: red;
    }
  }

  span {
    display: block;
    font-size: 2rem;
    padding: 0.5rem;
  }
}


</style>