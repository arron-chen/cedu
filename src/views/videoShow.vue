<template>
    <video style="width:100%;height:100%"  controls autoplay :src="url"></video>
</template>

<script>
    export default {
      name: "videoShow",
      data(){
        return {
          url:''
        }
      },
      props:{
        videourl:{
          type:String
        }
      },
      mounted(){
        this.url = this.$route.query.url;
      }
    }
</script>

<style scoped>

</style>
