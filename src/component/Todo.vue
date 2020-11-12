<template>
  <div>
    <input type="checkbox" class="checkbox" />
    <div class="todo_detail">
      {{todo.title}}
      <button @click="toEditTodo">編集</button>
      <button @click="remove">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    toEditTodo() {
      this.$router.push({
        name: "edit",
        params: {
          todo: this.todo,
        }
      });
    },
    remove() {
      const result = confirm("削除しますか？");
      if (result) {
        this.$root.removeTodo(this.todo.id);
      }
    }
  }
}
</script>

<style scoped>
.checkbox {
  display: inline-block;
  vertical-align: middle;
}
.todo_detail {
  display: inline-block;
  vertical-align: middle;
  padding-left: 1rem;
}
</style>
