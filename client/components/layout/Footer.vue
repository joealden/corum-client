<template>
<footer>
  <p>Made by <a href="https://github.com/joealden">joealden</a></p>
</footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: footer-right;
  background-color: #c0c0c0;
  border-top: 2px solid black;
  padding-right: 20px;
}

a,
a:visited,
a:hover {
  color: blue;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
