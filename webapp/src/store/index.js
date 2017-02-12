/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      // loading状态
    loading: false,
    alertMsg: {
      status: false,
      msg: null,
      btn: 0,
      callback: {}
    }
  },
  mutations: {
    // loading
    showLoading (state) {
      state.loading = true
    },
    hideLoading (state) {
      state.loading = false
    },
    // 弹框
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
})

export default store
