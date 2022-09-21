
const config = {
  dev: {
    socketUrl: 'wss://testsocket.im.servicecloudweb.com/v1/websocket'
  },
  prod: {
    socketUrl: 'wss://socket.im.servicecloudweb.com/v1/websocket'
  }
}

export default Object.assign({}, config[process.env.API_ROOT === 'production' ? 'prod' : 'dev'])
