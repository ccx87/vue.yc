<template>
  <div class="oc-right">
    <router-view></router-view>
    <!-- <my-order></my-order> -->
   <!--  <my-message></my-message>
    <user-info></user-info> -->
    <bar-bottom></bar-bottom>  
  </div>
</template>

<script>
//<my-message></my-message>
//<user-info></user-info>
//<order-search></order-search>
//<my-order></my-order>
import orderSearch from '../../components/orderCenter/orderSearch.vue';
import myOrder from '../../components/orderCenter/myOrder.vue';
import userInfo from '../../components/orderCenter/userInfo.vue';
import myMessage from '../../components/orderCenter/myMessage.vue';
import barBottom from '../../components/common/barBottom.vue';

export default {
  components: {
    'order-search': orderSearch,
    'my-order': myOrder,
    'my-message': myMessage,
    'user-info': userInfo,
    'bar-bottom': barBottom
  },  
}
</script>

<style>
  .oc-right {
    height: 100%;
    margin-left: 212px;
    padding: 20px;
  }

</style>
