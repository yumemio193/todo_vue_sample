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
          <v-btn color="primary" @click="update">更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    update() {
      this.$root.updateTodo({
        id: this.todo.id,
        title: this.title,
      });
      this.toTodoList();
    }
  },
  mounted() {
    if (this.todo) {
      this.title = this.todo.title;
    }
  }
};
</script>
