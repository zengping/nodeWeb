// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import Alertmsg from './components/Alertmsg'
import Loading from './components/Loading'
import './assets/css/style.css'
import './assets/bootstrap/css/bootstrap.css'

/* eslint-disable no-new */

new Vue({
  router,
  store: store,
  components: {
    Alertmsg,
    Loading
  }
}).$mount('#app')
