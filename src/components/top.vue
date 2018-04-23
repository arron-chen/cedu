<template>
  <div class="top">
    <div class="topCont commonWidth">
    <div class="topleft">
      <span>新东方前途出国留学，您理想的留学伙伴！</span>
      <a>登录</a>|<a>注册</a>
    </div>
    <div class="topright">
      <a>微信</a>|<a>关于我们</a>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style scoped>
  .commonWidth{
    width:1000px;
    margin:0 auto;
  }
  .top{
    line-height: 34px;
    background: #f8f8f8;
    border-bottom: #dddddd 1px solid;
    overflow: visible;
    height: 34px;
    z-index: 10;
    position: relative;
  }
  .topleft{
    float:left;
    font-size: 12px;
    color: #666666;

  }
  .topright{
    float:right;
    font-size: 12px;
    color: #666666;
  }
</style>
