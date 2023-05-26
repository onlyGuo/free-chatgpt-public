<script setup>
import glob from "./libs/glob.js";
import ChatList from "./components/ChatList.vue";
import Content from "./components/Content.vue";
</script>

<template>
  <div style="height: 100%">
      <div class="left">
        <chat-list :conf="glob"></chat-list>
      </div>
      <div class="content">
        <content></content>
      </div>
  </div>
</template>

<style scoped lang="less">
.left {
  width: 200px;
  height: 100%;
  background-color: #313131;
  border-right: 1px solid #ccc;
  float: left;
}
.content {
  width: calc(100% - 201px);
  height: 100%;
  float: right;
}
</style>
