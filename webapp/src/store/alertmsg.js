export default {
  state: {
    alertMsg: {
      status: false,
      msg: null,
      btn: 0,
      callback: {}
    }
  },
  mutations: {
    alertEvent (state, obj) {
      let msg
      let callback
      let btn
      if (typeof obj === 'object') {
        msg = obj.msg
        callback = obj.callback
        btn = obj.btn
      } else {
        msg = obj
      }
      state.alertMsg = {
        status: true,
        msg: msg,
        btn: btn,
        callback: callback
      }
    }
  },
  actions: {
  }
}
