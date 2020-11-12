<template>
  <v-container>
    <router-link to="/">＜ 戻る</router-link>
    <h1>Todo追加</h1>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" v-model="title"/>
    </p>
    <v-row>
      <v-btn @click="registerTodo" color="success" class="font-weight-bold">
        登録
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      title: "",
      done: false,
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
        done: false,
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    }
  }
};
</script>
