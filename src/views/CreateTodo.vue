<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="title"
            v-model="title"
            :rules="[]"
            label="タイトル"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="toTodoList" text>
            <v-icon left>mdi-less-than</v-icon> キャンセル
          </v-btn>
          <v-spacer/>
          <v-btn color="primary" @click="registerTodo">登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      title: "",
      done: false,
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    registerTodo() {
      const todo = {
        id: uuidv4(),
        title: this.title,
        done: false,
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    }
  }
};
</script>
