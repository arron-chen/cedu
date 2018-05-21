<template>
    <div class="logoDiv">
      <div class="logoCont commonWidth">
        <a><img src="../../static/header/logo.png"></a>
        <div class="logoright">
          <ul>
            <li class="lo1"><a>研究生</a></li>
            <li class="lo2"><a>本科</a></li>
            <li class="lo3"><a>中学</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .commonWidth{
    width:1000px;
    margin:0 auto;
  }
  .logoDiv{
    width:100%;
    height:90px;
    line-height: 90px;
  }
  .logoDiv a img{
    position: relative;
    top:15px;
    width:200px;
    height:40px;
     }

  .logoright{
    float:right;
  }
  .logoright ul{
    list-style: none;

  }
  .logoright ul li{
    float:left;
    padding-right:13px;
    padding-left: 22px;
  }
  .logoright ul li a:hover{
    color: #1bbc9b;
    text-decoration: none;
    cursor: pointer;
  }
  .logoright ul li.lo1{
      background: url('../../static/content/csj_lobg1.png') left center no-repeat;
    }
  .logoright ul li.lo2{
    background: url('../../static/content/csj_lobg2.png') left center no-repeat;
  }
  .logoright ul li.lo3{
    background: url('../../static/content/csj_lobg3.png') left center no-repeat;
  }
</style>
