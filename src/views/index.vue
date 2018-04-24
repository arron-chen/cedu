<template>
    <div>
      <cont></cont>
      <cont style="height:300px"></cont>
      <cont></cont>
      <cont></cont>
      <cont></cont>
      <div id="reg" v-show="showReg">
        <a class="reg-close" @click="handleClickregClose"></a>
        <form></form>
      </div>

      <div id="consultTip" :style="style" v-show="showConsultTip">
          <div class="consultTipCont">
            <a class="consult-online" @click="handleClickOnline"></a>
            <a class="consult-abandon" @click="handleClickAbandon"></a>
          </div>
      </div>

      <div id="consult" v-show="showConsult">
        <a class="consult-close" @click="handleClickClose"></a>
      </div>
    </div>
</template>
<script>
  import cont from '@/components/cont.vue'
  export default {
    data(){
      return {
        style:{
          opacity:'',
          zIndex:'',
        },
        showReg:true,
        showConsultTip:true,
        showConsult:true,
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
        },2000
      )
    },
    methods:{
      handleClickregClose(){
        this.showReg=false;


      },
      handleClickOnline(){

      },
      handleClickAbandon(){
        this.showConsultTip=false;
      },
      handleClickClose(){
        this.showConsult=false;
      }
    }
  }
</script>
<style scoped>
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
  .reg-close{
    background: url('../../static/close11.png') center center no-repeat;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 6px;
    top: 0px;
    cursor:pointer;
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

  }
  .consultTipCont{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../static/2017102400.png");
  }
  .consult-online{
    position: absolute;
    margin-left: 5px;
    display: block;
    left: 85px;
    bottom: 30px;
    width: 141px;
    height: 52px;
    background: url('../../static/201710241.png') no-repeat;
    cursor: pointer;
  }
  .consult-abandon{
    position: absolute;
    display: block;
    left: 300px;
    bottom: 30px;
    width: 140px;
    height: 51px;
    background: url('../../static/201710242.png') no-repeat;
    top: auto;
    right: auto;
    cursor: pointer;
  }

  #consult{
    position: fixed;
    top: 120px;
    right: 5px;
    width: 185px;
    height: 420px;
    background-image: url('../../static/vb2.png');
  }
  .consult-close{
    background: url('../../static/close11.png') center center no-repeat;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 6px;
    top: 0px;
    cursor:pointer;
  }
</style>
