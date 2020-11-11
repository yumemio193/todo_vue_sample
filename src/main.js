import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import todos from "./assets/mockTodo";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  data: {
    message: "hello",
    todos,
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    updateTodo(todo) {
      const id = this.todos.findIndex((item) => item.id == todo.id);

      if (id >= 0) {
        this.todos[id].title = todo.title;
      }
    },
  },
}).$mount('#app')
