<template>
  <div class="pdfwrap">
    <iframe style="width:100%;height:100%" :src="url"></iframe>
  </div>
</template>

<script>
    export default {
        name: "pdf",
      data(){
          return {
            url:''
          }
      },
      mounted(){
          this.url = this.$route.query.url;
      }
    }
</script>

<style lang="less" scoped>
 .pdfwrap{
   position: absolute;
   top:0;left:0;right:0;bottom:0;
 }
</style>
