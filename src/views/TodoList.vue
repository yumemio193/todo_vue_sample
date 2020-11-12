<template>
  <v-container>
    <v-row justify="end">
      <v-switch 
        v-model="hideDoneTodo"
        label="完了したTodoを隠す"
        class="mx-1"
      ></v-switch>
    </v-row>
    <button class="button" @click="toCreateTodo">新規作成</button>
    <Todo
      v-for="todo in filteredTodo"
      :key="todo.id"
      :todo="todo"
    />
  </v-container>
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
