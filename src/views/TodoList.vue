<template>
  <div>
    <button class="button" @click="toCreateTodo">新規作成</button>
    <h1>Todoリスト</h1>
    <Todo
      v-for="todo in this.$root.todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import Todo from "../component/Todo";
export default {
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/create");
    }
  },
};
</script>
