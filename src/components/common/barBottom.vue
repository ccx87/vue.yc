<template>
  <footer class="f-bar-bottom" :style="styleObj" flex="main:center cross:center">
    Copyright© 2017 找印前网 厦门元印信息科技有限公司 All rights reserved. 闽ICP备11025350号-2  
  </footer>
</template>

<script>
export default {
  props: [
    'styleObj',
  ],
  data() {
     return {}
  }
}
</script>

<style>
.footer {
  
}
.f-bar-bottom {
  position: relative;
  height: 41px;
  background-color: #FFF;
  border: none;
  color: #666;
  font-size: 12px;
}
</style>
