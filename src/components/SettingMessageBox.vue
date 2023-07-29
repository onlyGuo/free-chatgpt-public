<script setup>
import {ref} from "vue";
import glob from "../libs/glob.js";
const form = ref({
    apiHost: '',
    apiKey: ''
})
form.value.apiHost = glob.settings.apiHost;
form.value.apiKey = glob.settings.apiKey;
const save = () => {
    glob.settings.apiHost = form.value.apiHost;
    glob.settings.apiKey = form.value.apiKey;
    glob.restore();
    glob.settings.open = false;
}
</script>

<template>
  <div class="message-box" v-if="glob.settings.open">
      <div class="message">
          <div class="message-title">
              <div class="title">系统设置</div>
              <div class="close">
                <img src="../assets/close.svg" class="icon" @click="glob.settings.open = false">
              </div>
          </div>
          <div class="message-content">
              <div class="form">
                  <div class="form-tem">
                      <label>服务地址</label>
                      <input type="text" v-model="form.apiHost" placeholder="请输入服务地址，例如：https://api.openai.com/" />
                  </div>
                  <div class="form-tem">
                      <label>令牌(ApiKey)</label>
                      <input type="text" v-model="form.apiKey" placeholder="请输入令牌"/>
                  </div>
              </div>
              <p style="font-size: 12px; text-align: center; color: #737373">
                  提供一个国内完全代理的<a href="https://dev.icoding.ink/" style="color: dodgerblue" target="_blank">开发者平台</a>，可以在此处创建ApiKey
              </p>
          </div>
          <div class="message-footer">
              <button @click="save">确定</button>
          </div>
      </div>
  </div>
</template>

<style scoped lang="less">
.message-box{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;

  .message{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 650px;
    min-width: 100px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    .message-title{
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: 16px;
        font-weight: bold;
      }
      .close{
        cursor: pointer;
        .icon{
          height: 15px;
          width: 15px;
          transition: all 0.3s;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
    .message-content{
      padding: 10px;
      height: calc(100% - 80px);
      overflow: auto;
        .form{
          .form-tem{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            label{
              width: 100px;
              text-align: right;
              margin-right: 10px;
            }
            input{
              flex: 1;
              height: 30px;
              line-height: 30px;
              padding: 0 10px;
              border-radius: 5px;
              border: 1px solid #ccc;
              background-color: #fff;
              transition: all 0.3s;
              &:focus{
                border-color: #333;
              }
            }
          }
        }
    }
    .message-footer{
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border-top: 1px solid #ccc;
      text-align: right;
      button{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
          background-color: #ccc;
        }
      }
    }
  }
}
</style>