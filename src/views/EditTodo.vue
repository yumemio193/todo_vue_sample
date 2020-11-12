<template>
  <v-container>
    <router-link to="/">＜ 戻る</router-link>
    <h1>Todo編集</h1>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" v-model="title">
    </p>
    <v-row>
      <v-btn @click="update" color="success" class="font-weight-bold">
        更新
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    update() {
      this.$root.updateTodo({
        id: this.todo.id,
        title: this.title,
      });
      this.toTodoList();
    }
  },
  mounted() {
    if (this.todo) {
      this.title = this.todo.title;
    }
  }
};
</script>
