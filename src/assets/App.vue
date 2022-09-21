<template>
  <div id="app">
    <router-view :key="cid"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
    }
  },
  data () {
    return {
      cid: 1
    }
  },
  watch: {
    $route () {
      this.cid = Math.floor(Math.random() * 100)
    }
  },
  created () {
    console.warn(this.$route)
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC-Light, Microsoft YaHei;
}
</style>
