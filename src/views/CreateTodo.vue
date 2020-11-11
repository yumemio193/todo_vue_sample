<template>
  <div id="create-todo">
    <router-link to="/">＜ 戻る</router-link>
    <h1>Todo追加</h1>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" v-model="title"/>
    </p>
    <button @click="registerTodo">登録</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    registerTodo() {
      const todo = {
        id: uuidv4(),
        title: this.title,
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    }
  }
};
</script>

<style scoped>
</style>