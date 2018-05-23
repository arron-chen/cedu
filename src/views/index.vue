<template>
    <div class="wrap">
      <div class="content">
        <div class="container">
          <section class="tips">
              <div class="tips_left fl">
                <div class="tips_left_title"><span class="fl">精彩视频</span><span class="fr">更多>></span></div>
                <div class="tips_item">
                  <div class="tips_item_img fl">
                   <!-- <img src="http://p95qjfixr.bkt.clouddn.com/banner1.png">-->
                    <cdn-img src="banner1.png"></cdn-img>
                  </div>
                  <div class="tips_item_text fr">
                      <h3>第七期 深夜特别节目|</h3>
                      <h3>美国恐怖故事：灵异高校堪比昆池岩</h3>
                      <p>
                        美国灵异高校：俄亥洲大学  美国灵异高校：俄亥洲大学
                        美国灵异高校：俄亥洲大学 美国灵异高校：俄亥洲大学
                      </p>
                  </div>
                </div>
                <div class="tips_item">
                  <div class="tips_item_img fl">
                    <cdn-img src="banner2.png"></cdn-img>
                  </div>
                  <div class="tips_item_text fr">
                    <h3>第六期 深夜特别节目|</h3>
                    <h3>美国恐怖故事：灵异高校堪比昆池岩</h3>
                    <p>
                      美国灵异高校：俄亥洲大学  美国灵异高校：俄亥洲大学
                      美国灵异高校：俄亥洲大学 美国灵异高校：俄亥洲大学
                    </p>
                  </div>
                </div>
              </div>
              <div class="tips_right fr">
                <div class="tips_right_title">
                  <span class="tips_title_left">录取院校</span>
                  <span class="tips_title_right">学生</span>
                </div>
                <ul class="tips_right_list">
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                  <li><span class="tips_list_left">波斯顿大学</span><span>y同学</span></li>
                </ul>
              </div>
          </section>
          <section class="product">
            <div class="product-title"><h2>留学产品</h2></div>
            <ul class="product-list">
              <li><a><!--<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">--><cdn-img src="product1.png"></cdn-img></a></li>
              <li><a><!--<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">--><cdn-img src="product1.png"></cdn-img></a></li>
              <li><a><!--<img src=".http://p95qjfixr.bkt.clouddn.com/product1.png">--><cdn-img src="product1.png"></cdn-img></a></li>
              <li><a><!--<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">--><cdn-img src="product1.png"></cdn-img></a></li>
            </ul>
          </section>
         <!-- <section class="advertisement"></section>-->
          <section class="info">
            <div class="info-title"><h2>留学答疑</h2></div>
            <div class="info-container">
              <ul class="info-nav">
                <li @click="switchClick(1)" ><a>美国</a></li>
                <li @click="switchClick(2)" class="active"><a>英国</a></li>
                <li @click="switchClick(3)"><a>加拿大</a></li>
                <li @click="switchClick(4)"><a>澳洲</a></li>
                <li @click="switchClick(5)"><a>亚洲</a></li>
                <li @click="switchClick(6)"><a>美国</a></li>
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
      },
      switchClick(e){
        console.log(e)
      }
    }
  }
</script>
