<template>
  <header class="bar bar-nav h-bar-top" flex="main:left cross:center">
    <router-link v-on:click.native='reload' class="logo" to=""></router-link>
    <div flex='main:right cross:center' class="g-user" >
      <button class="btn-item addOrder" v-if='showAddOrder' @click='toAddOrder'>新增订单</button>
      <button class="btn-item" v-if='showLogout' @click='logout'>退出登录</button>
      <button class="btn-item" v-if='showUserCenter'>用户中心</button>
      <button class="btn-item" v-if='showLogin'>登录</button>
    </div>
  </header>
</template>

<!-- <template>
  <header class="bar bar-nav h-bar-top" flex="main:left cross:center">
    <router-link v-on:click.native='reload' class="logo" to=""></router-link>
    <div flex='main:right cross:center' class="g-user">
      <button class="btn-item addOrder" v-if='showAddOrder' @click='toAddOrder'>新增订单</button>
      <button class="btn-item" v-if='showLogout' @click='logout'>退出登录</button>
      <button class="btn-item" v-if='showUserCenter'>用户中心</button>
      <button class="btn-item" v-if='showLogin'>登录</button>
    </div>
  </header>
</template> -->

<script>
import {getStore, setStore, removeStore} from '../../Utils/mUtils.js'
import axios from 'axios'
import {LOGOUT} from '../../store/constant.js'

export default {
  props: {
    showRefeshIcon: {
      default: true
    },
    showReturnIcon: {
      default: false
    },
    showAddOrder: {
      default: false
    },
    showLogout:{
      default:false
    },
    showLogin:{
      default:false
    },
    showUserCenter:{
      default:false
    }
  },
  data(){
    return{
      userId:''
    }
  },
  methods:{
    writeSome: function() {
      this.$store.commit('isShowAlert', true);
    },
    refresh: function() {
      this.$store.dispatch('getData', {
        progress: this,
        refresh: true
      });
    },
    goBack: function() {
      this.$router.back();
    }, 
    reload(){
      window.location.reload();
    },
    toAddOrder(){
      this.$router.push('/releaseOrder/creatOrder');
    },
    logout(){
      //退出登录
      removeStore('userInfo')
      this.$router.push({path:'/'})
        
      }
  },
  computed:{
  
  },
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/') {
        this.isHome = true;
        this.isList = false;
        this.isOption = false;
      }
      if (uri === '/lists') {
        this.isHome = false;
        this.isList = true;
        this.isOption = false;
      }
      if (uri === '/option') {
        this.isHome = false;
        this.isList = false;
        this.isOption = true;
      }
    });

    var userInfo = getStore('userInfo')
    if (userInfo) {
      this.userId = userInfo.id
      console.log('222' + this.userId)
    }
    
  },  
}
</script>

<style>
 .h-bar-top {
    position: relative;
    height: 49px;
    background-color: #4877C7;
  }
  .h-bar-top a, h1 {
    color: #fff;
  }
  .logo {
    flex: 0 0 auto;
    width: 116px;
    height: 29px; 
    background-image: url('../../images/logo.png');
    background-repeat: repeat;
  }
  .g-user {
    width: 100%; 
  }
  .btn-item {
    height: 35px;
    color: white;
    font-size: 12px;
  }
</style>
