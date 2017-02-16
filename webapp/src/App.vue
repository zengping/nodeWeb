<template>
  <div class="app">
    <div class="container">
        <div id="head">
            <publichead></publichead>
            <!--第一屏 start-->
            <router-view></router-view>
            <publicfoot></publicfoot>
        </div>
    </div>
  </div>
</template>

<script>
import Publichead from './components/Publichead'
import Publicfoot from './components/Publicfoot'

export default {
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
