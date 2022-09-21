
<!-- eslint-disable no-undef -->
<template>
    <div >
        <vue-native-share :shareMenu="shareMenu" :config="config" />
    </div>
</template>
<script>
import vueNativeShare from 'vue-native-share'
export default {
  name: 'SeamlessScroll',
  components: {
    vueNativeShare
  },
  props: {
  },
  computed: {

  },
  data () {
    return {
      shareMenu: [0, 1, 3], // [0]微信好友[1]朋友圈[2]新浪微博[3]qq好友[4]qq空间[5]更多
      config: {
        title: '分享标题',
        desc: '描述',
        img: '图片地址',
        img_title: '图片标题',
        link: '当前链接'
      },
      classOption: {
        step: 0.5, // 数值越大速度滚动越快
        hoverStop: false, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        waitTime: 2000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  methods: {

  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scoped>
    .warp {
        height: 90px;
        width: 360px;
        margin: 0 auto;
        overflow: hidden;
    }
    .warp ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
    }
    .warp ul  li{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #ccc;
    }
    .warp ul  li .title{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
</style>
