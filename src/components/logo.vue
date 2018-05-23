<template>
    <div class="logoDiv">
      <div class="logoCont">
        <a><!--<img src="../../static/header/logo.png">--><cdn-img src="logo.png"></cdn-img></a>
        <div class="logoright">
          <ul>
            <li class="lo1"><a>研究生</a></li>
            <li class="lo2"><a>本科</a></li>
            <li class="lo3"><a>中学</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue';
  Vue.component('cdn-img', {
    props: ['src'],
    template: `<img :src="'http://p95qjfixr.bkt.clouddn.com/' + src" /> `
  })
  export default {

  }
</script>
<style lang="less">
  @import '../assets/css/components/logo.less';
</style>
