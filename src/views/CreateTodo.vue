<template>
  <div id="create-todo">
    <router-link to="/">＜ 戻る</router-link>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" />
    </p>
    <button>登録</button>
  </div>
</template>

<style scoped>
#create-todo {
  width: 80%;
  margin: auto;
}
#title {
  width: 90%;
}
</style>