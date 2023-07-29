<script setup>
import glob from "../libs/glob.js";
import {onMounted, ref} from "vue";

const toBottom = () => {
    const el = document.querySelector('.message-list');
    if (el){
        el.scrollTop = el.scrollHeight;
    }
}


// 回车发送
const onKeydown = (e) => {
    if(e.keyCode === 13){
        send();
    }
}

const send = () => {
    if(!inputValue.value){
        return;
    }
    const msg = {
        role: 'user',
        content: inputValue.value
    };
    if (!glob.selectChat){
        if (glob.chats.length > 0){
            glob.selectChat = glob.chats[0];
        }else{
            glob.selectChat = {
                title: '新会话',
                messages: []
            };
            glob.chats.push(glob.selectChat);
        }
    }
    glob.selectChat.messages.push(msg);
    glob.restore();
    inputValue.value = '';
    setTimeout(() => {
        toBottom();
    }, 100)
    const sendMsg = [];
    // 从消息列表中，取出最后3条
    const len = glob.selectChat.messages.length;
    for(let i = len - 3; i < len; i++){
        if(i >= 0){
            sendMsg.push(glob.selectChat.messages[i]);
        }
    }
    sendMsg.push(msg)
    if (glob.settings.apiKey && glob.settings.apiHost){
        let url = glob.settings.apiHost;
        if (url.endsWith('/')){
            url = url.substring(0, url.length - 1);
        }
        // url = ''
        url += '/v1/chat/completions'
        const moduleName = moduleMapper[selectModule.value];

        fetch(url , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + glob.settings.apiKey
            },
            body: JSON.stringify({
                model: moduleName,
                temperature: 0.5,
                top_p: 1,
                stream: true,
                messages: sendMsg,
            })
        }).then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            const recMsg = {
                role: 'assistant',
                content: ref('')
            };
            glob.selectChat.messages.push(recMsg);
            return reader.read().then(function processText({ done, value }) {
                if (done) {
                    glob.restore();
                    return;
                }
                let line = decoder.decode(value);
                line = line.trim();
                if (line.startsWith("{") && line.endsWith("}")){
                    recMsg.content.value += '\n````\n' + line +"\n````\n";
                    toBottom();
                    return reader.read().then(processText);
                }
                if (line === ''){
                    toBottom();
                    return reader.read().then(processText);
                }
                if (line === '[DONE]'){
                    toBottom();
                    return reader.read().then(processText);
                }
                if (line.startsWith("data:")){
                    line = line.substring(5);
                }
                if (line.indexOf('\n')){
                    line.split('\n').forEach((item) => {
                        item = item.trim();
                        if (item === '[DONE]'){
                            return;
                        }
                        if (item.startsWith("data:")){
                            item = item.substring(5);
                        }
                        if (item.trim() === ''){
                            return;
                        }
                        try{
                            const json = JSON.parse(item);
                            if(json.choices && json.choices.length > 0 && json.choices[0].delta && json.choices[0].delta.content){
                                recMsg.content.value += json.choices[0].delta.content;
                            }
                        }catch (e){
                            return;
                        }
                    })
                }else{
                    try{
                        const json = JSON.parse(line);
                        if(json.choices && json.choices.length > 0 && json.choices[0].delta && json.choices[0].delta.content){
                            recMsg.content.value += json.choices[0].delta.content;
                        }
                    }catch (e){
                        return;
                    }
                }
                toBottom();
                return reader.read().then(processText);
            });
        }).catch(error => {
            console.log(error)
        });
    }else{
        fetch('/api/v1/chat/common/e5fa6765412e463c8b419523a34e1257/' + moduleMapper[selectModule.value], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(sendMsg)
        }).then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            const recMsg = {
                role: 'assistant',
                content: ref('')
            };
            glob.selectChat.messages.push(recMsg);
            return reader.read().then(function processText({ done, value }) {
                if (done) {
                    glob.restore();
                    return;
                }
                recMsg.content.value += decoder.decode(value);
                toBottom();
                return reader.read().then(processText);
            });
        }).catch(error => {
            // const recMsg = {
            //     role: 'assistant',
            //     content: ref('')
            // };
            // glob.selectChat.messages.push(recMsg);
            // recMsg.content.value += '\n````\n' + error + '\n````\n';
            // glob.restore();
            console.log(error)
        });
    }

}

onMounted(() => {
    toBottom();
})

const selectModule = ref('GPT-3.5')
const moduleList = [
    'GPT-3.5',
    'GPT-4'
]
const moduleMapper = {
    'GPT-3.5': 'gpt-3.5-turbo',
    'GPT-4': 'gpt-4'
}
const onSelectedModule = (e) => {
    selectModule.value = e.target.value;
}
const inputValue = ref('');
</script>

<template>
  <div class="box">
      <select class="module-select" @change="onSelectedModule">
          <option v-for="module in moduleList">{{module}}</option>
      </select>
    <input type="text" v-model="inputValue" placeholder="发送消息" @keydown="onKeydown"/>
      <img src="../assets/send.svg" @click="send">
  </div>
</template>

<style scoped lang="less">
.box{
    width: calc(100% - 200px);
    height: 40px;
    background-color: white;
    border-right: 1px solid #ccc;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0 0 10px #ccc;
    overflow: hidden;
  .module-select{
    width: 70px;
    border: none;
    outline: none;
    margin-left: 10px;
  }
  input{
    border: none;
    outline: none;
    height: 100%;
    padding: 0 10px;
    width: calc(100% - 140px);
  }
  img{
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
}
</style>