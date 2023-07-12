<script setup>
import {ref} from "vue";

const show = ref(true);
</script>

<template>
  <div class="message-box" v-if="show">
      <div class="message">
          <div class="message-title">
              <div class="title">我是标题</div>
              <div class="close">
                <img src="../assets/close.svg" class="icon" @click="show = false">
              </div>
          </div>
          <div class="message-content">
              <ul>
                  <li>本站点访问人数过多，集中在下午1:30~ 8:00, 请尽量错开高峰期使用。</li>
                  <li>提供免费的GPT-3.5和GPT4模型，无需注册。</li>
                  <li>请合理使用，尽量不要问无意义的问题，以节省资源。</li>
                  <li>由于本站的开放性，导致API被多次盗刷，因此增加了请求上限（120/h）。</li>
                  <li>由于访问人数过多可能导致响应较慢，所有告诉你可以付费提速的都是骗子。</li>
                  <li>有关本站的任何问题，可以加入官方QQ群：<span style="color: dodgerblue">384426307</span>。</li>
                  <li>作者额外提供稳定高速的捐赠版，可以移步至：<a style="color: dodgerblue" href="https://chat.icoding.ink/">https://chat.icoding.ink</a></li>
                  <li>捐赠版没有并发限制，使用捐赠版时，你必须注册私人账户。</li>
                  <li>关于语音模型 - 必须注册私人账户，可凭借私人账户使用语音模型。</li>
                  <li>关于第三方插件 - 必须注册私人账户，可凭借私人账户进入插件市场。</li>
                  <li>本站提供APP（IOS请直接搜索"智友AI"）Android请<a style="color: dodgerblue" href="https://chat.icoding.ink/mobile.html">点此处</a>下载。</li>
                  <li>本站所用的公共接口：<a style="color: dodgerblue" href="https://chatdoc.icoding.ink/docs/#%E5%AF%B9%E5%A4%96%E6%9C%8D%E5%8A%A1">接口文档</a>。</li>
              </ul>
          </div>
          <div class="message-footer">
              <button @click="show = false">确定</button>
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