<!-- eslint-disable no-undef -->
<template>
    <div class="runbox">
        <div class="runing">
            <img :src="require(`../assets/loading/000${somevar}.png`)" />
        </div>
    </div>
</template>
<script>
export default {
  name: 'runing',
  components: {

  },
  computed: {

  },
  data () {
    return {
      somevar: 1
    }
  },
  methods: {
    paly () {
      this.somevar++
      if (this.somevar > 24) {
        this.somevar = 1
        return false
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.paly()
    }, 35)
  },
  created () {
  }
}
</script>

<style scoped>
    .runboxtitle{
        text-align: center;
        color: #eee;
        font-size: 14px;
        padding-top: 15px;
    }
    .runboxdes{
        text-align: center;
        color: #ccc;
        font-size: 14px;
        padding-top: 10px;
    }
    .runing{
        width: 60%;
        margin-left: 28%;
    }
    .runing img{
        width: 100%;
    }
</style>
