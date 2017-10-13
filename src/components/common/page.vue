<template>
  <div class="page">
    <div class="p-conter" flex="main:right cross:center">
        <span flex="main:left cross:center">共<span class="sum-num">0</span>条，</span>
        <span flex="main:left cross:center">每页<span class="cur-num">0</span>条</span>
        <a href="javascript:;" class="prev-btn active">上一页</a>
        <ul class="p-list" flex="main:center cross:center"><li class="active">1</li></ul>
        <a href="javascript:;" class="next-btn active">下一页</a>                             
    </div>      
  </div> 
</template>

<script>
export default {

}
</script>

<style>
  .page {
    position: relative;
    padding: 20px 0;
    margin: 0 10px;
    color: #666;
    font-size: 14px;
    background: #FFF; 
  }
  .p-conter .num {
    margin: 0 2px;
  }
  .p-list {
    padding: 0;
    margin: 0 5px;
  }
  .p-list > li {
    width: 40px;
    height: 25px;
    line-height: 23px;
    border: 1px solid #E1E1E1;
    text-align: center;
    cursor: pointer;
  }
  .p-list > li.active {
    color: #FFF;
    border-color: #005FFF;
    background: #005FFF;
  }
  .p-list > li:not(.default):hover{
    border-color: #005FFF;
  }
  .prev-btn,
  .next-btn {
    height: 25px;    
    line-height: 23px;
    padding: 0 5px;
    border: 1px solid #E1E1E1;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    background: #E1E1E1;
  }
  .prev-btn {
    margin-left: 10px;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: #333;
    background: #DCDCDC;
  }            
</style>
