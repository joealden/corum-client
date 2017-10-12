<template>
<transition name="fadeIn">
  <div v-if="loading"></div>
  <section v-else>
    <div id="title-wrapper">
      <div>Author: <span>{{ Post.author }}</span></div>
      <h1>{{ Post.title }}</h1>
      <div>Created At: <span>{{ formatedTime }}</span></div>
    </div>
    <div id="main-content-wrapper">
      <div id="post-details">
        <div id="post-content">
          <div>
            <p>{{ Post.content }}</p>
          </div>
        </div>
        <div id="vote-count">
          <button>
            <i class="fa fa-angle-up" aria-hidden="true"/>
          </button>
          <span v-if="Post.voteCount < 0" class="negative">
            {{ Post.voteCount }}
          </span>
          <span v-else-if="Post.voteCount > 0" class="positive">
            {{ Post.voteCount }}
          </span>
          <span v-else class="neutral">
            {{ Post.voteCount }}
          </span>
          <button>
            <i class="fa fa-angle-down" aria-hidden="true"/>
          </button>
        </div>
      </div>
      <div id="comments-wrapper">
        <h2>
          <i class="fa fa-comments" aria-hidden="true"/>Comments
        </h2>
        <div v-if="Post.comments.length === 0" id="no-comments">
          <p>There aren't any comments yet!</p>
        </div>
        <ul v-else>
          <li v-for="comment in Post.comments" :key="comment.id">
            <div>{{ comment.content }}</div>
            <div v-if="comment.author === Post.author" class="author-comment">
              {{ comment.author }}
            </div>
            <div v-else class="non-author-comment">
              {{ comment.author }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <form id="add-comment">
      <textarea 
        name="comment-field"
        placeholder="New Comment..."
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='New Comment...'"
      />
      <button @click.prevent>
        <i class="fa fa-paper-plane" aria-hidden="true"/>Post Comment
      </button>
    </form>
  </section>
</transition>  
</template>

<script>
import post from '~/apollo/queries/post.gql';

export default {
  apollo: {
    Post: {
      query: post,
      variables() { return { id: this.$route.params.post }; },
      fetchPolicy: 'cache-and-network',
      loadingKey: 'loading'
    }
  },
  computed: {
    // Graph.cool returns unformatted date
    formatedTime() {
      const time = new Date(this.Post.createdAt)
      const day = time.getDate()
      const month = time.getMonth()
      const year = time.getFullYear()
      const hours = time.getHours()

      // make the output of time.getMinutes() padded
      let minutes = time.getMinutes()
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      return `${hours}:${minutes} - ${day}/${month}/${year}`
    }
  },
  data: () => ({
    Post: '',
    loading: 0
  }),
  head() {
    return { title: this.Post.title }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/variables';
@import '../../../../assets/styles/fadeTransition';

section {
  overflow: auto;
  margin: 2rem;
  font-size: 1.5rem;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 25px #999;
  display: flex;
  flex-direction: column;
}

#title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1rem 1.5rem;
  background-color: $primary-blue;
  color: white;
  min-height: 2.5rem;

  div {
    text-transform: uppercase;
    font-weight: 600;

    // Hack to get post title centered
    width: 25%;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
    // --------------------------------

    span {
      color: $nav-hover;
      text-transform: lowercase;
      font-weight: normal;
      margin-left: 0.2rem;
      white-space: nowrap;
    }
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
}

#main-content-wrapper {
  margin: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#post-details {
  display: flex;
  justify-content: space-between;
}

#post-content {
  width: 100%;
  background-color: #eee;
  margin-right: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  white-space: pre-wrap;

  div {
    overflow: auto;
    p {
      padding: 0 1.5rem;
      margin: 0;
      overflow: hidden;
      text-align: left;
    }
  }
}

#vote-count {
  padding: 0.75rem;
  background-color: $primary-blue;
  color: white;
  border-radius: 0.5rem;
  height: 10rem; // keep vote count the same height

  button {
    padding: 0.8rem 1rem;
    background-color: $hover-blue;
    color: white;
    border: none;
    border-radius: 0.3rem;
    transition: 0.15s ease-in-out;
    outline: none;
    width: 100%;

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

.negative { color: red }
.neutral { color: white }
.positive { color: $nav-hover }

#comments-wrapper {
  background-color: #eee;
  border-radius: 0.5rem;
  margin-top: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    font-size: 1.75rem;
    text-transform: uppercase;
    font-weight: 600;
    background-color: $primary-blue;
    color: white;

    i {
      margin-right: 0.5rem;
      color: $nav-hover;
    }
  }

  ul {
    margin: 1rem 0;
    padding: 0;
    overflow: auto;

    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin: 1rem;

      &:first-child { margin-top: 0 }
      &:last-child { margin-bottom: 0 }

      div:first-child {
        background-color: white;
        padding: 1rem;
        border-radius: 0.5rem 0 0 0.5rem;
        flex-grow: 1;
        text-align: left;
      }

      div:last-child {
        padding: 1rem;
        background-color: $primary-blue;
        border-radius: 0 0.5rem 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

#no-comments {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
}

.author-comment {
  color: $nav-hover;
}

.non-author-comment {
  color: white;
}

#add-comment {
  margin-top: auto; // make element stick to bottom of the page
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: $primary-blue;
  color: white;

  textarea {
    flex-grow: 1;
    margin-right: 1rem;
    font-size: 1.5rem;
    padding: 1.25rem;
    resize: none;
    outline: none;
    border-radius: 0.5rem;
    vertical-align: middle;
  }

  button {
    font-size: 1.2rem;
    padding: 0.8rem 1.1rem;
    background: $hover-blue;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.15s ease-in-out;
    outline: none;

    i {
      margin-right: 0.5rem;
      color: $nav-hover;
      transition: 0.15s ease-in-out;
    }

    &:hover {
      background-color: $nav-hover;
      
      i {
        color: white;
      }
    }
  }
}
</style>