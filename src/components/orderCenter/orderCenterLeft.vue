<template>
  <div class="oc-left">
    <div flex="dir:top main:center cross:center" class="user-info">
      <a class="ui-title">{{userType}}</a>
      <a class="ui-photo"><img src="../../images/photo1.png" alt="photo"/></a>
      <a class="ui-name">{{userInfo.name}}</a> 
    </div>
    <nav flex="dir:top" class="nav-tab">
      <router-link class="nav-item" :class="{'active':curIndex ==1}" to="/orderCenter/OrderCenterRight/myOrder" flex="main:left cross:center" v-on:click.native='changeMenu(1)'>
        <i class="icons icons-om"></i>
        <span class="">订单管理</span>
      </router-link>
      <router-link class="nav-item" :class="{'active':curIndex ==2}" to="/orderCenter/OrderCenterRight/myMessage" flex="main:left cross:center" v-on:click.native='changeMenu(2)'>
        <i class="icons icons-mi"></i>
        <span class="">我的消息</span>
      </router-link>
      <router-link class="nav-item" :class="{'active':curIndex ==3}" to="/orderCenter/OrderCenterRight/userInfo" flex="main:left cross:center" v-on:click.native='changeMenu(3)'>
        <i class="icons icons-uc"></i>
        <span class="">用户中心</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import {getStore, setStore} from '../../Utils/mUtils.js'
export default {
  data(){
    return{
      curIndex: 1, //默认为订单管理
      userInfo:'',
    }
  },
  methods:{
    changeMenu(index){
      console.log(index,this.userInfo)
      this.curIndex = index
    }
  },
  computed:{
    userType(){
      var typeCode = this.userInfo.type 
      if (typeCode ==1) { return '我是工艺师'}
      if (typeCode ==2) { return '我是印前'}
      if (typeCode ==3) { return '我是企业'}
      return ''
    }
  },
  mounted(){
    console.log('进来了')
    this.userInfo = getStore('userInfo')
    console.log(this.userInfo)
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
  .oc-left {
    position: absolute;
    width: 212px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #D3DEF2;
  }
  .user-info {
    margin-top: 5px; 
  }
  .ui-title {
    color: #333;
  }
  .ui-photo {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #FFF;
    overflow: hidden;
  }
  .ui-photo > img {
    max-width: 80px;
    max-height: 80px;
  }
  .ui-name {
    color: #666;
    font-size: 12px;
  }
  .user-info > a {
    display: inline-block;
    margin-bottom: 5px;
  }
  .oc-left .nav-tab {
    margin-top: 10px;
  }
  .oc-left .nav-item {
    height: 40px;
    padding: 0 20px;
    color: #666;
    font-weight: 700;
  }
  .oc-left .nav-item.active {
    color: #333;
    background-color: #FFF; 
  }
  .icons-om {
    background-position: 0 -221px;
  }
  .icons-mi {
    background-position: 0 -241px;
  }
  .icons-uc {
    background-position: 0 -261px;
  }
</style>
