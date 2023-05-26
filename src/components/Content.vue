<script setup>

import InputBox from "./InputBox.vue";
</script>

<template>
<div style="height: 100%">
    <div class="ept">
        <h2>ChatGPT 能做什么？</h2>
        <div class="item">
            <div class="title">问答任务</div>
            ChatGPT 可以回答用户的问题，从而提供相关信息
        </div>
        <div class="item">
            <div class="title">翻译任务</div>
            ChatGPT 可以将一种语言翻译成另一种语言
        </div>
        <div class="item">
            <div class="title">摘要任务</div>
            ChatGPT 可以生成一篇文档的摘要信息，有效地提取重点信息
        </div>
        <div class="item">
            <div class="title">客服任务</div>
            ChatGPT 可以帮助解答客户的问题，从而帮助客户解决问题
        </div>
        <div class="item">
            <div class="title">聊天机器人</div>
            ChatGPT 可以像人一样与用户进行对话，并有效地理解用户的意图
        </div>
        <div class="item">
            <div class="title">文字分类</div>
            ChatGPT 可以将一组文本进行分类，如情感分析任务
        </div>
        <div class="item">
            <div class="title">文字生成</div>
            ChatGPT 可以生成文本数据，如故事、新闻、小说、报表等
        </div>
        <div class="item">
            <div class="title">图像描述</div>
            ChatGPT 可以识别图像并生成对图像的描述，以方便使用绘图AI
        </div>
        <div class="item">
            <div class="title">数据统计</div>
            ChatGPT 可以对有规律的数据进行统计分析，如股票、气象等
        </div>
        <div style="margin-top: 20px; color: gray; font-size: 12px">
            若要使用ChatGPT，请先在官网注册账号，然后
            <a href="https://platform.openai.com/account/api-keys" target="_blank">点击此处</a>
            创建一个Key，<a href="javascript:;">点击此处</a>设置你的Key即可使用。
        </div>
    </div>

    <div class="input-box">
        <input-box></input-box>
    </div>
</div>
</template>

<style scoped lang="less">
.ept{
    text-align: center;
    padding: 100px;
    width: 900px;
    margin: auto;
    .item{
        background-color: #e1e1e1;
        border-radius: 5px;
        padding: 10px;
        display: inline-block;
        font-size: 12px;
        color: #313131;
        width: 200px;
        margin: 20px;
        .title{
            font-size: 16px;
            font-weight: bold;
        }
    }
}
.input-box{
    position: fixed;
    z-index: 1;
    width: calc(100% - 201px);
    height: 60px;
    bottom: 0;
}
</style>