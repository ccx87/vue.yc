<template>
  <div class="ro-center">
    <div class="creat-order">
      <creat-order-step></creat-order-step>
      <div class="co-center">
        <creat-order-base-info :factoryList='factorys' v-on:orderInfo='returnInfo'></creat-order-base-info>
        <creat-order-print-info v-on:orderPrint='returnPrint'></creat-order-print-info>
         <!-- 制作时长 -->
        <creat-order-time v-on:timeObj='returnMakeTime'></creat-order-time>
      </div>
      <div class="co-bottom">
        <button @click='creatHandle' class="btn creat-btn">创建订单</button> 
      </div>    
    </div>
  </div>
</template>

<script>

import creatOrderStep from '../../../components/releaseOrder/creatOrderStep.vue';
import creatOrderBaseInfo from '../../../components/releaseOrder/creatOrderBaseInfo.vue';
import creatOrderPrintInfo from '../../../components/releaseOrder/creatOrderPrintInfo.vue';
import barTitle from '../../../components/common/barTitle.vue';
import creatOrderTime from '../../../components/releaseOrder/creatOrderTime.vue'; 
import {CREATE_TASK, GET_TASK_FACTORY} from '../../../store/constant.js'
import axios from 'axios'
import {getStore, setStore} from '../../../Utils/mUtils.js'

export default {
  data(){
      return{
        formData:{
          name:'',
          remark:'',
          format:'',
          packagingType:-1,
          printingParams:{},
          makingDate:0,
          makingType:2,
          fileInfo:'',
          factoryIds:'',
          taskNo:''
        },
        styleObj:{
        },
        factorys:[]
        
      }
    },
  components: {
    'creat-order-step': creatOrderStep,
    'creat-order-base-info': creatOrderBaseInfo,
    'creat-order-print-info': creatOrderPrintInfo,
    'bar-title':barTitle,
    'creat-order-time':creatOrderTime
  },
  methods:{
    //创建订单
    creatHandle(){
        console.log('userInfo'+JSON.stringify(this.formData))
        if (!this.formData.name) {
        alert('请填写订单名称')
        return
        }
        if (!this.formData.remark) {
         alert('请填写订单描述')
         return
        }
        if (this.formData.fileInfo.length ==0) {
          alert('请上传图片文件')
          return
        }
        if (!this.formData.format) {
          alert('请选择文件类型')
          return
        }

        if (!this.formData.factoryIds) {
          alert('请选择印前公司')
          return
        }

        if (!this.formData.printingParams.width || !this.formData.printingParams.height) {
          alert('请设置单元尺寸')
          return
        }
        if (!this.formData.packagingType) {
          alert('请选择包装类型')
          return
        }

        if (!this.formData.printingParams.edgeUp || !this.formData.printingParams.edgeUnder || !this.formData.printingParams.edgeLeft || !this.formData.printingParams.edgeRight) {
          alert('请设置边距尺寸')
          return
        }

        if (this.formData.packagingType == 4 && !this.formData.printingParams.edgeSide) {
          alert('请设置边距尺寸')
          return
        }

        if (!this.formData.makingDate) {
          alert('请输入制作时长')
        }
        //提交数据
        var _this = this 
        axios({
          method: 'post',
            url: CREATE_TASK,
            params: {
              name:this.formData.name,
              remark:this.formData.remark,
              format:this.formData.format,
              packagingType:this.formData.packagingType,
              printingParams:JSON.stringify(this.formData.printingParams),
              makingDate:this.formData.makingDate,
              makingType:this.formData.makingType,
              fileInfo:this.formData.fileInfo,
              userId:getStore('userInfo').id,
              factoryIds:this.formData.factoryIds,
              taskNo:this.formData.taskNo
            }
        })
        .then(function (response) {
          console.log(response);
          if (response.data.success == false) { 
            alert(response.data.error)
            return
          }
          _this.$router.push('/releaseOrder/creatComplete')
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    returnInfo(object){
      console.log('信息'+JSON.stringify(object))
      this.formData.name = object.name
      this.formData.remark = object.remark
      this.formData.format = object.format
      this.formData.fileInfo = JSON.stringify(object.fileInfo) 
      this.formData.factoryIds =  JSON.stringify(object.factoryId)
      this.formData.taskNo = object.taskNo
    },

    returnPrint(object){
      console.log('尺寸'+JSON.stringify(object))
      this.formData.printingParams = object.printingParams
      this.formData.packagingType = object.packagingType
    },
    returnMakeTime(object){
      console.log('时间'+JSON.stringify(object))
      var time = object
      if (!time) {return}
      if (object.dayTime!=0) {
        this.formData.makingDate = time.dayTime
        this.formData.makingType = 2
      }else{
        this.formData.makingDate = time.hoursTime
        this.formData.makingType = 1
      }
    }
  },
  mounted(){
    var userInfo = getStore('userInfo')
    if (userInfo) {
      //获取接单厂商
      var _this = this 
      axios({
        method: 'post',
          url: GET_TASK_FACTORY,
          params: {
            userId:userInfo.id
          }
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success == false) { 
            alert(response.data.error)
            return
          }
          _this.factorys = response.data.data //"id": 1,"name": 

      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>
  .creat-order {
    width: 100%;
    overflow: scroll;
    height: 100%;
  }
  .creat-order .co-center {
    width: 1000px;
    margin: 20px auto;
  }
  .creat-order input:focus,
  .creat-order textarea:focus {
    border-color: #41B8F0;
  } 
  .creat-order .co-bottom {
    margin: 0 0 20px 0;
    text-align: center;
  }
  .creat-order .co-bottom .btn {
    padding: 10px 30px 10px;
    background: #41B8F0;
    border-color: #41B8F0;
    border-radius: 0px;
    color: #FFF;
    font-size: 14px;
  } 
  .ro-center {
    width: 100%;
    height: calc(100% - 90px);
    background: #F5F5F5;
    overflow: hidden;
  } 
  .bottom-step{
    margin: 10px 10px 10px 30px;
  }   
</style>

<!-- name  String  true  商品名称
remark  String  true  商品描述
format  String  true  格式
packagingType Integer true  袋型(1立体袋  2：四封袋 3：背封袋 4：枕形袋 5：单片 6简料 7自立袋 8 其他)
printingParams  String  true  印刷参数{包括：封边信息，单元宽度与高度}
makingDate  Integer true  制作时长
makingType  Integer true  时长类型1小时 2天数
fileInfo  String  true  [{"format":"jpg","size":23,"path":"测试连接"}]
taskNo  String  True  看样编号
factoryIds  String  True  厂房信息【格式用英文逗号隔开】
 -->
