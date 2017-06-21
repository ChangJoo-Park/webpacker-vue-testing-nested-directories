<template>
  <div id="app">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{post.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
