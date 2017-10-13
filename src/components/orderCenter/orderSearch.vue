<template>
  <div class="oc-search">
    <bar-title title-name="订单搜索"></bar-title>
    <div class="s-conter">
      <div class="sc-line" flex="main:left cross:center">
        <div class="line-item" flex="main:left cross:center">
          <span class="txt">看样编号</span>
          <label class="lab"><input type="text" class="input"/></label>
        </div>
        <div class="line-item" flex="main:left cross:center">
          <span class="txt">雇主名称</span>
          <label class="lab"><input type="text" class="input"/></label>
        </div>           
      </div>
      <div class="sc-line" flex="main:left cross:center">
        <span class="txt">订单状态</span>
        <button class="btn active">全部</button>
        <button class="btn">审核中</button>
        <button class="btn">制作中</button>
        <button class="btn">等待确认</button>
        <button class="btn">返工</button>
        <button class="btn">已完成</button> 
      </div>
    </div>
  </div>
</template>

<script>
import barTitle from '../../components/common/barTitle.vue';

export default {
  components: {
    'bar-title': barTitle
  },  
}
</script>

<style>
  .oc-search {
    border: 1px solid #E1E1E1; 
  }
  .s-conter {
    color: #666;
    padding:0 10px 20px 10px; 
  }
  .sc-line {
    height: 36px;
    margin-top: 20px;
  }
  .sc-line .line-item {
    margin-right: 30px; 
  }
  .sc-line .txt {
    margin-right: 10px;
  }
  .sc-line .lab:before {
    
    display: block;   
    content: '搜索';
    width: 36px;
    height: 34px;
    margin-left: 324px;
    line-height: 34px;
    font-size: 12px;
    text-align: center;
    background: #E1E1E1;
         
  }
  .sc-line .lab {
    position: relative;
    width: 360px;
    height: 36px;
    border: 1px solid #E1E1E1;
  }
  .sc-line .lab .input {
    position: absolute;
    top: 0;
    left: 0; 
    width: calc(100% - 36px); 
    height: 34px;  
    margin: 0;
    padding: 0;
    border: none;
    text-indent: 10px;
        
  }
  .sc-line .btn {
    height: 31px;
    padding: 0 20px;
    margin-right: 10px;
    color: #666;
    border: none;
    font-size: 14px;
    background-color: #E5E5E5;
  }
  .sc-line .btn.active {
    color: #FFF;
    background-color: #41B8F0;
  }
</style>
