<template>
  <div class="oc-user-info">
    <div class="ui-top">
      <bar-title title-name="我的个人资料"></bar-title>
      <div class="ui-conter" flex="main:left cross:top">
        <div class="ui-left">
          <dl>
            <dt>昵称：</dt>
            <dd>{{userInfo.nickName}}</dd>
            <dt>身份：</dt>
            <dd>{{userType}}</dd>
            <dt v-if='isCompany'>归属：</dt>
            <dd v-if='isCompany'>{{userInfo.factory | getFactoryName}}</dd>
            <dt>等级：</dt>
            <dd>{{userInfo.lv}}</dd>
            <dt>注册邮箱：</dt>
            <dd>{{userInfo.email}}</dd>
            <dt>绑定QQ：</dt>
            <dd>{{userInfo.qq}}<a class="ui-btn">解绑</a></dd>                                             
          </dl>
        </div>
        <div class="ui-right" flex="dir:top main:left cross:top">
          <img class="photo" src="../../images/photo1.png" alt="photo"/>
          <button class="update-btn">编辑头像</button>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import barTitle from '../../components/common/barTitle.vue';
import {getStore, setStore} from '../../Utils/mUtils.js'
export default {
  data(){
    return {
      userInfo:'',
      isCompany:false
    }
  },
  computed:{
    userType(){
      var typeCode = this.userInfo.type 
      if (typeCode ==1) { return '工艺师'}
      if (typeCode ==2) { return '印前人员'}
      if (typeCode ==3) { return '企业人员'}
      return ''
    }
  },
  components: {
    'bar-title': barTitle
  },
  mounted(){
    this.userInfo = getStore('userInfo')
    if (this.userInfo) {
      if (typeCode ==1) { this.isCompany = false}
      if (typeCode ==2) { this.isCompany = false}
      if (typeCode ==3) { this.isCompany = true}
    }
  },
  filters:{
    getFactoryName(value){
      var comArr = value
      if (comArr.length) {
        var firstItem = comArr[0]
        return firstItem.name 
      }
      return ''
    }
  } 
}
</script>

<style>
  .oc-user-info {
    height: calc(100% - 41px);
  }
  .ui-top {
    border: 1px solid #E1E1E1;
  }  
  .oc-title {
    height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #E1E1E1;
    color: #333;
    font-weight: 700;
  }
  .oc-title > s {
    height: 20px;
    margin-right: 10px;
    border-left: 2px solid #41B8F0; 
  }
  .ui-conter {
    padding: 15px;
  }
  .ui-conter .ui-left {
    width: 80%;
  }
  .ui-conter dl {
    padding: 0;
    margin: 0;
  }
  .ui-conter dt {
    float: left;
    width: 80px;
    height: 35px;
    margin-right: 5px;
    text-align: right;
  }
  .ui-conter dd {
    height: 35px;
  }
  .ui-conter .ui-btn {
    margin: 0 15px;
    font-size: 12px;
  }
  .ui-conter .photo {
    max-width: 110px;
    max-height: 110px;
    border: 1px solid #E1E1E1;
  }
  .ui-conter .update-btn {
    width: 110px;
    height: 36px;
    margin: 10px 0 0 0;
    text-align: center;
    font-size: 14px;
    border: 1px solid #E1E1E1;
    background: #FFF;
  }
</style>
