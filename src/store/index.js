import Vue from 'vue'; // get vue
import Vuex from 'vuex'; // get vuex
import VueResource from 'vue-resource';// get $http

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  // http:'http://192.168.2.108:8080/',
  cardData: [],
  isloadingComplete: false,
  busy: false,
  isShow: false,

  loginState:'login',//登录注册状态
  userState:'yinqian',//用户类型（工艺师：engineer、印前 yinqian、公司客户 company）
  userName:'用户名',//用户名
  nickName: '昵称', // 昵称
  identify:'身份',//身份
  belong:'归属',//归属
  level:'等级',//等级
  register_mail:'注册邮箱',//注册邮箱
  bind_QQ:'绑定QQ',
};


const getters = {};

const mutations = {
  updateLoadingState(state, data) {
    state.isloadingComplete = data;
  },
  updateBusyState(state, data) {
    state.busy = data;
  },
  addData(state, data) {
    state.cardData = state.cardData.concat(data);
  },
  refreshData(state, data) {
    state.cardData = data;
  },
  isShowAlert(state, data) {
    state.isShow = data;
  },
  /*更新登录注册状态*/
  setLoginState(state, data){
    state.loginState = data;
  },
};

const actions = {
  getData(context, object) {
    const {progress, isRefresh} = object;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);

    /**
     * use vue-resource
     */
    // Vue.http.get('./mock/api.json').then((response) => {
    //   const json = response.data;
    //   context.commit('updateLoadingState', true);
    //   context.commit('updateBusyState', false);
    //   if (isRefresh === true) {
    //     context.commit('refreshData', json);
    //   } else {
    //     context.commit('addData', json);
    //   }
    //   progress.$Progress.finish();
    // }, () => {
    //   context.commit('updateBusyState', false);
    //   progress.$Progress.fail();
    // });
}

};

const store = new Vuex.Store({
 state,
 getters,
 mutations,
 actions,
});

export default store;
