<template>
  <div class="home">
    <div class="container">
        <div id="head">
            <publichead></publichead>
            <!--第一屏 start-->
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
                                <router-link :to="'/articleShow/'+o.id">
                                    <div>{{o.title}}</div>
                                </router-link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <!--第一屏end -->

            <!-- 第二屏 start -->
            <!--第二屏 end -->
            <!--第三屏 start -->
            <!--第三屏 end -->
            <!--第四屏 start -->
            <publicfoot></publicfoot>
        </div>
    </div>
  </div>
</template>

<script>
import Publichead from './Publichead'
import Publicfoot from './Publicfoot'

export default {
  data () {
    return {
      cate: [],
      article: {}
    }
  },
  components: {
    Publichead,
    Publicfoot
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
