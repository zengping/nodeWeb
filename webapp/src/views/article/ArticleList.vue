<template>
  <div class="article_list">
      <div class="main clearfix">
        <div class="w690 fl">
            <div class="artlistBar border">
                <div class="artlist clearfix">
                    <DL>
                        <DT v-for="i in list">
                            <span>日期:{{i.created}}</span>
                            <router-link :to="'/article/'+i.id">
                                <div v-html="i.title"></div>
                            </router-link>
                        </DT>
                    </DL>
                </div>
                <div class="blank5 clearfix"></div>
                <!--<div class="dxypage clearfix">
                    页次：{{pargv.page}}/{{pargv.pageCount}} 每页{{pargv.limit}} 文章数{{pargv.count}}&nbsp;&nbsp;
                    <a title="首页" ng-click="topage(1)">首页</a>
                    <a title="上页" ng-click="topage(page-1)" ng-if="pargv.prevPage">上页</a>
                    <a ng-click="topage(page-2)" ng-if="(page-2) > 0">{{page-2}}</a>
                    <a ng-click="topage(page-1)" ng-if="(page-1) > 0">{{page-1}}</a>
                    <strong>{{page}}</strong>
                    <a ng-click="topage(page+1)" ng-if="(page+1) <= pargv.pageCount">{{page+1}}</a>
                    <a ng-click="topage(page+2)" ng-if="(page+2) <= pargv.pageCount">{{page+2}}</a>
                    <a title="下页" ng-click="topage(page+1)" ng-if="pargv.nextPage">下页</a>
                </div>-->
                <div class="blank10 clearfix"></div>
            </div>
            <!--endborder-->
        </div>
        <!--end fl-->
        <!--end fl-->
        <!--<div class="w300 fr">
            <DIV class="tabTitleBar bgf borderTblue">
                <DIV class="borderTnone pb10 YaHei">
                    <H4 class="blue">热门文章</H4>
                    <UL class="newsList newList-in">
                        <li ng-repeat="i in newList">
                            <EM class="no1">{{$index+1}}</EM>
                            <a title="{{i.AArticle.title}}" target="_blank" ng-click="common.toP('article/' + i.AArticle.id)">{{i.AArticle.title}}</a>
                        </li>
                    </UL>
                </DIV>
            </DIV>
        </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      article: {}
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      this.$http.get({api: 'SECOND_CATEGORY', params: {id: this.$route.params.cateId, page: 1}}).then((res) => {
        self.list = res.data
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
