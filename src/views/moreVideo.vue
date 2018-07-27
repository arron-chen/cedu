<template>
  <div class="morelistwrap">
    <h3>视频列表</h3>
    <ul class="morelist">
      <li v-for="item in list" @click="handleClickVideo(item.url)">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "moreVideo",
      data(){
          return {
            list:[
              {
                "title":"现在才知道文书是个坑，万老师带你入坑看真相",
                "url":"http://ugcdl.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/g0639ywlzxm.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=C88C365CA4AEF4032FD047B72DC01B9E4514039AAD45FF5955F1D4CD87A145F727C8493E898B1B55DC2860612F793C20401630C8ABFEF97CFE4DCE541267A47D47544D9AD28CD949269542118E17E3349B9774C5719AC49CC90249281B8A6C6602F02F2BBCA0512ECFE5A7BFB1CF5E64945646AE7DF62DC9#t=4"
              },
              {
                "title":"是时候了！来为名校申请定个GPA目标吧！",
                "url":"http://ugcydzd.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/y0639ludpix.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=FD9970045FEA0F398D94C269623C03364274D7875115582F8210402D45F76F84FBBD19DA47DE0C26EF604AB554EA1868E715F7B5266321FE762C5C681048DF13DA8FE204291A688350E94EC4D36217FA050FECB8E3C604F5E9241F411B9A610CD61785B268431684FDA695DA7448D863C5546ED020F762AC"
              },
              {
                "title":"留学的遣返风险！这些事情千万要小心！",
                "url":"http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/c0643i920nq.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=5EC22B52F701F493BAA7EA4AEFED3B8E1A34334AA066852D979A97C649A0BEA999EDFD31F8A13BCC67AEE5E7A072B68E25FF0DB5E5FB761938C7ACCA11EAFF9FEC59523706EAB437A6E1828EEA83BFE5D8D84CE9857E6574CCDE83FFC6DAA2ED090BE6F2614D51E179DC9BF8782C8947073E5D89DCE057B8"
              },
              {
                "title":"悉尼大学毕业典礼！今日启程，你准备好了吗？",
                "url":"http://ugcydzd.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/k06493mwd62.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=B6ACC0E4CB650946C6082C229E3E4CDF7257015AB5627DE723C9F930145031706BA7CA93C72AECEAC959A592A359FF301E8B12702B63486AECD4DE32C5932421C77C898C04F768017A9A5DEA57BC1003949E6E555E760F1E215FD452ECDB495F4A6662593347261078A1D1E2582355E96834D75991655EC9"
              },
              {
                "title":"特别节目 | 美国灵异高校堪比昆池岩！",
                "url":"http://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/n0656eyjna9.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=165AFC0AD8D19B681FBDB04054A299594A9F908802D6784D1A0D6F502B7E1289EF32998042E39896D19AAD48256C762A0F58136A93866557C67F4D0D3B4B89A1FC9908BDC87F20D5C21690C3FDE0B6E2A1303E28EAAF81FE3E814F16E30DC7ADC634A6329C728DA6EFA54C68EFEE95FB551D4E8B6EE76548"
              },
              {
                "title":"美国蓝带中学查米纳德中学了解一下？",
                "url":"http://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/s0665xrpc0d.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=8E333B671D2F5F6CE7150AE1A5E4BF0B534F6CFA38B7ADF19FA5E4B83235814C2950654775E32F5FC2F4DB42617703E187CA2B9CE15A424E5FA7FA41707429A62676D9CAE05CF7858702C79D6862193B6FC673FCCEC4AC14D0D7094BD0EEB12AA22A1B9E1DBF74E67894775ED8FF3316341E5CFDA40F8FCE"
              },
              {
                "title":"一切都来得及！高考后留学方案",
                "url":"http://183.60.23.26/vhot2.qqvideo.tc.qq.com/ATb9-mwDRewHmaZfxaZVF5SIDI0q8Q1xHlSUslXXyjJs/m0672dx8y8l.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=0BEF0E50D73884DE6460FC74FE51802922D970CC41DEDC05EE7EA607A0CFD9E4E16638F64149F6530985D698AC46E2E6D5AAE154D5E303863FA8B95EECBBA61A9F9228F270AE65499ACB16CF71789A9E52ED363375AE2AE3490A85EF9F7BA0EEC2237999FFA50A0DBA1B018B7FAA9896A537ECE17A58C1CA"
              },
              {
                "title":"一切都来得及！高考后留学方案2",
                "url":"http://183.60.23.25/vhot2.qqvideo.tc.qq.com/AGLPvrTXYJQdflIlngyDvEVNNEkLQ3YNsbwlzUlkqoXI/j0680oq2drb.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=9C3B0307E4594EF1262C69B73A48753B67571A11F3B4D85D83A44A489BEA6DDDD84224ED93F452F75080DAEB136DF596B819FDCCC6697FBB2931E578D2F3A8357AAA0F26BFDB0E005D8AB43EE0A1F4C9B25291EE53E9C42D78B4494F3A0D14AD8CB2AE48C5A8B5BDF668F325E76E9540EA4A9AA2385BC263"
              },
              {
                "title":"申请留学签证学问多！各国签证要点！",
                "url":"http://ugcws.video.gtimg.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/j0704fambay.mp4?sdtfrom=v1010&guid=a66d46b086589b55e2d7c27ed01499ce&vkey=8857CA053820C57279DA8120A84BCA8BFAE6AB2252F5BBD5E6D98F71521B2D5A786C48E4695BEBF84A3CADC09F51D0015BD968FD57A9038D68C7FC6389AD8E42547C822A31BA1968C50D4F97E4D3AA77F575406DBCE95FA217BA2A612936C607B0BE463BF3F041BD5FE8F4A3BA257609B398EF6E0D754169"
              },
            ]
          }
      },
      methods:{
        handleClickVideo(url){
          this.$router.push({
            path:'/videoshow',
            query:{"url":url}
          })
        }
      }

    }
</script>

<style  lang="less" scoped>
.morelistwrap{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3{
    margin-top:50px;
  }
  .morelist{
    list-style-type: decimal;
    width:980px;
    height:100%;
    background-color: #f2f2f2;
    margin-top:50px;
    li{
      cursor: pointer;
      border-bottom:1px solid #fff;
      padding:10px 0 10px 200px ;
    }

  }
}

</style>
