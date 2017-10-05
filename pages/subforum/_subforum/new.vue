<template>
<section>
  <div id="title-wrapper">
    <h1>New Post</h1>
  </div>
  <form>
    <input 
      type="text" 
      placeholder="Post Title" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Post Title'"
    >
    <div id="content-editor">
      <textarea
        placeholder="Post Content" 
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='Post Content'"
        @input="update"
      />
      <div id="content-preview" v-html="compiledMarkdown"></div>
    </div>
    <div id="create-post-wrapper">
      <button @click.prevent>
        <i class="fa fa-plus" aria-hidden="true"/>Create Post
      </button>
    </div>
  </form>
</section>
</template>

<script>
import marked from 'marked';
import debounce from 'lodash.debounce';

export default {
  head: () => 'New Post',
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  data: () => ({ input: '' }),
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

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

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
  }
}

form {
  flex-grow: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  input, 
  div > textarea {
    padding: 1.25rem;
    margin-bottom: 1rem;
    font-size: 1.65rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    font-size: 1.5rem;
    outline: none;
  }

  #content-editor {
    flex-grow: 1;
    display: flex;

    textarea {
      padding: 1.25rem;
      resize: none;
      border-radius: 0.5rem;
      flex-grow: 1;
      margin-right: 1rem;
    }

    #content-preview {
      background-color: #eee;
      font-size: 1.5rem;      
      border-radius: 0.5rem;
      flex-grow: 1;
      margin-bottom: 1rem;
      text-align: left;
    }
  }
}

#create-post-wrapper {
  display: flex;
  flex-direction: row-reverse;

  button {
    font-size: 1.2rem;
    width: 15rem;
    padding: 1rem;
    background: $primary-blue;
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