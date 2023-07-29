<script setup>
import glob from "./libs/glob.js";
import ChatList from "./components/ChatList.vue";
import Content from "./components/Content.vue";
import MessageBox from "./components/MessageBox.vue";
import SettingMessageBox from "./components/SettingMessageBox.vue";
if(!glob.selectChat){
    glob.selectChat = glob.chats[0];
}

// 判断是否是手机
const isMobile = () => {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
if(isMobile()) {
    window.location.href = 'https://chat.icoding.ink/mobile.html';
}else{
    window.location.href = 'https://chat.icoding.ink/pc-chat';
}

</script>

<template>
  <div style="height: 100%">
      <div class="left">
        <chat-list :conf="glob"></chat-list>
      </div>
      <div class="content">
        <content :conf="glob.selectChat"></content>
      </div>
      <message-box></message-box>
      <setting-message-box></setting-message-box>
  </div>
</template>

<style scoped lang="less">
.left {
  width: 250px;
  height: 100%;
  background-color: #313131;
  border-right: 1px solid #ccc;
  float: left;
}
.content {
  width: calc(100% - 251px);
  height: 100%;
  float: right;
}
</style>
