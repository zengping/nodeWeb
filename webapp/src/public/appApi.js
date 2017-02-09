let APP_DEV_ENV = 1  // 1开发环境 0生产环境
let DEV_TEST = 0     // 1本地联调 0本地开发
let appJoin = APP_DEV_ENV && !DEV_TEST ? '?' : ''
let appType = {
  'post': 'post',
  'delete': 'delete',
  'get': 'get',
  'update': 'update'
}

if (APP_DEV_ENV && !DEV_TEST) {
  appType.post = 'get'
  appType.delete = 'get'
  appType.update = 'get'
}

function appApi (code) {
  let appApi = {
    'LOGIN': APP_DEV_ENV ? (DEV_TEST ? 'api/sys/login' : './static/jsons/onoff.json') : 'sys/login'
  }
  return appApi[code]
}

function getUrl (o) {
  let uri
  if (o.params.id === undefined) {
    uri = appApi(o.api)
  } else {
    uri = appApi(o.api) + appJoin + '/' + o.params.id
  }
  if (o.type === 'get' && Object.keys(o.params).length > 0) {
    uri = uri + '?' + p(o.params)
  }
  return uri
}

function p (o) {
  let x = ''
  for (let i in o) {
    x += i + '=' + o[i] + '&'
  }
  x = encodeURI(x)
  return x
}

function http (o) {
  return new Promise((resolve, reject) => {
    if (o.loading) o.vm.$store.commit('showLoading')
    o.xhr[appType[o.type]](getUrl(o), o.params).then((res) => {
      o.vm.$store.commit('hideLoading')
      if (res.data.status.code === 600) {
        o.vm.$router.push({path: '/login'})
        resolve(res.data)
        return
      }
      if (res.data.status.code === 800) {
        o.vm.$store.commit('alertEvent', {msg: res.data.status.message,
          callback: () => {
            o.vm.$router.push({path: '/login'})
          }
        })
        resolve(res.data)
        return
      }
      if (res.data.status.code === 888) {
        o.vm.$store.commit('alertEvent', {msg: res.data.status.message,
          callback: () => {
            o.vm.$router.push({path: '/login'})
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

export { appApi, appType, getUrl, http }
