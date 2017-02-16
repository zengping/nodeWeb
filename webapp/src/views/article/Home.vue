<template>
  <div class="home">
      <div class="con_2">
          <div class="blank5 clearfix"></div>
          <div class="listbox" v-for="i in cate">
              <h2>
                  <span class="block_cate">
                  <router-link :to="'/cate/'+i.id">
                      <div>{{i.name}}</div>
                  </router-link>
                  </span>
                  <span class="more fr">
                  <router-link :to="'/cate/'+i.id">
                      更多...
                  </router-link>
                  </span>
              </h2>
              <ul>
                  <li class="new" v-for="o in article[i.id]">
                      <span class="date">{{o.created | timeFormat}}</span>
                      <span class="title">
                          <router-link :to="'/article/'+o.id">
                              <div>{{o.title}}</div>
                          </router-link>
                      </span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cate: [],
      article: {}
    }
  },
  created () {
    this.getCate()
  },
  methods: {
    getCate () {
      let self = this
      this.$http.get({api: 'ROOT_CATEGORY', params: {}}).then((res) => {
        self.cate = res.data
        let tmp = {}
        res.data.forEach((o) => {
          tmp[o.id] = []
        })
        self.article = tmp
        res.data.forEach((o) => {
          self.getArticle(o.id)
        })
      }, (res) => {
        // error callback
      })
    },
    getArticle (id) {
      let self = this
      this.$http.get({api: 'ROOT_ARTICLE', params: {id: id, page: 1}}).then((res) => {
        self.article[id] = res.data
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>
