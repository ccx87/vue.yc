<template>
  <div class="creat-order-base-info">
    <bar-title title-name="基本信息" :styleObj="styleObj"></bar-title>
    <div class="cobi-center">
      <div style="margin-bottom:20px"><h4 class="dib c-title">订单编号</h4><p class="p-line c-title" style="margin:4px 10px; display:inline-block">{{ taskNo }}</p></div>
      <div><h4 class="dib c-title">印刷类型</h4><p class="p-line c-title" style="margin:4px 10px; display:inline-block">凹印</p></div>
      <div style="display:flex">
        
      </div>
      <h4 class="dib c-title">产品名称<input v-model='orderInfo.name' type="text" style="width:800px; margin-left:20px" /></h4>
      <h4 class="c-title" style="margin:10px 0px">订单描述</h4>
      <p class="p-line"><textarea v-model='orderInfo.remark' class="textarea"></textarea></p>
      <!-- <div class="div-line" flex="main:left cross:center">
         <div id="uploadFiles">+添加附件</div>
         <p class="p-sp">最多可添加<span class="col-lan">x</span>个附件，每个大小不超过<span class="col-lan">xx</span>M.</p>
         <a class="col-lan">上传遇到问题？</a>
      </div> -->
      <!-- <div class="file-list">
         <div class="file-item" flex="cross:center box:last">
            <div class="file-name" flex="cross:center"><i class="icons icons-file"></i>印刷盒子样稿.psd</div>
            <div class="file-statu" flex="cross:center">
              <span>上传成功！</span>
              <a class="icons icons-del"></a>
            </div>
         </div>
         <div class="file-item" flex="cross:center box:last">
            <div class="file-name" flex="cross:center"><i class="icons icons-file"></i>印刷盒子样稿.psd</div>
            <div class="file-statu" flex="cross:center">
              <span>上传进度98%</span>
              <a class="icons icons-del"></a>
            </div>
         </div>
         <div class="file-item" flex="cross:center box:last">
            <div class="file-name" flex="cross:center"><i class="icons icons-file"></i>印刷盒子样稿.psd</div>
            <div class="file-statu" flex="cross:center">
              <span>等待上传</span>
              <a class="icons icons-del"></a>
            </div>
         </div>
         <div class="file-item" flex="cross:center box:last">
            <div class="file-name" flex="cross:center"><i class="icons icons-file"></i>印刷盒子样稿.psd</div>
            <div class="file-statu" flex="cross:center">
              <span>等待上传</span>
              <a class="icons icons-del"></a>
            </div>
         </div>
         <div class="file-item" flex="cross:center box:last">
            <div class="file-name" flex="cross:center"><i class="icons icons-file"></i>印刷盒子样稿.psd</div>
            <div class="file-statu" flex="cross:center">
              <span>等待上传</span>
              <a class="icons icons-del"></a>
            </div>
         </div>                                    
      </div> -->
      <div style="margin:0px 0px 20px">
        <el-upload
          class="upload"
          action= 'http://192.168.2.31:8080/zhaoyinqian_file/prepress/uploadTaskFile'
          :data = "userObj"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :on-error = "onError"
          :on-success = "onSuccess">
          <el-button size="small" type="primary">图片上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传图片文件，且不超过1M</div>
        </el-upload>
      </div>
      <h4 class="c-title">交付文件格式</h4>
      <el-tag class='tag-button'>PDF</el-tag>
      <h4 class="c-title">印前处理公司</h4>
      <div class="file-type">
        <button class="btn-fact" @click="select(index)"  v-for="(item, index) in factoryList" :class="{'btn-select':curFactIndex==index, 'btn-normal':curFactIndex!=index}">{{item.name}}
        </button>
      </div> 
    </div>
  </div>
</template>

<script>
import barTitle from '../../components/common/barTitle.vue';
import { UPLOAD_IMAGE_URL, GET_TASK_NUMBER } from '../../store/constant.js'
import {getStore, setStore} from '../../Utils/mUtils.js'
import axios from 'axios'

export default {
  props:['factoryList'],
  components: {
    'bar-title': barTitle
  },
  data() {
    return {
      styleObj: {
        "border-bottom": "none" 
      },
      orderInfo:{
        taskNo:'',
        name:'',
        remark:'',
        format:'PDF',
        fileInfo:[],
        factoryId:[]
      },
      fileList: [],
      userObj:{
        'userId':'',
        'time':''
      },
      curFactIndex:-1,
      taskNo:''
    }
  },
  methods:{
    select(index){
      var factoryItem = this.factoryList[index]
      this.curFactIndex = index
      this.orderInfo.factoryId = []
      this.orderInfo.factoryId.push(factoryItem.id)
      console.log('factoryId' + this.orderInfo.factoryId)
      this.$emit('orderInfo',this.orderInfo)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //上传图片失败
    onError(err, file, fileList){
      console.log('err' + err)
    },
    //上传图片成功
    onSuccess(response, file, fileList){
      console.log('success' + JSON.stringify(response))
      var errorCode = response.errorCode
      if (errorCode==0) {//成功
        var imgUrl = response.data
        if (imgUrl) {
          var picItem = {'format':'','size':'','path':''}
          picItem.format = 'png'
          picItem.size = 100
          picItem.path = imgUrl
          this.orderInfo.fileInfo.push(picItem)
          this.$emit('orderInfo',this.orderInfo)
        }
      }
    },

     //获取订单编号
    getTaskNumber(){
      var userInfo = getStore('userInfo')
      if (userInfo) {
        var _this = this 
        axios({
          method: 'post',
            url: GET_TASK_NUMBER,
            params: {
              userId:getStore('userInfo').id,
            }
        })
        .then(function (response) {
          console.log(response);
          if (response.data.success == false) { 
            alert(response.data.error)
            return
          }
          _this.taskNo = response.data.data.taskNo
          _this.orderInfo.taskNo = _this.taskNo
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    }
  },
  watch:{
    ['orderInfo.remark'](val){
      this.$emit('orderInfo',this.orderInfo)
    },
    ['orderInfo.name'](val){
      this.$emit('orderInfo',this.orderInfo)
    }
  },
  created(){
    var userInfo =  getStore('userInfo')
    if (userInfo) {
      this.userObj.userId = userInfo.id
    }
    this.userObj.time = Date.parse(new Date())
  },
  mounted(){
    this.getTaskNumber()
  }
}
</script>

<style>
  .creat-order-base-info {
    padding: 0 10px;
    margin-bottom: 10px;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    background: #FFF;
    overflow: hidden;
  }  
  .cobi-center {
    width: 920px;
    padding: 10px;
  }
  .cobi-center a {
    cursor: pointer;
  }
  .cobi-center .col-lan {
    color: #41B8F0;
    margin: 0 5px;
  }
  .cobi-center .c-title {
    color: #666;
    font-size: 12px;
  }
  .cobi-center .p-line {
    margin: 0;
  }
  .cobi-center .input {
    width: 900px;
  }
  .cobi-center .textarea {
    width: 900px;
    height: 150px;
    padding-top: 5px;
    padding-bottom: 5px;
    resize: none; 
  }
  #uploadFiles {
    width: 100px;
    height: 32px;
    line-height: 30px;
    color: #41B8F0;
    text-align: center;
    border: 1px solid #41B8F0;
    cursor: pointer;
  }
  .tag-button{
    margin: 10px auto;
    background: #41B8F0;
  }
  .div-line .p-sp {
    margin: 0 10px;
  }
  .file-list {
    margin: 10px 0 20px 0;
  }
  .file-item {
    display: inline-block/9/0;
    width: 100%;
    height: 32px;
    margin-bottom: 7px;
    color: #666;
    font-size: 12px;
    background: #E5F5FD;
  }
  .file-item .icons {
    margin: 0 10px; 
  }
  .file-item .file-statu,
  .file-item .file-name {
    height: 32px;
  }
  .icons-file {
    background-position: 0 -80px; 
  }
  .icons-del {
    background-position: 0 -100px;
  }
  .icons-del:hover {
    background-position: 0 -120px;
  } 
  .file-type {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .file-type .btn {
    width: 74px;
    height: 34px;
    margin-right: 20px;
    color: #41B8F0;
    text-align: center;
    font-size: 14px;
    border: 1px solid #41B8F0;
    background: #FFF;
  } 
  .file-type .btn.active {
    color: #FFF;
    background: #41B8F0;
  }
  .btn-select{
    background: #41B8F0;
    color: #FFF;
  }
  .btn-fact{
    font-size: 12px;
    border: 1px solid #41B8F0;
    border-radius: 3px;
    margin: 5px 10px 5px 0px;
  }
  .btn-normal{
    color: #41B8F0;
    background: #FFF;
  }
</style>
