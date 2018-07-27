<template>
  <div class="imgwrap">
    <img v-for="item in imglist" :src="item">
  </div>

</template>

<script>
    export default {
      data(){
        return {
          imglist:[]
        }
      },
      mounted(){
        this.imglist = this.$route.query;
      },
    }
</script>

<style lang="less" scoped>
  .imgwrap{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

</style>
