<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      TODOアプリ
    </v-app-bar>
    <v-content>
      <keep-alive include="TodoList">
        <router-view/>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>