<template>
  <div class="g-order-center">
    <bar-top :showAddOrder='showAddOrder' showLogout='true'></bar-top>
    <main class="g-oc">
      <order-center-left></order-center-left>
      <router-view></router-view>
      <!-- <order-center-right></order-center-right> -->
    </main>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../../components/common/barTop.vue';
import orderCenterLeft from '../../components/orderCenter/orderCenterLeft.vue';
import orderCenterRight from '../../components/orderCenter/orderCenterRight.vue';
import alert from '../../components/common/alert.vue';
import {getStore} from '../../Utils/mUtils.js'
export default {
  data(){
    return{
      showAddOrder:false
    }
  },
  components: {
    'bar-top': barTop,
    'order-center-left': orderCenterLeft,
    'order-center-right': orderCenterRight,
    'alert': alert
  },
  methods:{
  },
  mounted(){
    console.log('mounted')
      if (getStore('userInfo').type ==3) {
            console.log(getStore('userInfo').type)
            this.showAddOrder = true
      } 
    }
}
</script>

<style>
  .g-order-center {
    height: 100%; 
  }
  .g-oc {
    position: relative;
    height: calc(100% - 49px);
  }
</style>
