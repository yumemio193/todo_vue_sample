import Vue from "vue";
import Router from "vue-router";
import TodoList from "./views/TodoList";
import CreateTodo from "./views/CreateTodo";
import EditTodo from "./views/EditTodo";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: TodoList },
    { path: "/create", component: CreateTodo },
    {
      name: "edit",
      path: "/edit",
      component: EditTodo,
      props(route) {
        return {
          ...route.params,
        };
      },
    },
  ],
});
