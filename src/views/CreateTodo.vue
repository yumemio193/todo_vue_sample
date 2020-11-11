<template>
  <div id="create-todo">
    <router-link to="/">＜ 戻る</router-link>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" v-model="title"/>
    </p>
    <button @click="registerTodo">登録</button>
  </div>
</template>

<script>
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
        title: this.title,
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    }
  }
};
</script>

<style scoped>
#create-todo {
  width: 80%;
  margin: auto;
}
#title {
  width: 90%;
}
</style>