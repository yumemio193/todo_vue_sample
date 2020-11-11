<template>
  <div>
    <input type="checkbox" class="checkbox" />
    <div class="todo_detail">
      {{todo.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo']
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
