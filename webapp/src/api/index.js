let APP_DEV_ENV = 1  // 1开发环境 0生产环境
let DEV_TEST = 1     // 1本地联调 0本地开发
let apiJoin = APP_DEV_ENV && !DEV_TEST ? '?' : ''
let type = {
  'post': 'post',
  'delete': 'delete',
  'get': 'get',
  'update': 'update'
}

if (APP_DEV_ENV && !DEV_TEST) {
  type.post = 'get'
  type.delete = 'get'
  type.update = 'get'
}

function api (code) {
  let appApi = {
    'LOGIN': APP_DEV_ENV ? (DEV_TEST ? '/api/sys/login' : './static/jsons/onoff.json') : 'sys/login',
    'ROOT_CATEGORY': APP_DEV_ENV ? (DEV_TEST ? '/api/category/root' : './static/jsons/onoff.json') : 'category/list',
    'ROOT_ARTICLE': APP_DEV_ENV ? (DEV_TEST ? '/api/article/root' : './static/jsons/onoff.json') : 'category/list',
    'SECOND_CATEGORY': APP_DEV_ENV ? (DEV_TEST ? '/api/category/list' : './static/jsons/onoff.json') : 'category/list'
  }
  return appApi[code]
}

export default {
  api,
  apiJoin,
  type
}
