<template>
<section>
  <div id="title-wrapper">
    <h1>New Post</h1>
  </div> 
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
</style>