<template>
  <v-container>
    <v-row justify="end">
      <v-switch 
        v-model="hideDoneTodo"
        label="完了したTodoを隠す"
        class="mx-1"
      ></v-switch>
    </v-row>
    <v-row>
      <v-btn @click="toCreateTodo" color="success" class="font-weight-bold">
        <v-icon left>mdi-pencil-plus</v-icon> 新規作成
      </v-btn>
    </v-row>
    <v-row class="flex-column">
      <Todo
        v-for="todo in filteredTodo"
        :key="todo.id"
        :todo="todo"
      />
    </v-row>
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
