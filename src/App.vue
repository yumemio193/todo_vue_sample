<template>
  <div id="app">
    <p>TODOアプリ</p>
    <hr>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "./component/Todo";
import { v4 as uuidv4 } from "uuid"
export default {
  name: "App",
  components: {
    Todo
  },
  data() {
    return {
      todos: [
        {id: uuidv4(), title: "朝食を食べる"},
        {id: uuidv4(), title: "昼食を食べる"},
        {id: uuidv4(), title: "夕食を食べる"},
      ]
    }
  }
}
</script>

<style>
#app {
  width: 70%;
  margin: auto;
}
</style>
