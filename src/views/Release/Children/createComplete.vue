<template>
  <div class="ro-center">
    <div class="creat-complte">
      <creat-order-step></creat-order-step>
      <div class="cc-panel" flex="main:center cross:center">
        <div class="cc-center" flex="dir:top main:center cross:center">
          <p><i class="icons icons-compltet"></i></p>
          <p class="cc-text">订单发布成功！</p>
          <p class="cc-bottom">
            <router-link class="btn-item creat-btn" to="/releaseOrder/creatOrder">继续发布</router-link>
            <router-link class="btn-item goback-btn" to="/orderCenter/OrderCenterRight/myOrder">返回主页</router-link>      
          </p>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
import creatOrderStep from '../../../components/releaseOrder/creatOrderStep.vue';


export default {
  components: {
    'creat-order-step': creatOrderStep
  }
}
</script>

<style>
  .ro-center {
    width: 100%;
    height: calc(100% - 90px);
    background: #F5F5F5;
    overflow: hidden;
  }  
  .creat-complte {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .creat-complte .cc-panel {
    height: calc(100% - 60px);
  }
  .creat-complte .cc-center {
    width: 500px;
    height: 350px;
    margin: 0 auto;
  }
  .creat-complte .cc-bottom {
    margin: 20px 0;
    text-align: center;
  }
  .creat-complte .cc-bottom .btn-item {
    display: inline-block;
    padding: 8px 30px 8px;
    background: #FFF;
    border-color: #41B8F0;
    border-radius: 0px;
    border: 1px solid #41B8F0;
    color: #41B8F0;
    font-size: 14px;
    margin-right: 10px;
  } 
  .creat-complte .cc-bottom .btn-item:hover {
    background: #f5f5f7;
  }
  .creat-complte .cc-bottom .btn-item.goback-btn {
    border-color: #E1E1E1;
    color: #666;
  }
  .creat-complte .icons-compltet {
    width: 60px;
    height: 60px;
    background-position: -110px 0;
  } 
  .creat-complte .cc-text {
    color: #333;
    margin-bottom: 20px;
    font: 24px/25px '';    
  }
</style>
