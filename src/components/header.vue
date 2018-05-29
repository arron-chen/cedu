<template>
  <div>
    <top></top>
    <div class="cbanner">
      <div class="cbannerCont"></div>
    </div>
    <logo></logo>
    <div class="headerNav">
      <ul class="headerlist">
        <router-link to="/" tag="li"><a>首页</a></router-link>
        <router-link to="/america" tag="li"><a>美国</a></router-link>
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
<style lang="less">
  @import '../assets/css/components/header.less';
</style>
