<template>
  <div id="app">
    <c-header></c-header>
    <router-view/>
    <c-footer></c-footer>
  </div>
</template>

<script>
  import cHeader from './components/header'
  import cFooter from './components/footer'
export default {
  name: 'App',
  components:{
    cHeader,cFooter
  }
}
</script>

<style lang="less">
  @import './assets/css/main.less';
</style>
