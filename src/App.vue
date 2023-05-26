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
  <div style="z-index: 10;position:fixed;left: 0; top: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,.8); text-align: center">
      <div style="margin-top: 200px">
          <h1 style="color: white">相关帖子已被删除，本项目终止开发</h1>
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
