<template>
  <div class="header">
    <top></top>
    <logo></logo>
    <div class="headerNav">
      <ul class="headerlist commonWidth">
        <li><a>首页</a></li>
        <li><a>中国</a></li>
        <li><a>中国研究生</a></li>
        <li><a>水木大学</a></li>
        <li><a>美国</a></li>
        <li><a>英国</a></li>
        <li><a>日本</a></li>
      </ul>
    </div>
    <div class="city">
      <div class="cityCont commonWidth">

      </div>
    </div>

  </div>
</template>
<script>
  import top from './top.vue'
  import logo from './logo.vue'
  export default {
    data(){
      return {

      }
    },
    components:{
      top,logo
    }
  }
</script>
<style scoped>
  .commonWidth{
    width:1000px;
    margin:0 auto;
  }
  .header{
    width:100%;
  }
  .headerNav{
    height:48px;
    width:100%;
    background: #1bbc9b;
  }
  .city{
    width:100%;
    height:70px;
    background: #f8f8f8;
    border-bottom: #eaeaea 1px solid;
  }
  .headerlist{
    list-style: none;
    height:48px;
  }
  .headerlist li {
    float:left;
    display: inline-block;
    line-height: 48px;
    cursor: pointer;
  }
  .headerlist li:hover{
    background: #047d64;
    color: #fff !important;
  }
  .headerlist li a{
    color: #fff;
    display: inline-block;
    padding: 0 18px;
    float: left;
    font-size: 16px;
  }
</style>
