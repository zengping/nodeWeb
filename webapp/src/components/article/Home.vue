<template>
  <div class="home">
    <div class="container">
        <div id="head">
            <publichead></publichead>
            <!--第一屏 start-->
            <div class="con_2">
                <div class="blank5 clearfix"></div>
                <!--<div class="listbox" ng-repeat="i in category">
                    <h2>
                        <span class="block_cate">
                        <a target="_blank" ng-click="common.toP('category_root/' + i.ACategory.id)">
                            <div ng-bind="i.ACategory.name"></div>
                        </a>
                        </span>
                        <span class="more fr">
                        <a target="_blank" ng-click="common.toP('category_root/' + i.ACategory.id)">
                            更多...
                        </a>
                        </span>
                    </h2>
                    <ul>
                        <li class="new" ng-repeat="o in article[i.ACategory.id]" ng-click="common.toP('article/' + o.AArticle.id)">
                            <span class="date" ng-bind="o[0]['created']"></span>
                            <span class="title">
                                <a title="{{o.AArticle.title}}" target="_blank">
                                    <div ng-bind="o.AArticle.title"></div>
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>-->
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Publichead,
    Publicfoot
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
