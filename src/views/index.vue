<template>
    <div>
      <cont></cont>
      <cont style="height:300px"></cont>
      <cont></cont>
      <cont></cont>
      <cont></cont>
      <div id="reg"></div>
      <transition name="fade">
        <div id="consultTip" :style="style"> </div>
      </transition>
      <div id="consult"></div>
    </div>
</template>
<script>
  import cont from '@/components/cont.vue'
  export default {
    data(){
      return {
        style:{
          opacity:'',
          zIndex:''
        }
      }
    },
    components:{
      cont
    },
    mounted(){
      var _this=this;
      setTimeout(function () {
          _this.style.opacity=1;
          _this.style.zIndex=1;
        },4000
      )
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #reg{
    width: 164px;
    height: 280px;
    position: fixed;
    top: 150px;
    left: 6px;
    padding: 0px;
    background-image: url('../../static/reg_bg_0806.jpg');
    z-index: 2147483647;
  }
  #consultTip{
    width: 521px;
    height: 321px;
    position: fixed;
    top: 50%;
    left: 50%;
    opacity:0;
    z-index:-1;
    transform: translate(-50%, -50%);
    display: block;
    background: url("../../static/2017102400.png");
  }
  #consult{
    position: fixed;
    top: 120px;
    right: 5px;
    width: 185px;
    height: 420px;
    background-image: url('../../static/vb2.png');
  }
</style>
