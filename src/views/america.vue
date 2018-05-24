<template>
  <div class="root">
    <c-header class="cheader"></c-header>
    <router-view/>
    <c-footer class="cfooter"></c-footer>
  </div>
</template>
<script>
  import cHeader from '@/components/headerS';
  import cFooter from '@/components/footer';
  import layer from '@/components/layer';
  import cont from '@/components/cont.vue';
  import Vue from 'vue';
  Vue.component('cdn-img', {
    props: ['src'],
    template: `<img :src="'http://p95qjfixr.bkt.clouddn.com/' + src" /> `
  })
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
        isShowIndex:1,
      }
    },
    components:{
      cHeader,cFooter,layer,cont
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
      },
      switchClick(e){
        console.log(e);

        this.isShowIndex=e;
      }
    }
  }
</script>
