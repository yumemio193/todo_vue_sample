<template>
  <div>
    <button class="button" @click="toCreateTodo">新規作成</button>
    <h1>Todoリスト</h1>
    完了したTodoを隠す<input type="checkbox" v-model="hideDoneTodo">
    <Todo
      v-for="todo in filteredTodo"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import Todo from "../component/Todo";
export default {
  name: "TodoList",
  data() {
    return {
      hideDoneTodo: true,
    };
  },
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/create");
    }
  },
  computed: {
    filteredTodo() {
      if (this.hideDoneTodo) {
        return this.$root.todos.filter(item => item.done == false);
      }
      return this.$root.todos;
    }
  }
};
</script>
