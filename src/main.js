import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import vuetify from './plugins/vuetify';

import localStorage from "vue-ls";
const options = {
  namespace: "vue_todo_ls_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local", // storage name session, local, memory
};
Vue.use(localStorage, options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

  data: {
    message: "hello",
    todos: [],
  },

  vuetify,

  methods: {
    getTodos() {
      this.todos = this.$ls.get("todos") || [];
    },
    setTodos() {
      this.$ls.set("todos", this.todos);
    },
    addTodo(todo) {
      this.todos.push(todo);
      this.setTodos();
    },
    updateTodo(todo) {
      const id = this.todos.findIndex((item) => item.id == todo.id);

      if (id >= 0) {
        this.todos[id].title = todo.title;
        this.setTodos();
      }
    },
    removeTodo(id) {
      const index = this.todos.findIndex((item) => item.id == id);

      if (index >= 0) {
        this.todos.splice(index, 1);
        this.setTodos();
      }
    }
  },
  mounted() {
    this.$root.getTodos();
  }
}).$mount('#app')
