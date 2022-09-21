<!-- eslint-disable no-undef -->
<template>
    <div >
        <vue-seamless-scroll
            class="warp"
            :class-option="classOption"
            :data="scrolllist"
        >
        <ul>
            <li v-for="(item, index) in scrolllist" :key="index">
                <div class="title" v-text="item.title"></div>
                <div class="date" v-text="item.date"></div>
            </li>
        </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'SeamlessScroll',
  components: {
    vueSeamlessScroll
  },
  props: {
    scrolllist: []
  },
  computed: {

  },
  data () {
    return {

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
