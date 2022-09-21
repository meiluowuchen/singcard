// // URL取参数
export const GetQueryString = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' +
  // eslint-disable-next-line no-sparse-arrays
  name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}

// 设置本地数据
export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log('setLocalStorage error', e)
    return null
  }
}

// 获取本地数据
export const getLocalStorage = (key) => {
  let res = null
  try {
    res = localStorage.getItem(key)
    if (res) {
      res = JSON.parse(res)
    }
    return res
  } catch (e) {
    return res
  }
}

// 判断访问终端
export const browser = {
  versions: (function () {
    const u = navigator.userAgent
    const myApp = u.match(/\bmyApp\/(\S*)/)
    // const myApp = u.match(/\bMozilla\/(\S*)/);
    // const app = navigator.appVersion;
    return {
      safari: u.indexOf('Safari') > -1 && !(u.indexOf('Chrome') > -1), // safari 拥有Safari字段，并且没有Chrome字段
      chrome: u.indexOf('Chrome') > -1, // chrome
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
      qq: u.match(/\sQQ/i) === ' qq', // 是否QQ
      myApp: myApp && myApp.length > 1, // v1.5.0-她他会应用内部
      myAppVersion: myApp && myApp.length > 1 && myApp[1] // v1.5.0-她他会应用版本号
    }
  })(),
  language: navigator.browserLanguage || navigator.language
}

// 创建随机字符串
export const createRandomStr = (num = 6) => {
  let randomStr = ''
  const str = 'abcdefghijklmnopqrstuvwxyz1234567890'
  const strlist = str.split('')
  for (let i = 0; i < num; i++) {
    randomStr += strlist[Math.floor(Math.random() * strlist.length)]
  }
  return randomStr
}

// 创建随机字符串
export const isIos = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

// // 校验邮箱
export const valideEmail = (email) => {
  var reEmail = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
  return (reEmail.test(email))
}

export const validebank = (bankno) => {
  var lastNum = bankno.substr(bankno.length - 1, 1) // 取出最后一位（与luhn进行比较）
  var first15Num = bankno.substr(0, bankno.length - 1) // 前15或18位
  var newArr = new Array()
  for (var i = first15Num.length - 1; i > -1; i--) { // 前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1))
  }
  var arrJiShu = new Array() // 奇数位*2的积 <9
  var arrJiShu2 = new Array() // 奇数位*2的积 >9
  var arrOuShu = new Array() // 偶数位数组
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) { // 奇数位
      if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2)
      else arrJiShu2.push(parseInt(newArr[j]) * 2)
    } else // 偶数位
    { arrOuShu.push(newArr[j]) }
  }
  // eslint-disable-next-line camelcase, no-array-constructor
  var jishu_child1 = new Array() // 奇数位*2 >9 的分割之后的数组个位数
  // eslint-disable-next-line no-array-constructor, camelcase
  var jishu_child2 = new Array() // 奇数位*2 >9 的分割之后的数组十位数
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10)
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10)
  }
  var sumJiShu = 0 // 奇数位*2 < 9 的数组之和
  var sumOuShu = 0 // 偶数位数组之和
  var sumJiShuChild1 = 0 // 奇数位*2 >9 的分割之后的数组个位数之和
  var sumJiShuChild2 = 0 // 奇数位*2 >9 的分割之后的数组十位数之和
  var sumTotal = 0
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m])
  }
  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n])
  }
  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p])
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p])
  }
  // 计算总和
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2)
  // 计算luhn值
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10
  var luhn = 10 - k
  if (lastNum == luhn) {
    // $("#banknoInfo").html("luhn验证通过");
    return true
  } else {
    // $("#banknoInfo").html("银行卡号必须符合luhn校验");
    return false
  }
}
