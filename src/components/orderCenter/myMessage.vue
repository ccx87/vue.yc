<template>
  <div class="oc-my-message">
    <div class="mm-top">
      <bar-title title-name="我的消息"></bar-title>
      <div class="mm-list" flex="box:1">
        <table>
          <thead>
            <tr>
              <td class="td-1"><a class="check"></a></td>
              <td class="td-2">消息</td>
              <td class="td-3">时间</td>          
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td-1"><a class="check"></a></td>
              <td class="td-2"><s></s>做一个凹印花纹的礼品自立袋</td>
              <td class="td-3">2017-8-14 12:58</td>           
            </tr>
            <tr>
              <td class="td-1"><a class="check"></a></td>
              <td class="td-2"><s class="active"></s>做一个凹印花纹的礼品自立袋做一个凹印花纹的礼品自立袋做一个凹印花纹的礼品自立袋</td>           
              <td class="td-3">2017-8-14 12:58</td>
            </tr>            
            <tr>
              <td class="td-1"><a class="check"></a></td>
              <td class="td-2"><s></s>做一个凹印花纹的礼品自立袋做一个凹印花纹的礼品自立袋做一个凹印花纹的礼品自立袋</td>           
              <td class="td-3">2017-8-14 12:58</td>
            </tr>                  
          </tbody>
        </table>
      </div>
      <div class="mm-bottom">
        <page></page>      
      </div>
    </div>
  </div>
</template>

<script>
import page from '../../components/common/page.vue';
import barTitle from '../../components/common/barTitle.vue';

export default {
  components: {
    'bar-title': barTitle,
    'page': page
  }
}
</script>

<style>
  .oc-my-message {
    height: calc(100% - 41px);
    overflow: hidden;
  }
  .mm-top {
    height: calc(100% - 75px);
    margin-top: 20px;
    border: 1px solid #E1E1E1;
    overflow: hidden;    
  }
  .mm-list > table {
    table-layout: fixed;
    width: 100%;
  }
  .mm-list > table td {
    padding: 10px;
    border-bottom: 1px solid #E1E1E1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;     
  }
  .mm-list > table > thead td {
    font-weight: 700;
  }
  .mm-list .td-1 {
    width: 3%;
  }
  .mm-list .td-2 {
    width: 70%;
  } 
  .mm-list .td-3 {
    width: 27%;
  }  
  .mm-list .check {
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #E1E1E1;
    border-radius: 1px;
  }
  .mm-list .td-1 > s {
    visibility: hidden;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 10px;
    border-radius: 100%;
    background-color: #41B8F0;
  }    
  .mm-list .td-1 > s.active {
    visibility: visible;
  }   
</style>
