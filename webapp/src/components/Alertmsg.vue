<template>
    <div id="jac" class="alertmsg modal fade" v-show="show.status">
      <div class="modal-dialog" id="jacBox" style="position:absolute;">
          <div class="modal-content">
          <div class="modal-header" id="jacBar" style="cursor: move;">
              <h4 class="modal-title">系统提示</h4>
          </div>
          <div class="modal-body" id="jacMessage">
            {{show.msg}}
          </div>
          <div class="modal-footer">
              <button id="jOk" type="button" class="btn btn-primary" v-on:click="sure">确定</button>
              <button id="jNo" type="button" class="btn btn-minor" data-dismiss="modal" v-on:click="cancle" v-show="show.btn">取消</button>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    show () {
      return this.$store.state.alertMsg
    }
  },
  methods: {
    sure () {
      this.show.status = false
      if (this.show.callback) {
        this.show.callback()
      }
    },
    cancle () {
      this.show.status = false
    }
  }
}
</script>
