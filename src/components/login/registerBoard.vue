<template>
<div>
	<div class='register-bg'>
		<div v-if="registerSuccess">
			<img src="">
			<p>{{ title + '成功'}}</p>
			<p>验证邮箱已发送到{{mail}}</p>
			<p>请
				<button @click='toMail'>点击查收</button>
				<p>验证邮箱</p>
			</p>
			<p>没有收到激活邮件？</p>
			<p>请耐心等待，或者请
				<button @click='registerAction'>重新发送</button>
			</p>
			<button @click='backlogin'>返回登录</button>
		</div>
		<div v-else>
			<div class='head-bg'>
				<div class='block-inline line-head'></div>
				<p class='block-inline title-style'>{{ title }}</p>
				<div  class='block-inline line-head'></div>
			</div>
			<div class="change-class">
				<p class='change-text' style="font-size:12px">切换 
				<button @click='changeAction' style='color:#00c1de; border:none ; background-color:white; padding-left:10px; font-size:12px'>{{changeType}}</button>
			    </p>
			</div>
			<div class='input-content'>
				<input type="text" placeholder="请输入您的姓名" class="block input-text" v-model="registerModel.username" >
			    <el-select class='input-text' v-model="form.enrole" placeholder="选择身份" v-if='isPersonal'>
			      <el-option label="工艺师" value="1"></el-option>
			      <el-option label="印前用户" value="2"></el-option>
			    </el-select>
				<!-- <input v-if='isPersonal' type="text" placeholder="选择身份" class="block input-text" :value="user_enrole.roleName"> -->
				<input v-if='isPersonal' type="text" placeholder="选择归属分厂" class="input-text block-inline" :value="factory.factoryName" v-on:focus='showF'>
				<!-- <div v-if='isPersonal'>
					<input type="text" name="belong" placeholder="选择归属分厂" class="input-text block-inline">
					<button class="block-inline" style="float:right">选择</button>
				</div> -->
				<input type="text" placeholder="选择您的邮箱" class="block input-text" v-model="registerModel.mail" >
				<input type="text" placeholder="请输入密码" class="block input-text" v-model="registerModel.password" >
				<input type="text" placeholder="请确认密码" class="block input-text" v-model="registerModel.checkPassword">
				<button @click='registerAction' class='block agreement-button'>同意协议并注册</button>
			</div>
			<div class='bottom-view'>
				<button @click='agreement' style="border:none;background-color:white; float:left; font-size:12px">《找印前网站协议》</button>
				<button @click='backlogin' style="border:none;background-color:white;float:right; font-size:12px">返回登录</button>
			</div>
		</div>
	</div>
	<select-factory v-if='fshow' v-on:closeSelect='fClose' v-on:selectValue='selectFactoryValue' :listData='fData' class='fselect'></select-factory>

</div>
	

</template>

<script type="text/javascript">
import selectFactory from './selectFactory.vue'
import axios from 'axios'
import {GET_ALL_FACTORY,REGISTER} from '../../store/constant.js'

	export default{
		data(){
			return {
				form:{
					enrole:''
				},
				isPersonal:false,
				registerSuccess:false,
				fData:[
				],
				fshow:false,
				factroyData:[],
				options: [{
					value: '选项1',
					label: '个人用户'
					}, {
					value: '选项2',
					label: '印前用户'
					}],
				value: '',
				registerModel:{
					username:'',
					mail:'',
					password:'',
					checkPassword:''
				},
				user_enrole:{
					roleName:'印前用户',
					roleId:'3' //1工艺师 2印前 3企业
				},
				factory:{
					factoryId:'',
					factoryName:''
				}
			}
		},
		computed:{
			title(){
				return this.isPersonal === true ? '个人用户注册' : '企业用户注册'
			},
			changeType(){
				return this.isPersonal === true ? '企业用户注册' : '个人用户注册'
			}
		},
		methods:{
			/*更改类型*/
			changeAction(){
				this.isPersonal = !this.isPersonal
				if (!this.isPersonal) {
					this.user_enrole.roleId = '3'
				}else{
					this.user_enrole.roleId = '-1'
				}
			},
			/*注册*/
			registerAction(){
				console.log(this.form.enrole)
				if (this.isPersonal) {
					this.user_enrole.roleId = this.form.enrole
				}

				if (!this.registerModel.username || !this.registerModel.password || !this.registerModel.mail) {
					alert('请填写完整信息！')
					return
				}
				if (this.isPersonal && (!this.factory.factoryName || !this.user_enrole.roleId)) {
					alert('请填写完整信息！')
					return
				}

				if (this.registerModel.password != this.registerModel.checkPassword) {
					alert('前后两次密码输入不正确')
					return
				}
				//注册
				axios({
					method: 'post',
					// url: this.$store.state.http + '/enterpriseUser/registerEmail',
					url:REGISTER,
					params: {
					    name: this.registerModel.username,
					    enRole: this.user_enrole.roleId,
					    password:this.registerModel.password,
					    factoryId:this.factory.factoryId,
					    email:this.registerModel.mail
					  }
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			/*返回登录*/
			backlogin(){
				this.$store.commit('setLoginState','login')
			},
			/*找印前协议*/
			agreement(){
				
			},
			fClose(){
				this.fshow = false
			},
			showF(){
				this.fshow = true
			},
			selectFactoryValue(fValue){
				this.factory = fValue
				this.fshow = false
			}
		},
		components:{
			selectFactory
		},

		mounted(){
			//获取工厂列表
			var _this = this 
			axios({
				method: 'post',
				  // url: this.$store.state.http + '/enterpriseUser/findAllFactory',
				  url:GET_ALL_FACTORY,
				  params: {
				    offset: 0,
				    fetchSize: 1000,
				    name:''
				  }
			})
			.then(function (response) {
				var list  = response.data.data.list
				var dataArr = []
				for (var i = 0; i < list.length; i++) {
					var item = list[i]
					var itemTrans = {
						factoryId:item.id,
						factoryName:item.name
					}
					dataArr.push(itemTrans)
				}
				_this.fData = dataArr
				console.log(dataArr);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
</script>

<style type="text/css" scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.register-bg{
		margin: 0 auto;
	  	width: 520px;
	  	border: 2px solid #e1e1e1;
	  	position: absolute;
	  	top: 100px;
	  	left: 30%;
	}
	.fselect{
		margin: 20 auto
	}
	.block-inline{
	  	display: inline-block;
	}
	.block{
		display: block;
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
		padding: 0px 6px;
	}
	.change-class{
		font-size: 10px;
		height: 20px;
		margin: 0px 108px 0px;
	}
	.change-text{
		float: right;
	}
	.input-content{
		margin: 0px 108px;
	}
	.input-text{
		width: 100%;
		height: 35px;
		font-size: 15px;
		margin: 0px 0px 15px;
	}
	.agreement-button{
		background-color: #00c1de;
		height: 35px;
		width: 100%;
		border:none;
		color: white;
		font-size: 15px;
	}
	.bottom-view{
		margin: 5px 108px 30px;
		height: 20px;
	}
</style>