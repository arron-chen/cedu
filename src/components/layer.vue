<template>
  <transition name="fade"
              v-on:beforeLeave="beforeLeave"
  >
    <div class="bottom" v-show="showLayer">
      <div class="layerCont commonWidth">
        <div class="close_icon " @click="handlerCloseLayer"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return {
        showLayer:true,
      }
    },
    methods:{
      beforeLeave(el){
        el.style.bottom='-240px'
      },
      handlerCloseLayer(){
        this.showLayer=false;
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/components/layer.less";
</style>
