<template>
  <div class="oc-my-order">
    <div class="mo-top">
      <bar-title title-name="我的订单"></bar-title>
      <div class="mo-list" style="overflow:scroll; height:100%">
        <!-- 工艺师订单列表 -->
        <table v-if="type == 1">
          <thead>
            <tr>
              <td class="td-1">雇主名称</td>
              <td class="td-1">看样编号</td>
              <td class="td-2">订单名称</td>
              <td class="td-3">印刷类型</td>
              <td class="td-4">状态</td>
              <td class="td-6">操作</td>            
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list">
              <td class="td-1">{{item.corpName}}</td>
              <td class="td-2">{{item.taskNo}}</td>
              <td class="td-3">{{item.name}}</td>
              <td class="td-4">{{item.type | type}}</td>
              <td class="td-5">{{item.status | status}}</td>
              <td class="td-6">
                <router-link class="td-btn" to="/">详情</router-link>
                <router-link class="td-btn" to="/assign">派单</router-link>             
              </td>            
            </tr>
          </tbody>
        </table> 
        <!-- 印前订单列表 -->
        <table v-if="type == 2">
          <thead>
            <tr>
              <td class="td-1">雇主名称</td>
              <td class="td-1">看样编号</td>
              <td class="td-2">订单名称</td>
              <td class="td-3">印刷类型</td>
              <td class="td-4">状态</td>
              <td class="td-6">操作</td>           
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list">
              <td class="td-1">{{item.corpName}}</td>
              <td class="td-2">{{item.taskNo}}</td>
              <td class="td-3">{{item.name}}</td>
              <td class="td-4">{{item.type | type}}</td>
              <td class="td-5">{{item.status | status}}</td>
              <td class="td-6">
                <router-link class="td-btn" to="/">详情</router-link>
                <router-link class="td-btn" to="/lists">接单</router-link>             
              </td>            
            </tr>
          </tbody>
        </table> 
        <!-- 企业订单列表 -->
        <table v-if="type == 3">
          <thead>
            <tr>
              <td class="td-1">看样编号</td>
              <td class="td-2">订单名称</td>
              <td class="td-3">印刷类型</td>
              <td class="td-4">状态</td>
              <td class="td-5">完成时间</td>
              <td class="td-6">操作</td>            
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list">
              <td class="td-1">{{item.taskNo}}</td>
              <td class="td-2">{{item.name}}</td>
              <td class="td-4">{{item.type | type}}</td>
              <td class="td-5">{{item.status | status}}</td>
              <td class="td-5">{{item.confirmDate?item.confirmDate:'------'}}</td>
              <td class="td-6">
                <router-link class="td-btn" to="/">详情</router-link>
                <router-link class="td-btn" to="/lists">进度</router-link>             
              </td>            
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
    <page></page>
  </div>
</template>


<!-- confirmDate
:
null
corpName
:
"测试企业师"
id
:
2
name
:
"订单名称1号,测试企业"
status
:
7
taskNo
:
"NO201708111508528218"
type
:
1
 -->
<script>
import page from '../../components/common/page.vue';
import barTitle from '../../components/common/barTitle.vue';
import axios from 'axios'
import {getStore} from '../../Utils/mUtils.js'
import {GET_ENTERPRISE_TASK, GET_AUDIT_TASK, GET_PRODUCT_TASK} from '../../store/constant.js'
export default {
  data(){
    return{
      list:[],
      type:-1,
      userInfo:{}
    }
  },
  components: {
    'page': page,
    'bar-title': barTitle
  },
  mounted(){
    //获取用户信息
    if (this.type ==1) {//工艺师
      var _this = this 
      var userId = this.userInfo.id
      axios({
        method: 'post',
        url:GET_AUDIT_TASK,
        params: {
            offset: 0,
            fetchSize: '100',
            type:'0',
            taskNo:'',
            userId:userId,
          }
      })
      .then(function (response) {
        // data":{"totalCount":1,"list":[{"id":42,"taskNo":"NO201708231821452335","status":2,"name":"订单1"}]},
        console.log(response);
        if (response.data.success == false) { 
          alert(response.data.error)
          return
        }
        _this.list = response.data.data.list;

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    //印前
    if (this.type ==2) {
      var _this = this 
      var userId = this.userInfo.id
      axios({
        method: 'post',
        url:GET_PRODUCT_TASK,
        params: {
            offset: 0,
            fetchSize: '100',
            type:'0',
            taskNo:'',
            userId:userId,
          }
       })
      .then(function (response) {
        // data":{"totalCount":1,"list":[{"id":42,"taskNo":"NO201708231821452335","status":2,"name":"订单1"}]},
        console.log(response);
        if (response.data.success == false) { 
          alert(response.data.error)
          return
        }
        _this.list = response.data.data.list;

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    if (this.type ==3) {//企业
      var _this = this 
      var userId = this.userInfo.id
      axios({
        method: 'post',
        url:GET_ENTERPRISE_TASK,
        params: {
            offset: 0,
            fetchSize: '100',
            type:'0',
            taskNo:'',
            userId:userId,
          }
      })
      .then(function (response) {
        // data":{"totalCount":1,"list":[{"id":42,"taskNo":"NO201708231821452335","status":2,"name":"订单1"}]},
        console.log(response);
        if (response.data.success == false) { 
          alert(response.data.error)
          return
        }
        _this.list = response.data.data.list;

      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  created(){
    this.userInfo = getStore('userInfo')
    this.type = this.userInfo.type
  },
          // 1:任务发起，2：待工艺接单，3：待工艺审核，4：审核成功等待派单， 5确认接受任务，6：合作中，7等待雇主确认 8 返工，9：任务完成
  filters: {
    type:function(value){
      if (!value) return '未知'
        var typeValue = ''
      if (value ==1) {
        typeValue = '凹印'
      }
      return typeValue
    },
    status: function (value) {
      if (!value) return ''
        var status = ''
      if (value == 1) {
        status = '任务发起'
      }
      if (value == 2) {
        status = '待工艺接单'
      }
      if (value == 3) {
        status = '待工艺审核'
      }
      if (value == 4) {
        status = '审核成功等待派单'
      }
      if (value == 5) {
        status = '确认接受任务'
      }
      if (value == 6) {
        status = '合作中'
      }
      if (value == 7) {
        status = '等待雇主确认'
      }
      if (value == 8) {
        status = '返工'
      }
      if (value == 9) {
        status = '任务完成'
      }
      return status
    }
  }
}


</script>

<style>
  .oc-my-order {
    height: calc(100% - 215px);
    overflow: hidden;
  }
  .mo-top {
    height: calc(100% - 75px);
    margin-top: 20px;
    border: 1px solid #E1E1E1;    
  }
  .mo-list {
    padding: 0 10px;
  }
  .mo-list > table {
    table-layout: fixed;
    width: 100%;
  }
  .mo-list > table > thead tr {
    border-bottom: 1px solid #E1E1E1;
  }
  .mo-list > table > thead td {
    padding: 7px 10px;
    font-size: 14px;
  }
  .mo-list > table > tbody td {
    padding: 7px 10px;
    color: #333;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;    
  }
  .mo-list .td-1 {
    width: 12%;
  }
  .mo-list .td-2 {
    width: 25%;
  }
  .mo-list .td-3 {
    width: 12%;
  }
  .mo-list .td-4 {
    width: 12%;
  }
  .mo-list .td-5 {
    width: 12%;
  } 
  .mo-list .td-6 {
    width: 15%;
  }
  .mo-list .td-btn {
    display: inline-block;
    width: 50px;
    height: 22px;
    line-height: 20px;
    color: #333;
    border: 1px solid #E1E1E1;
    text-align: center;
  }   
  .mo-list .td-btn.default {
    color: #41B8F0;
    border-color: #41B8F0;
  }         
</style>
