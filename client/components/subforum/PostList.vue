<template>
<ul id="post-list">
  <li v-for="post in posts" :key="post.id">
    <nuxt-link :to="'/post/' + post.id" class="post">
      <div>{{ post.title }}</div>
      <div v-if="post.voteCount < 0" class="negative">{{ post.voteCount }}</div>
      <div v-if="post.voteCount === 0" class="neutral">{{ post.voteCount }}</div>
      <div v-if="post.voteCount > 0" class="positive">{{ post.voteCount }}</div>
    </nuxt-link> 
  </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      posts: [ // dummy post data, will be fetched from GraphQL server
        { id: 'a', title: 'Test 1 this is a test sentence', voteCount: 21 },
        { id: 'b', title: 'Test 2 this is a test sentence', voteCount: 3 },
        { id: 'c', title: 'Test 3 this is a test sentence', voteCount: 10 },
        { id: 'd', title: 'Test 4 this is a test sentence', voteCount: 2003 },
        { id: 'e', title: 'Test 5 this is a test sentence', voteCount: 102 },
        { id: 'f', title: 'Test 6 this is a test sentence', voteCount: 0 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 },
        { id: 'g', title: 'Test 7 this is a test sentence', voteCount: -43 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#post-list {
  margin: 0 auto;
  padding-left: 0;
  width: 93%;
  height: 100%;
  overflow: auto;
  background-color: white;
  border-left: 2px solid black;
  border-right: 2px solid black;

  @media screen and (min-width: 1800px) {
    width: 1500px;
  }
}

li {
  list-style: none;
}

li:nth-child(even) {
  background-color: #eee;
}

li:hover {
  background-color: #222;
  a > div {
    color: white;
  }
}

li:active {
  background-color: black;
  a > div {
    color: white;
  }
}

.post {
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  padding: 1rem;
}



.negative { color: DarkRed }
.neutral { color: black }
.positive { color: MediumSeaGreen }
</style>

