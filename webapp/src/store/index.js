/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import alertmsg from './alertmsg'

Vue.use(Vuex)

let status = {
  state: {},
  mutations: {},
  actions: {}
}

status = objAdd(status, loading)
status = objAdd(status, alertmsg)

function objAdd (a, b) {
  Object.keys(a).forEach((o) => {
    for (let i in b[o]) {
      a[o][i] = b[o][i]
    }
  })
  return a
}

const store = new Vuex.Store(status)

export default store
