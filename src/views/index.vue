<template>
  <div class="root">
    <c-header class="cheader"></c-header>

    <div class="wrap">
        <div class="content">
          <div class="container">
            <section class="tips">
                <div class="tips_left fl">
                  <div class="tips_left_title"><span class="fl">精彩视频</span><span class="tips_more fr" @click="handleClickMore">更多>></span></div>
                  <div class="tips_item" v-for="item in videoCont" @click="handleClickToVideo(item.url)">
                    <div class="tips_item_img fl">
                     <!-- <img src="http://p95qjfixr.bkt.clouddn.com/banner1.png">-->
                      <cdn-img :src="item.banner"></cdn-img>
                    </div>
                    <div class="tips_item_text fr">
                        <h3>{{item.title}}</h3>
                        <p>{{item.content}}</p>
                    </div>
                  </div>
                </div>
                <div class="tips_right fr">
                  <div class="tips_right_title">
                    <span class="tips_title_left">录取院校</span>
                    <span class="tips_title_right">学生</span>
                  </div>
                  <ul class="tips_right_list">
                    <li v-for="item in worklist"><span class="tips_list_left" @click="handleClickToSchool(item.url)">{{item.school}}</span><span>{{item.name}}</span></li>
                  </ul>
                </div>
            </section>
            <section class="product">
              <div class="product-title"><h2>留学产品</h2></div>
              <ul class="product-list">
                <!--<li><a>&lt;!&ndash;<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">&ndash;&gt;<cdn-img src="product1.png"></cdn-img></a></li>-->
                <!--<li><a>&lt;!&ndash;<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">&ndash;&gt;<cdn-img src="product1.png"></cdn-img></a></li>-->
                <!--<li><a>&lt;!&ndash;<img src=".http://p95qjfixr.bkt.clouddn.com/product1.png">&ndash;&gt;<cdn-img src="product1.png"></cdn-img></a></li>-->
                <!--<li><a>&lt;!&ndash;<img src="http://p95qjfixr.bkt.clouddn.com/product1.png">&ndash;&gt;<cdn-img src="product1.png"></cdn-img></a></li>-->
                <li v-for="item in product1" @click="handleClickToImg(item.children)">
                  <img :src="item.children[0]"/>
                 <div><span>{{item.title}}</span></div>
                </li>
              </ul>
            </section>
           <!-- <section class="advertisement"></section>-->
            <section class="info">
              <div class="info-title"><h2>留学答疑</h2></div>
              <div class="info-container">
                <!--<ul class="info-nav">-->
                  <!--<li @click="switchClick(1)" :class="{active:isShowIndex ===1 }"><a>美国</a></li>-->
                  <!--<li @click="switchClick(2)" :class="{active:isShowIndex ===2 }"><a>英国</a></li>-->
                  <!--<li @click="switchClick(3)" :class="{active:isShowIndex ===3 }"><a>加拿大</a></li>-->
                  <!--<li @click="switchClick(4)" :class="{active:isShowIndex ===4 }"><a>澳洲</a></li>-->
                  <!--<li @click="switchClick(5)" :class="{active:isShowIndex ===5 }"><a>亚洲</a></li>-->
                  <!--<li @click="switchClick(6)" :class="{active:isShowIndex ===6 }"><a>美国</a></li>-->
                <!--</ul>-->
                <div class="info-cont">
                  <div v-show="isShowIndex == 1">
                    <div class="info-cont-list fl" v-for="item in article1">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>
                  <div v-show="isShowIndex == 2">
                    <div class="info-cont-list fl" v-for="item in article2">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>
                  <div v-show="isShowIndex == 3">
                    <div class="info-cont-list fl" v-for="item in article3">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>
                  <div v-show="isShowIndex == 4">
                    <div class="info-cont-list fl" v-for="item in article4">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>
                  <div v-show="isShowIndex == 5">
                    <div class="info-cont-list fl" v-for="item in article5">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>
                  <div v-show="isShowIndex == 6">
                    <div class="info-cont-list fl" v-for="item in article6">
                      <h3>{{item.title}}</h3>
                      <ul>
                        <li v-for="list in item.children"><a :href="list.link">{{list.title}}</a></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="reg" v-show="showReg" @click="handleClickToReg">
          <a class="reg-close" style="z-index:2;" @click.stop="handleClickregClose"></a>
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

    <c-footer class="cfooter"></c-footer>
    <!--<layer class="cbottom"></layer>-->
  </div>
</template>
<script>
  import cHeader from '@/components/header';
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
        videoCont:[
          {
            "banner":"banner11.png",
            "title":"直击悉尼大学毕业典礼！今日启程，你准备好了吗？",
            "content":"悉尼大学成立于1850年，是澳洲历史最悠久的大学，共诞生出5个诺贝尔奖、7个总理、2个联邦总督，被誉为世界最美校园前十，是霍格沃茨魔法学院原型。\n",
            "url":"http://8.8.1.8/IXCd7915350992ea9e1b7439e7e4a9227e5/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/k06493mwd62.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=8FB4260C54CEE8E44286D576C347932DCED9730DF03F72BBCDDB383C0C43F6730FCFC7DAFD8BA7F3E88C54AD5FD73D37CFDDE0CCF9224D6BC41348563EE71AFDB9B9E5826B4118740BD43765781DFE581A609C4F65172A55A4196E466A8C98B57CE580C894BBC5ACBFB4C898C93D2BBC0C0B677D02F2C84D"},
          {
            "banner":"banner2.png",
            "title":"万老师教你4招对抗文书流水线",
            "content":"成绩考试顶呱呱，在校file不能花；模版套用秒变渣，逻辑论证人人夸；现状规划两手抓，文书方能面面佳",
            "url":"http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/g0639ywlzxm.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=41721458B682BAD81A564A80619D16D5153319503C280465CBF7EBBDDB0B6576B78DAA5ED4E931A9854DD497513E82328A66407F1656A5074BFA64406A1603CA8E5A3086346D28D816637992C379781CD4C6D44650E4E44B271AD57234AF111E9932F1C779EF2C7A198FF4700F4BC22FABF0CACF660C3385"},
        ],

        worklist:[
          {
            "school":"杜克大学",
            "name":"A同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/Duke+Resume+Template.pdf"
          },
          {
            "school":"耶鲁大学",
            "name":"K同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/Yale%20resume%20tips.pdf"
          },
          {
            "school":"康奈尔大学",
            "name":"F同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/Cornell%20resume%20template.pdf"
          },
          {
            "school":"哥伦比亚大学",
            "name":"I同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/Columbia%20resume%20sample%20sample+resume+in+MC.pdf"
          },
          {
            "school":"普林斯顿大学",
            "name":"U同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/Fischer_Jeremie_CV.pdf"
          },
          {
            "school":"剑桥大学",
            "name":"Q同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/hbs2001resumes.pdf"
          },
          {
            "school":"商行",
            "name":"X同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%95%86%E8%A1%8C1.pdf"
          },
          {
            "school":"券商",
            "name":"T同学",
            "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%88%B8%E5%95%861.pdf"
          },
        ],
        product1:[
          {
            "title":"美国",
            children:[
              "http://p9zd0n0di.bkt.clouddn.com//meiguo1.png",
              "http://p9zd0n0di.bkt.clouddn.com//meiguo2.png",
              "http://p9zd0n0di.bkt.clouddn.com//meiguo3.png",
              "http://p9zd0n0di.bkt.clouddn.com//meiguo4.png"
            ]
          },
          {
            "title":"英国",
            children:[
              "http://p9zd0n0di.bkt.clouddn.com//yingguo1.png",
              "http://p9zd0n0di.bkt.clouddn.com//yingguo2.png",
              "http://p9zd0n0di.bkt.clouddn.com//yingguo3.png",
              "http://p9zd0n0di.bkt.clouddn.com//yingguo4.png"
            ]
          },
          {
            "title":"澳大利亚",
            children:[
              "http://p9zd0n0di.bkt.clouddn.com//aodaliya1.png",
              "http://p9zd0n0di.bkt.clouddn.com//aodaliya2.png",
              "http://p9zd0n0di.bkt.clouddn.com//aodaliya3.png",
              "http://p9zd0n0di.bkt.clouddn.com//aodaliya4.png"
            ]
          },
          {
            "title":"香港",
            children:[
              "http://p9zd0n0di.bkt.clouddn.com//xianggang1.png",
              "http://p9zd0n0di.bkt.clouddn.com//xianggang2.png",
              "http://p9zd0n0di.bkt.clouddn.com//xianggang3.png",
              "http://p9zd0n0di.bkt.clouddn.com//xianggang4.png"
            ]
          },
          {
            "title":"欧洲",
            children:[
              "http://p9zd0n0di.bkt.clouddn.com//ouzhou1.png",
              "http://p9zd0n0di.bkt.clouddn.com//ouzhou2.png",
              "http://p9zd0n0di.bkt.clouddn.com//ouzhou3.png",
              "http://p9zd0n0di.bkt.clouddn.com//ouzhou4.png",
              "http://p9zd0n0di.bkt.clouddn.com//ouzhou5.png"
            ]
          },
        ],
        article1:[
          {
            title:"留学信息",
            children:[
              {title:'大数据图解Overseas Study',link:'https://mp.weixin.qq.com/s/0UUzik4X_3e_A-Zp15Q8oA'},
              {title:'万老师告诉你为什么要去留学',link:'https://mp.weixin.qq.com/s/paONAL9mvLj_geByhOpP3w'},
              {title:'直击悉尼大学毕业典礼',link:'https://mp.weixin.qq.com/s/pJDvXX17QWdoMhudAycijg'},
              {title:'各国签证要点汇总',link:'https://mp.weixin.qq.com/s/JfSQffKrbEpK2upu9jAbcA'},
              {title:'加拿大留学也会接触疫苗接种？',link:'https://mp.weixin.qq.com/s/_9l9E6VCUeMKyoP4p8fiGQ'},
            ]
          },
          {
            title:"留学指导",
            children:[
              {title:'留学的遣返风险',link:'https://mp.weixin.qq.com/s/8-weHc_HVrPZuQX_ShB7jw'},
              {title:'高考后留学方案（上）',link:'https://mp.weixin.qq.com/s/tngNjXkToJwLtlHc3N6P-w'},
              {title:'高考后留学方案（下）',link:'https://mp.weixin.qq.com/s/Zh-GEFbjCQjFLAI8Uz6Fag'},

            ]
          },
          {
            title:"老万解答",
            children:[
              {title:'万老师教你4招对抗文书流水线',link:'https://mp.weixin.qq.com/s/kSiunlxOMH7tgwFZTT43eA'},
              {title:'是时候了！为冲击名校定个GPA目标吧！',link:'https://mp.weixin.qq.com/s/l7rJwivMfFu-pBk__5n8ww'},
              {title:'美国恐怖故事：灵异高校堪比昆池岩',link:'https://mp.weixin.qq.com/s/eAJkFqKk-EuxjbEkxjl6JA'},
              {title:'美国重点中学查米纳德中学',link:'https://mp.weixin.qq.com/s/-a6H7Qj-cIjAeEOe2dIyUw'},
              {title:'加拿大留学百问百答',link:'https://mp.weixin.qq.com/s/1JC6QVzXGriUhs6I9HMxHQ'},
            ]
          },
        ],
        article2:[],
        article3:[],
        article4:[],
        article5:[],
        article6:[],

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
      handleClickToReg(){
        window.location.href="http://bepotato_w.mikecrm.com/Zle4ZTx";
      },
      handleClickOnline(){

      },
      handleClickToVideo(url){
        this.$router.push({
          path:'/videoshow',
          query:{"url":url}
        })

      },
      handleClickMore(){
        this.$router.push({
          path:'/morevideo',
        })
      },
      handleClickToSchool(url){
        this.$router.push({
          path:'/pdf',
          query:{"url":url}
        })

      },
      handleClickToImg(children){
        children.shift(0);
        this.$router.push({
          path:'/imgshow',
          query:children
        })

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
