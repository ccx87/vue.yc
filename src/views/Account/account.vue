
<template>
<div class='login-content'>
    <bar-top bgColor='green'></bar-top>
    <div class='bg'>
        <login-board  v-if="currentStep === 'login'"></login-board>
        <register-board v-if="currentStep ==='register'"></register-board>
        <forget-password v-if="currentStep ==='forgetpassword'"></forget-password>
    </div>
    <bar-bottom :styleObj="styleObj" class='bottom'></bar-bottom>
</div>
</template>

<script>

import barTop from '../../components/common/barTop.vue';
import barBottom from '../../components/common/barBottom.vue';
import alert from '../../components/common/alert.vue';
import loginBoard from '../../components/login/loginBoard.vue'
import registerBoard from '../../components/login/registerBoard.vue'
import forgetPassword from '../../components/login/forgetPassword.vue'

export default {
    name: 'login',
    data () {
        return {
            styleObj: {
            // background: '#485E7C',
            // color: '#FFF'
          },
        }
    },
    methods:{
    },
    components: {
        barTop,
        barBottom,
        loginBoard,
        registerBoard,
        forgetPassword,
    },
    computed:{
        currentStep(){
            return  this.$store.state.loginState
        }
    }
}
</script>


<style type="text/css" scoped>
  .login-content{
    background-color: white;
    height: 100%; 
  }
  .bg{
    height: calc(100% - 90px);
    width: 100%;
    overflow: hidden;
  }
  .bottom{
    position:absolute;bottom:0;width:100%;height:100px;
  }
</style>