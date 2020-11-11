<template>
  <div>
    <button class="button" @click="toCreateTodo">新規作成</button>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "../component/Todo";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/todo");
    }
  },
  data() {
    return {
      showRelative: true,
      todos: [
        {
          id: uuidv4(),
          title: "朝食を食べる",
        },
        {
          id: uuidv4(),
          title: "昼食を食べる",
        },
        {
          id: uuidv4(),
          title: "夕食を食べる",
        },
      ]
    };
  }
};
</script>
