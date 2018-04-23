<template>
    <div>
      <div class="wrap">
        <div class="container commonWidth">
          <section class="tips"></section>
          <section class="product">
            <div class="product-title"><h2>留学产品</h2></div>
            <ul class="product-list">
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
              <li><a><img src="../../static/W020160312395281431629.jpg"></a></li>
            </ul>
          </section>
          <section class="advertisement"></section>
          <section class="info">
            <div class="info-title"><h2>留学资讯</h2></div>
            <div class="info-container">
              <ul class="info-nav">
                <li onclick="switchClick(1)" ><a>美国</a></li>
                <li onclick="switchClick(2)" class="active"><a>英国</a></li>
                <li onclick="switchClick(3)"><a>加拿大</a></li>
                <li onclick="switchClick(4)"><a>澳洲</a></li>
                <li onclick="switchClick(5)"><a>亚洲</a></li>
                <li onclick="switchClick(6)"><a>美国</a></li>
              </ul>
              <div class="info-cont">
                <div style="display: block">
                  <div class="info-cont-list fl">
                    <h3>申请指导</h3>
                    <ul>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                    </ul>
                  </div>
                  <div class="info-cont-list fl">
                    <h3>选校指导</h3>
                    <ul>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                    </ul>
                  </div>
                  <div class="info-cont-list fl">
                    <h3>留学费用</h3>
                    <ul>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                      <li><a>2018美国留学申请条件有哪些?</a></li>
                    </ul>
                  </div>

                </div>
                <div style="display: none"></div>
                <div style="display: none"></div>
                <div style="display: none"></div>
                <div style="display: none"></div>
                <div style="display: none"></div>

              </div>
            </div>
          </section>
        </div>
      </div>

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
        style:{}
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
  .commonWidth{
     width:1000px;
     margin:0 auto;
   }
  .fl{
    float:left;
  }
  .wrap{
    width:100%;
  }
  .tips{
    width:100%;
    height:40px;
    padding:20px 0;
  }
  .product{
    width:100%;
    height:450px;
    margin:10px 0;
  }
  .product-title{
    background:url("../../static/gu_tb_lxcp.png") no-repeat center left ;
    padding-left:40px;
    border-top:2px solid #efefef;
  }
  .product-title h2{
    color: #1bbc9b;
    font-size: 28px;
    font-weight: 400;font-family: "微软雅黑";
  }
  .product-list{
    list-style:none;
    padding-top:10px;
  }
  .product-list li{
    width:230px;height:180px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .product-list li a img{
    border:1px solid transparent;
  }
  .product-list li a img:hover{
    border: 1px solid #f9a401;
    cursor: pointer;
  }
  .product-list li a{
    display: block;
    border: 1px solid #fff;
  }
  .advertisement{
    width:100%;
    height:90px;
    background: url("../../static/0f000DYeKibgy3ix3jyY20.jpg");
  }
  .info{
    width:100%;
    height:350px;
    margin:10px 0;
  }
  .info-title{
    background:url("../../static/gu_tb_lxcp.png") no-repeat center left ;
    padding-left:40px;
    border-top:2px solid #efefef;
  }
  .info-title h2{
    color: #1bbc9b;
    font-size: 28px;
    font-weight: 400;font-family: "微软雅黑";
  }
  .info-container{
    margin:10px 0;
  }
  .info-nav{
    list-style: none;
    width:150px;
    float:left;
  }
  .info-nav li{
    height: 49px;
    line-height: 49px;
    background: #1bbc9b;
    border-bottom: 1px solid #18a98b;
    overflow: hidden;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    font-family: "微软雅黑";
  }
  .info-cont{
    float:right;
    width:850px;
    height:300px;
    background-color: aliceblue;;
  }
  .active{
    width: 149px;
    background: #fff!important;
    border-left: 1px solid #18a98b!important;
    color: #1bbc9b !important;
  }
  .info-cont-list{
    width: 240px;
    height:300px;
    overflow: hidden;
    margin-left: 40px;
  }
  .info-cont-list h3{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    color: #333333;
    background: url('../../static/gu_line_t.jpg') no-repeat left 5px;
    padding-left: 15px;
    font-weight: 400;
    margin-top: 15px;
    padding-bottom: 5px;
    overflow: hidden;
    font-family: "微软雅黑";
  }
  .info-cont-list ul li{
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    font-size: 14px;
    font-family: "宋体";
    color: #333333;
    background: url('../../static/gu_dian_yellow.jpg') no-repeat left center;
    padding-left: 15px;
  }
  .info-cont-list ul li a{
    color: #333333;
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
