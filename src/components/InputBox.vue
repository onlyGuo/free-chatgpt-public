<script setup>

</script>

<template>
  <div class="box">
    <input type="text" placeholder="发送消息" />
      <img src="../assets/send.svg">
  </div>
</template>

<style scoped lang="less">
.box{
    width: calc(100% - 50px);
    height: 40px;
    background-color: white;
    border-right: 1px solid #ccc;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0 0 10px #ccc;
    overflow: hidden;

  input{
    border: none;
    outline: none;
    height: 100%;
    padding: 0 10px;
    width: calc(100% - 60px);
  }
  img{
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
}
</style>