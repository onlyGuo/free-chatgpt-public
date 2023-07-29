<script setup>
import glob from "../libs/glob.js";

const props = defineProps({
    conf: {
        type: Object,
        default: {
            chats: []
        }
    }
})
const openPromt = (item) => {
    const title = prompt('请输入会话名称', item.title);
    if(title && title !== item.title){
        // 判断是否有重名
        for (let i in glob.chats){
            if(glob.chats[i].title === title){
                alert('已存在名称为' + title + '的会话');
                return;
            }
        }
        item.title = title;
        glob.restore();
    }
}
const deleteChat = (item) => {
    if(confirm('确定删除会话' + item.title + '吗？')){
        const index = glob.chats.indexOf(item);
        glob.chats.splice(index, 1);
        if(glob.selectChat === item){
            if (glob.chats.length > 0){
                glob.selectChat = glob.chats[0];
            }else{
                glob.selectChat = null;
            }
        }
        glob.restore();
    }
}
const newChat = () => {
    const title = prompt('请输入会话名称', '新会话');
    if(title){
        // 判断是否有重名
        for (let i in glob.chats){
            if(glob.chats[i].title === title){
                alert('已存在名称为' + title + '的会话');
                return;
            }
        }
        const chat = {
            title: title,
            messages: []
        };
        glob.chats.push(chat);
        glob.selectChat = chat;
        glob.restore();
    }
}
</script>

<template>
<div style="calc(height: 100% - 10px)">
    <div class="new-chat" @click="newChat">New Chat</div>
    <div class="setting-btn" @click="glob.settings.open = true">设置</div>
    <div class="list">
        <div class="item" @click.stop="glob.selectChat = item" :class="{active: item === glob.selectChat}" v-for="item in props.conf.chats">
            <img src="../assets/chat.svg" class="chat-icon" />
            <div class="title" v-text="item.title"></div>
            <div class="icons">
                <img src="../assets/edit.svg" class="edit-icon" @click.stop="openPromt(item)"/>
                <img src="../assets/delete.svg" class="delete-icon" @click.stop="deleteChat(item)" />
            </div>
<!--            <div class="delete"></div>-->
        </div>
    </div>
</div>
</template>

<style scoped lang="less">
.new-chat{
    width: calc(100% - 20px);
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #313131;
    color: white;
    cursor: pointer;
  border: gray solid 1px;
  border-radius: 10px;
  margin: 10px auto;
  transition: all 0.3s;
    &:hover{
        background-color: #ccc;
        color: black;
    }
}
.list {
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
    color: white;
    .item {
        width: calc(100% - 40px);
        margin: 5px auto;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border: #444444 solid 1px;
        border-radius: 6px;
        transition: all 0.3s;
        &:hover{
            border: #737373 solid 1px;
        }
        &.active{
            background-color: #444444;
        }
        .title {
            font-size: 16px;
        }
        .edit-icon {
            width: 15px;
            height: 15px;
            margin-right: 5px;
            &:hover{
                transform: scale(1.2);
            }
        }
        .delete-icon {
            width: 15px;
            height: 15px;
            &:hover{
                transform: scale(1.2);
            }
        }
        .chat-icon{
            width: 20px;
            height: 20px;
        }
    }
}
.setting-btn {
    width: calc(100% - 20px);
    margin: 10px auto;
    height: 30px;
    line-height: 30px;
    border: dodgerblue solid 1px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    color: white;
    &:hover{
        background-color: dodgerblue;
        color: white;
    }
}
</style>