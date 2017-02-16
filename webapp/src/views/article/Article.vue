<template>
  <div class="article">
    <div class="main clearfix">
        <div class="w690 fl">
            <div class="article-content border">
                <div class="title">
                    <h1 class="YaHei" v-html="article.title"></h1>
                    <p>作者：BTA 类型：转载 时间：{{article.created | timeFormat}}</p>
                </div>
                <div class="art_desc mt10"></div>
                <div class="lbd clearfix">
                    <span id="art_up" class="jbTestPos"></span>
                </div>
                <div id="content" v-html="article.content">
                </div>
                <!--endmain-->
            </div>
            <!--endborder-->
        </div>
        <!--end fl-->
        <!--<div class="w300 fr">
            <DIV class="tabTitleBar bgf borderTblue">
                <DIV class="borderTnone pb10 YaHei">
                    <H4 class="blue">热门文章</H4>
                    <UL class="newsList newList-in">
                        <li v-for="(i, k) in hotList">
                            <EM class="no1">{{k+1}}</EM>
                            <router-link :to="'/article/'+i.id">
                            {{i.title}}
                            </router-link>
                        </li>
                    </UL>
                </DIV>
            </DIV>
        </div>-->
        <hotList :category="category"></hotList>
    </div>
  </div>
</template>

<script>
import HotList from 'components/HotList'

export default {
  data () {
    return {
      article: {},
      category: 3
    }
  },
  components: {
    HotList
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      let self = this
      this.$http.get({api: 'ARTICLE_INFO', params: {id: this.$route.params.id}}).then((res) => {
        self.article = res.data[0]
        if (self.article.category_id) {
          self.category = self.article.category_id
        }
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>
