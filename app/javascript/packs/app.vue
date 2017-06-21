<template>
  <div id="app">
    <p>{{ message }}</p>
    {{posts}}
  </div>
</template>

<script>
export default {
  props: ['message', 'posts'],
  created () {
    console.log(this.message)
  },
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
