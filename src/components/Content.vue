<script setup>

import InputBox from "./InputBox.vue";
import Ept from "./Ept.vue";
import Message from "./Message.vue";
const prop = defineProps({
    conf: {
        type: Object,
        default: {
            title: '未命名会话',
            messages: []
        }
    }
})
</script>

<template>
<div style="height: 100%">
    <ept v-if="!prop.conf || prop.conf.messages.length === 0">
    </ept>

    <div class="message-list" v-else>
        <message :message="item" v-for="item in prop.conf.messages" :key="item.id" v-if="prop.conf"></message>
        <div style="height: 80px"></div>
    </div>

    <div class="input-box">
        <input-box></input-box>
    </div>
</div>
</template>

<style scoped lang="less">

.message-list{
    height: 100%;
    overflow: auto;
}

.input-box{
    position: fixed;
    z-index: 1;
    width: calc(100% - 201px);
    height: 60px;
    bottom: 0;
}
</style>