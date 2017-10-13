<template>
  <div class="g-order-step" flex="main:center cross:center">
    <div class="step-item" :class="{active:curStep==1}" flex="main:center cross:center">
      <h4 class="step-num">01</h4>
      <span class="step-text">客户发布订单</span>
      <span class="icons icons-step"></span>
    </div>
    <div class="step-item" :class="{active:curStep==2}" flex="main:center cross:center">
      <h4 class="step-num">02</h4>
      <span class="step-text">工艺师审核，发配订单</span>
      <span class="icons icons-step"></span>
    </div> 
    <div class="step-item" :class="{active:curStep==3}" flex="main:center cross:center">
      <h4 class="step-num">03</h4>
      <span class="step-text">印前接单，工艺制作</span>
      <span class="icons icons-step"></span>
    </div> 
    <div class="step-item" :class="{active:curStep==4}" flex="main:center cross:center">
      <h4 class="step-num">04</h4>
      <span class="step-text">工艺师检验（开发中）</span>
      <span class="icons icons-step"></span>
    </div>  
    <div class="step-item" :class="{active:curStep==4}" flex="main:center cross:center">
      <h4 class="step-num">05</h4>
      <span class="step-text">客户确认</span>
      <span class="icons icons-step"></span>
    </div>              
  </div>
</template>

<script>
export default {
  props: [
    'titleName',
  ],
  data() {
     return {
      curStep:1 //默认第一步
     }
  }  
}
</script>

<style> 
  .icons {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-image: url('../../images/icons.png');
    background-repeat: no-repeat;  
  }
  .icons-step {
    background-position: 0 -20px;
  }
  .g-order-step {
    width: 100%;
    height: 60px;
    padding: 0 10px;
    color: #666;
    background: #E4E9F3;
  }
  .g-order-step h4 {
    padding: 0;
    margin: 0;
  }
  .g-order-step .step-text {
    margin: 0 5px;
  }
  .g-order-step .step-item {
    height: 60px;
    margin-right: 40px; 
  }
  .g-order-step .step-item.active {
    color: #F2AD4E; 
  }
  .g-order-step .step-item.active .icons-step {
    background-position: 0 0; 
  }
</style>
