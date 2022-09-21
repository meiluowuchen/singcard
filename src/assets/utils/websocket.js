
let rwsocketClient = null
let serverIntervalObj = null
// eslint-disable-next-line camelcase
let vue_this = null

const heartCheck = (websocketClien) => {
  const reset = () => {
    console.log('heartCheck reset')
    serverIntervalObj && clearInterval(serverIntervalObj)
  }

  const start = () => {
    serverIntervalObj = setInterval(() => {
      // eslint-disable-next-line no-undef
      const bytesValue = keepAliveMsg()
      console.log('发送心跳检测消息')
      websocketClien.send(bytesValue)
    }, 15000)
  }

  return {
    start,
    reset
  }
}

const createSocket = (url, protocols, options = {}) => {
  const defaultOption = {
    debug: false,
    binaryType: 'arraybuffer',
    reconnectInterval: 3000 // 尝试重新连接之前要延迟的毫秒数。
    // maxReconnectAttempts: 3 // 尝试重连次数
  }
  Object.assign(defaultOption, options)
  const sclient = new ReconnectSocket(url, protocols, defaultOption)
  sclient.binaryType = 'arraybuffer'
  // 添加连接监听回调
  sclient.addEventListener('open', (event) => {
    console.log('WebSocket connect', event, new Date())
    // 连接成功后，开启心跳检测
    heartCheck(sclient).start()
  })

  sclient.addEventListener('message', function (event) {

  })
  sclient.addEventListener('error', function (event) {
    console.log('WebSocket error: ', event)
    // 心跳检测
    heartCheck(sclient).reset()
  })

  sclient.addEventListener('close', (event) => {
    console.log('WebSocket close', event, new Date())
    // 心跳检测
    heartCheck(sclient).reset()
  })
  return sclient
}
export function closeInstance () {
  if (rwsocketClient) {
    rwsocketClient.close()
    rwsocketClient = null
  }
}

export const socketInstance = (...rest) => {
  const rest1 = []
  rest1.push(rest[0])
  // eslint-disable-next-line camelcase
  vue_this = rest[1]
  vue_this.showLoading = false
  // // 进入首页后打点
  // vue_this.reportAnalyticsFun('HOMEPAGE_SHOW', {source:source});
  if (rwsocketClient) {
    return rwsocketClient
  } else {
    rwsocketClient = createSocket.apply(null, rest1)
    return rwsocketClient
  }
}

export const socketInstanceByBottomTab = (...rest) => {
  const rest1 = []
  rest1.push(rest[0])
  if (rwsocketClient) {
    return rwsocketClient
  } else {
    rwsocketClient = createSocket.apply(null, rest1)
    return rwsocketClient
  }
}

export default rwsocketClient
