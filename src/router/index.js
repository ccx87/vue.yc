import Vue from 'vue';
import VueRouter from 'vue-router';

const OrderCenter = r => require.ensure([], () => r(require('../views/Center/orderCenter.vue')), 'OrderCenter')
const ReleaseOrder = r => require.ensure([], () => r(require('../views/Release/ReleaseOrder.vue')), 'ReleaseOrder')
const Account = r => require.ensure([], () => r(require('../views/Account/account.vue')), 'Account')
const OrderCenterRight = r => require.ensure([],() => r(require('../components/orderCenter/orderCenterRight.vue')),'OrderCenterRight')
const MyOrder = r => require.ensure([],() => r(require('../components/orderCenter/myOrder.vue')),'MyOrder')
const MyMessage = r => require.ensure([],() => r(require('../components/orderCenter/myMessage.vue')),'MyMessage')
const UserInfo = r => require.ensure([],() => r(require('../components/orderCenter/userInfo.vue')),'UserInfo')

const StartCreat = r => require.ensure([],() => r(require('../views/Release/Children/startCreate.vue')),'StartCreat')
const CreatOrder = r => require.ensure([],() => r(require('../views/Release/Children/creatOrder.vue')),'CreatOrder')
const CreatComplete = r => require.ensure([],() => r(require('../views/Release/Children/createComplete.vue')),'CreatComplete')

const Assign = r => require.ensure([], () => r(require('../views/Assign/assignList.vue')), 'Assign')


Vue.use(VueRouter);

const routes = [
  { path: '/releaseOrder', 
    component: ReleaseOrder,
    children: [{
        path: 'startCreat', //开始创建订单
        component: StartCreat,
      },{
        path: 'creatOrder', //创建
        component:CreatOrder
      },{
        path: 'creatComplete',//创建完成
        component:CreatComplete
    }]

  },
  { 
    path: '/orderCenter', 
    component: OrderCenter,
    children:[{path: 'OrderCenterRight',
               component:OrderCenterRight,
             children: [{
                path: 'myOrder', //我的订单列表
                component: MyOrder,
              },{
                path: 'myMessage', //我的消息
                component:MyMessage
              },{
                path: 'userInfo',//用户信息
                component:UserInfo
            }]
          }]
  },
  {path: '/assign', component: Assign },
  { path: '/account', component: Account },
  { path: '/', component: Account },
];

const router = new VueRouter({routes});

export default router;
