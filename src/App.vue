<template>
  <div id="app">
    <p>TODOアプリ</p>
    <hr />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
#app {
  width: 70%;
  margin: auto;
}
</style>