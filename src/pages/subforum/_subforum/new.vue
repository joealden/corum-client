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
    <textarea
      placeholder="Post Content" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Post Content'"
    />
    <div>
      <button @click.prevent>
        <i class="fa fa-plus" aria-hidden="true"/>Create Post
      </button>
    </div>
  </form>
</section>
</template>

<script>
export default { head: () => 'New Post' };
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

section {
  height: 100%;
  margin: 3rem;
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

form {
  flex-grow: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

input, textarea {
  padding: 1.25rem;
  margin-bottom: 1rem;
  font-size: 1.65rem;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  outline: none;
  background-color: #eee;
  font-size: 1.5rem;

  &:hover,
  &:focus {
    transform: translateY(-0.1rem);
    box-shadow: 0 4px 10px #999;
  }
}

textarea {
  flex-grow: 1;
  padding: 1.25rem;
  resize: none;
  outline: none;
  border-radius: 0.5rem;
}

div {
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