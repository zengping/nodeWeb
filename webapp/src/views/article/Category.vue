<template>
  <div class="category">
      <div class="con_2">
          <div class="blank5 clearfix"></div>
          <div class="listbox" v-for="i in cate">
              <h2>
                  <span class="block_cate">
                  <router-link :to="'/articleList/'+i.id">
                      <div>{{i.name}}</div>
                  </router-link>
                  </span>
                  <span class="more fr">
                  <router-link :to="'/articleList/'+i.id">
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
      this.$http.get({api: 'SECOND_CATEGORY', params: {id: this.$route.params.cateId}}).then((res) => {
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
      this.$http.get({api: 'CATE_ARTICLE_LIST', params: {id: id, page: 1}}).then((res) => {
        self.article[id] = res.data
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>
