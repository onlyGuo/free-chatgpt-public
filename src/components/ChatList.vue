<script setup>
const props = defineProps({
    conf: {
        type: Object,
        default: {
            chats: [
                {
                    title: '',
                    messages: [
                        {
                            role: 'assistant',
                            content: '你好',
                        }
                    ],
                }
            ]
        }
    }
})
</script>

<template>
<div style="calc(height: 100% - 10px)">
    <div class="new-chat">New Chat</div>
    <div class="list">
        <div class="item" v-for="item in props.conf.chats">
            <div class="title" v-text="item.title"></div>
            <div class="delete">删除</div>
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
        width: calc(100% - 20px);
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
      cursor: pointer;
      &:hover{
        background-color: #ccc;
        color: black;
      }
        .title {
            font-size: 16px;
        }
        .delete {
            font-size: 12px;
        }
    }

}
</style>