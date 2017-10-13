
<template>
	<div class='login-board'>
		<div class='head-bg'>
			<div  class='block-inline line-head'></div>
			<p class='block-inline title-style'>找印前(运城版)</p>
			<div  class='block-inline line-head'></div>
		</div>
		<div class='input-bg'>
			<input class="login-input-class" type="text" name="username" placeholder="输入手机号（邮箱）" v-model='username'>
			<input class="login-input-class" type="password" name="password" placeholder="密码" v-model='password'>
		</div>
		<div class='auto-login-bar'>
		    <p class="auto-login-radio float-left pfont10">
			    <input type="checkbox" name="auto_login" v-model='autologin'>
				7天自动登录
  			</p>
  			<button class="float-right forget-password" @click='forgetpasswordAction'>忘记密码？</button>
		</div>
		<button class='login-button block-style' @click='loginAction'>登录</button>
		<button class='block-style register-button' @click='registerAction'>新用户注册</button>
	</div>
</template>

<script>
import axios from 'axios'
import {getStore, setStore} from '../../Utils/mUtils.js'
import {LOGIN} from '../../store/constant.js'

	export default{
		data(){
			return{
        loginType:0, //0普通登录 1 7天登录
        username:'',
        password:'',
        autologin:''
			}
		},
    mounted(){

    },
		methods:{
			loginAction(){

        if (this.username.length ==0) {
          alert('请输入手机或者邮箱')
          return
        }

         if (this.password.length ==0) {
          alert('请输入密码')
          return
        }

        //登录
        var _this = this
        axios({
          method: 'post',
          // url: this.$store.state.http + '/enterpriseUser/userLogin',
          url:LOGIN,
          params: {
              loginType: this.loginType, 
              password:this.password,
              email:this.username
            }
        })
        .then(function (response) {
          console.log(response);
          if (response.data.success == false) { 
            alert(response.data.error)
            return
          }
          _this.$router.push({path:'/orderCenter/OrderCenterRight/myOrder'})
          var userInfo = response.data.data
          setStore('userInfo',userInfo)
          /*:address:null birthday:null city:null email:"chendq@ppress.cn" id:2784 name:"DD" nickName:"chendq@ppress.cn" phone:null qq:
         null sex:"0" type:2*/
        })
        .catch(function (error) {
          console.log(error);
        });
        
			},
			registerAction(){
				this.$store.commit('setLoginState','register')
				console.log(this.$store.state)
			},
			forgetpasswordAction(){
				this.$store.commit('setLoginState','forgetpassword')
			}
		}
	}
</script>

<style type="text/css" scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
  .float-left{
  	float: left;
  }
  .float-right{
  	float: right;
  }
  .block-style{
  	display: block;
  }
  .block-inline{
  	display: inline-block;
  }
  .pfont10{
  	font-size: 10px;
  }
  .login-board{
  	margin: 0 auto;
  	height: 320px;
  	width: 400px;
  	border: 2px solid #d8f2f8;
  	position: absolute;
  	top: 20%;
  	left: 30%;
  }
  .line-head{
  	width: 90px;
  	height: 1px;
  	background-color: #e1e1e1;
  	margin: 5px auto;
	}
  .head-bg{
  	margin: 30px 50px 0px;
  	align-content: center;
  }
  .title-style{
  	color: #666666;
    padding: 0px 2px;
  }
  .login-input-class{
  	height: 35px;
  	display: block;
    width: 100%;
  	font-size: 15px;
  	padding-left: 10px;
  	border:1px solid #e1e1e1;
    margin: 20px 0px;
  }
  .input-bg{
  	margin:0px 50px;
  }
  .auto-login-radio{
  }
  .auto-login-bar{
  	margin: auto 50px;
  	height: 20px;
  }
  button{
    background-color: transparent;
  }
  .forget-password{
  	border:none;
  	height: 20px;
  	color: #00c1de;
    font-size: 12px;
  }
  .login-button, .register-button{
  	margin:10px auto;
  	width: 300px;
  	height: 35px;
  	border:1px solid #e1e1e1;
  	color:#666666;
  	font-size: 16px;
  }
  .login-button{
  	background-color: #00c1de;
  	border-style: none;
  	color:white;
  }
	
</style>