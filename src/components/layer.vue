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
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform:translateX(-240);
  }
  .commonWidth{
    width:1000px;
    margin:0 auto;
  }
  .layerCont{
    width: 1000px;
    height: 100%;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
  }
  .close_icon{
    position: absolute;
    background: url('../../static/footer_layer_clone.png') no-repeat center center;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
    right: 0;
    top: 70px;
    cursor: pointer;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 240px;
    min-width: 1000px;
    margin: 0 auto;
    background: url('../../static/footer.png') no-repeat center bottom;
    background-size: auto 100%;
  }

</style>
