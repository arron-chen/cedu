<template>
  <div id="app">
    <c-header class="cheader"></c-header>
    <router-view/>
    <c-footer class="cfooter"></c-footer>
    <layer class="cbottom"></layer>
  </div>
</template>

<script>
  import cHeader from './components/header'
  import cFooter from './components/footer'
  import layer from './components/layer'
export default {
  name: 'App',
  components:{
    cHeader,cFooter,layer
  }
}
</script>

<style lang="less">
  @import './assets/css/main.less';
</style>
