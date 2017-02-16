<template>
  <div class="hot_list">
    <div class="w300 fr">
        <DIV class="tabTitleBar bgf borderTblue">
            <DIV class="borderTnone pb10 YaHei">
                <H4 class="blue">热门文章</H4>
                <UL class="newsList newList-in">
                    <li v-for="(i, k) in list">
                        <EM class="no1">{{k+1}}</EM>
                        <router-link :to="'/article/'+i.id">
                        {{i.title}}
                        </router-link>
                    </li>
                </UL>
            </DIV>
        </DIV>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      console.log(this.category)
      this.$http.get({api: 'CATE_ARTICLE_LIST', params: {id: 5, page: 1}}).then((res) => {
        self.list = res.data
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>
