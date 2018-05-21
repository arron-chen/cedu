<template>
  <div class="header">
    <top></top>
    <div class="cbanner"></div>
    <logo></logo>
    <div class="headerNav">
      <ul class="headerlist commonWidth">
        <li><a>首页</a></li>
        <li><a>美国</a></li>
        <li><a>加拿大</a></li>
        <li><a>澳洲</a></li>
        <li><a>英国</a></li>
        <li><a>新西兰</a></li>
        <li><a>荷兰</a></li>
        <li><a>法国</a></li>
        <li><a>德国</a></li>
        <li><a>新加坡</a></li>
        <li><a>更多</a></li>

      </ul>
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
  .cbanner{
    width:100%;
    height:600px;
    background: url('../../static/web_bg.png')no-repeat;
    background-size: 100% 100%;
  }
  .header{
    width:100%;
  }
  .headerNav{
    height:48px;
    width:100%;
    background: #417af8;
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
    background: #ffffff;
    color: #fff !important;
  }
  .headerlist li a{
    color: #fff;
    display: inline-block;
    padding: 0 18px;
    float: left;
    font-size: 16px;
  }
  .headerlist li:hover a{
     color: #417af8;
   }

</style>
