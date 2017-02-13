export default {
  state: {
      // loading状态
    loading: false
  },
  mutations: {
    // loading
    showLoading (state) {
      state.loading = true
    },
    hideLoading (state) {
      state.loading = false
    }
  },
  actions: {
  }
}
