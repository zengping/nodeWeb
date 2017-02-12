import api from '../api'
export default {
  getUrl (o) {
    let uri
    if (o.params.id === undefined) {
      uri = api.api(o.api)
    } else {
      uri = api.api(o.api) + api.apiJoin + '/' + o.params.id
    }
    if (o.type === 'get' && Object.keys(o.params).length > 0) {
      uri = uri + '?' + this.p(o.params)
    }
    return uri
  },
  p (o) {
    let x = ''
    for (let i in o) {
      x += i + '=' + o[i] + '&'
    }
    x = encodeURI(x)
    return x
  },
  get (o) {
    o.type = 'get'
    return this.xhr(o)
  },
  post (o) {
    o.type = 'post'
    return this.xhr(o)
  },
  put (o) {
    o.type = 'put'
    return this.xhr(o)
  },
  delete (o) {
    o.type = 'delete'
    return this.xhr(o)
  },
  xhr (o) {
    let self = this
    return new Promise((resolve, reject) => {
      if (o.loading) o.vm.$store.commit('showLoading')
      o.xhr[api.type[o.type]](self.getUrl(o), o.params).then((res) => {
        o.vm.$store.commit('hideLoading')
        if (res.data.status.code === 600) {
          o.vm.$router.push({ path: '/login' })
          resolve(res.data)
          return
        }
        if (res.data.status.code === 800) {
          o.vm.$store.commit('alertEvent', {
            msg: res.data.status.message,
            callback: () => {
              o.vm.$router.push({ path: '/login' })
            }
          })
          resolve(res.data)
          return
        }
        if (res.data.status.code === 888) {
          o.vm.$store.commit('alertEvent', {
            msg: res.data.status.message,
            callback: () => {
              o.vm.$router.push({ path: '/login' })
            }
          })
          resolve(res.data)
          return
        }
        if (res.data.status.code === 200) {
          resolve(res.data)
        } else {
          // reject(res.data.status.message)
          o.vm.$store.commit('alertEvent', res.data.status.message)
          resolve(res.data)
        }
      }, (res) => {
        // console.error('Failed!', res)
        o.vm.$store.commit('alertEvent', res)
        resolve(res.data)
      })
    })
  }
}
