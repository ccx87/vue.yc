<template>
<div class='forget-bg'>
	<div header-step>
		<!-- <ul>
			<li>确认账号</li>
			<li>安全验证</li>
			<li>设置密码</li>
		</ul> -->
	</div>
	<div class='head-bg'>
		<div  class='block-inline line-head'></div>
		<p class='block-inline title-style'>忘记密码</p>
		<div  class='block-inline line-head'></div>
	</div>
	<div v-if="stepNo === '1'">
		<p style="margin:0px 107px;font-size:14px;color:#999999">请输入您注册使用的邮箱，您会收到邮件含有重设密码的步骤</p>
		<div style="margin:20px 107px 0px">
			<input type="text" name="mail" placeholder="请输入您已注册的邮箱" style='width:100%;padding-left:10px;height:35px;font-size:15px' v-model='email'>
		</div>
		<div style="margin:0px 107px">
			<input type="text" name="verify_code" placeholder="请输入验证码" v-model='input_verify_code' style="width:70%;padding-left:10px;height:35px;font-size:15px">
			<button @click='getCode' style="height:35px; width:80px; float:right; font-size:15px">获取验证码</button>
		</div>
		<div style="margin:0px 107px"><button @click='nextStep' style="background-color:#00c1de; height:35px; width:100%; color:white; border:none; font-size:15px">下一步</button></div>
		<div style="margin:0px 107px 30px">
			<span style="font-size:12px;color:#999999;float:left">又记得邮箱?</span>
			<button @click='backlogin' style="font-size:12px; color:#00c1de; float:right; border:none; background-color:transparent">返回登录</button>
		</div>
	</div>
	
	<div v-else-if="stepNo === '2'" style="margin:0px 107px 30px">
		<div ><input class="input-style" type="text" name="mail" placeholder="请设置新密码" v-model='newPassword'></div>
		<div ><input class="input-style" type="text" name="mail" placeholder="请再次输入密码" v-model='checkPassword'></div>
		<div ><button style="height:35px; border:none; background-color:#00c1de; font-size:15px; color:white; width:300px" @click='saveAction'>保存</button></div>
	</div>

	<div v-else-if="stepNo === '3'" style="text-align:center">
		<p style="margin:20px auto 0px">密码已重新设置成功</p>
		<button style="height:35px; width:300px; background-color:#00c1de; color:white; margin:30px auto" @click='backlogin'>去登录</button>
	</div>
</div>
</template>

<script type="text/javascript">
import axios from 'axios'
import {GET_FORGET_CODE,RESET_PASSWORD} from '../../store/constant.js'
export default{
	data () {
		return {
			stepNo:'1',
			email:'',
			verify_code:'',//服务端返回验证码
			input_verify_code:'',//手动输入验证码
			newPassword:'',
			checkPassword:''
		}
	},

	methods:{
		/*返回登录*/
		backlogin(){
			this.$store.commit('setLoginState','login')
		},
		/*发送验证*/
		getCode(){

			if (this.email.length == 0) {
				alert('请输入您已注册的邮箱！')
				return
			}

			var _this = this
	        axios({
	          method: 'post',
	          // url: this.$store.state.http + '/enterpriseUser/sendEmailMsg',
	          url:GET_FORGET_CODE,
	          params: {
	              email:this.email
	            }
	        })
	        .then(function (response) {
	        	_this.verify_code = response.data.data.email_code
	          console.log('获取验证码' + response)
	        })
	        .catch(function (error) {
	          console.log(error);
	        });
		},
		//下一步
		nextStep(){
			console.log('input_code'+this.input_verify_code+'|' + 'backCode' + this.verify_code)
			if (this.verify_code != this.input_verify_code) {
				alert('输入验证码不正确')
				return
			}
			this.stepNo = '2'

		},
		saveAction(){
			if (this.newPassword.length ==0) {
				alert('新密码不能为空！')
				return
			}

			if (this.checkPassword.length ==0) {
				alert('确认密码不能为空！')
				return
			}

			if (this.newPassword != this.checkPassword) {
				alert('前后两次验证码不相同')
				return
			}

			//修改密码
			var _this = this
	        axios({
	          method: 'post',
	          // url: this.$store.state.http + '/enterpriseUser/setPassword',
	          url:RESET_PASSWORD,
	          params: {
	              email: this.email, 
	              password:this.newPassword
	            }
	        })
	        .then(function (response) {
	          console.log(response);
	          _this.stepNo = '3'	        
	        })
	        .catch(function (error) {
	          console.log(error);
        });
		}
	},

	mounted(){

	}
}
</script>

<style type="text/css" scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
	.forget-bg{
		margin: 0 auto;
	  	width: 520px;
	  	border: 1px solid  #e1e1e1;
	  	position: absolute;
	  	top: 20%;
	  	left: 30%;
	}
	/*li{
		float: left;
		list-style: none;
		padding: 10px 20px;
	}*/
	.block-inline{
	  	display: inline-block;
	}
	.block{
		display: block;
	}
	.header-step{
		height: 30px;
		margin: 20px 65px 0px;
		text-align:center;
	}
	.line-head{
		width: 90px;
		height: 1px;
		background-color: #e1e1e1;
		margin: 5px auto;
	}
	.head-bg{
		margin: 20px 108px 20px;
		align-content: center;
		color: #666666;
	}
	.title-style{
		padding: 0px 20px;
	}
	.input-style{
		height: 35px;
		padding-left: 10px;
		width: 100%;
		font-size: 15px;
		margin: 0px auto 15px;

	}
</style>