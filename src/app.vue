<template>
  <div id="vueApp">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
import {getStore} from './Utils/mUtils'
  export default {
    name: 'app',
    created () {

      var userInfo = getStore('userInfo')
      console.log('ududjg' + userInfo)
      if (userInfo) {
        this.$router.push('/orderCenter/OrderCenterRight/myOrder')
      } else {
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  [v-cloak] {
	display: none;
  }
  html, body {
    height: 100%;
  }
  body {
    position: relative;
	  font-family: "宋体";
	  font-size: 14px;
  }
  #vueApp {
    height: 100%;
    min-width: 1000px;
  }
 
  button:hover {
    opacity: .8;
    background: transparent;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  input, textarea, button, select {
    font-family: "宋体";
  }
</style>
