<script setup>
import MarkdownIt from "markdown-it";
import markdownItKatex from 'markdown-it-katex'

const prop = defineProps({
    message: {
        type: Object,
        default: undefined
    }
})
const md = new MarkdownIt({
    // highlight: function (str, lang) {
    //     if (lang && hljs.getLanguage(lang)) {
    //         try {
    //             return hljs.highlight(lang, str).value;
    //         } catch (__) {}
    //     }
    //     return ''; // use external default escaping
    // }
});
md.use(markdownItKatex);

const getHtml = (content) => {
    return md.render(content);
}

</script>

<template>
<div>
    <div class="message" :class="{assistant: prop.message.role === 'assistant'}">

        <div class="content">
            <div class="header">
                <img class="avatar" src="../assets/chatgpticon.svg" alt="" v-if="prop.message.role === 'assistant'">
                <img class="avatar" src="../assets/avatar.png" alt="" v-if="prop.message.role === 'user'">
                <div class="nicker">{{prop.message.role}}</div>
            </div>

            <div class="message-content"
                 v-html="getHtml(prop.message.content)">
            </div>

        </div>
    </div>
</div>
</template>

<style scoped lang="less">
.message{
    padding: 10px;
    &.assistant{
        background-color: #eeeeee;
    }

    .content{
        padding: 10px;
        max-width: 1200px;
        margin: auto;
        vertical-align: top;
        .header{
            margin-bottom: 10px;
            .avatar{
                height: 30px;
                width: 30px;
                vertical-align: middle;
                margin-right: 10px;
                object-fit: cover;
            }
            .nicker{
                display: inline-block;
            }
        }
        .message-content{
            display: inline-block; width: calc(100% - 40px); margin-left: 40px;
            // 代码换行
            //white-space: pre-wrap;
        }

    }
}
</style>
<style>
.message .content .message-content pre{
    background-color: #cccccc;
    padding: 10px;
}
.message .content .message-content p{
    margin: 0;
    white-space: pre-wrap;
    line-height: 26px;
}
</style>