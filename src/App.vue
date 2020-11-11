<template>
  <div id="app">
    <p>TODOアプリ</p>
    <hr />
    <keep-alive include="TodoList">
      <router-view/>
    </keep-alive>
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