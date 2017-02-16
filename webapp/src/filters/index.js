export default {
  init (Vue) {
    Vue.filter('timeFormat', this.timeFormat)
  },
  timeFormat (time) {
    let date = new Date(parseInt(time) * 1000)
    let format = date.toLocaleString().replace(/上午|下午/g, ' ')
    return format
  }
}
