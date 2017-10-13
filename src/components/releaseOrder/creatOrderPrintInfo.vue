<template>
  <div class="creat-order-print-info">
    <bar-title title-name="印刷信息" :styleObj="styleObj"></bar-title>
    <div class="copi-center">
      <div class="div-line" flex="cross:center">
        <div class="line-item" flex="dir:top main:left cross:center">
          <h4 class="c-title">单元宽度</h4>
          <p class="p-line"><input v-model='printInfo.printingParams.width' type="text" class="input default1" /><i class="i-mm">mm</i></p>
        </div>
        <div class="line-item" flex="dir:top main:left cross:center">
          <a class="icons icons-link" @click='sizeConstant'></a> 
        </div>        
        <div class="line-item" flex="dir:top main:left cross:center">
          <h4 class="c-title">单元高度</h4>
          <p class="p-line"><input v-model='printInfo.printingParams.height' type="text" class="input default1" /><i class="i-mm">mm</i></p>
        </div>       
      </div>
      <h4 class="c-title">袋型</h4>
      <div class="bag-type" flex="main:left cross:center">
        <div class="bt-item" :class="{'bagSelect':curBagIndex == index}" v-for="(item, index) in bags">
          <a class="bt-img" @click="typeSelect(index)" target="_black" flex="main:center cross:center">
            <img :src='item.img' alt="bag type"/>
          </a> 
          <p>{{item.name}}</p>
        </div>
        <div class="bt-item">
          <a class="bt-img" @click="typeSelect(-1)" target="_black" flex="main:center cross:center">
            <h2>其它</h2>
          </a> 
          <p>其它袋型</p>
        </div>                                  
      </div>
      <h4 class="c-title">封边</h4>
      <div class="eage-info" flex="cross:center">
        <div class="line-item" flex="dir:top main:center cross:center">
          <p class="p-line">上封边<input v-model='printInfo.printingParams.edgeUp' type="text" class="input default2" /><i class="i-mm">mm</i></p>
          <p class="p-line">左封边<input v-model='printInfo.printingParams.edgeLeft' type="text" class="input default2" /><i class="i-mm">mm</i></p>
        </div>
        <div class="line-item" flex="dir:top main:center cross:center">
          <a class="icons icons-link"></a> 
        </div>        
        <div class="line-item" flex="dir:top main:center cross:center">
          <p class="p-line">右封边<input v-model='printInfo.printingParams.edgeRight' type="text" class="input default2" /><i class="i-mm">mm</i></p>
          <p class="p-line">下封边<input v-model='printInfo.printingParams.edgeUnder' type="text" class="input default2" /><i class="i-mm">mm</i></p>
        </div>
        <div class="line-item last" flex="dir:top main:center cross:center">
          <p v-if = "curBags =='枕型袋' " class="p-line">侧封边<input v-model='printInfo.printingParams.edgeSide' type="text" class="input default2" /><i class="i-mm">mm</i></p>
        </div>                 
      </div>      
    </div>
  </div>
</template>

<script>
import barTitle from '../../components/common/barTitle.vue';
import axios from 'axios'


export default {
  components: {
    'bar-title': barTitle
  },
  data() {
    return {
      styleObj: {
        "border-bottom": "none" 
      },
      printInfo:{
        packagingType:-1,
        printingParams:{
          edgeUp:'',
          edgeUnder:'',
          edgeLeft:'',
          edgeRight:'',
          edgeSide:'',
          width:'',
          height:'',
        }, 
      },
      curBagIndex:-1,
      curBags:'',
      bags:[{'name':'自立袋','id':7,'img':require('../../images/stand.png')},
            {'name':'四封袋','id':2,'img':require('../../images/all-rounds.png')},
            {'name':'立体袋','id':1,'img':require('../../images/3D.png')},
            {'name':'枕型袋','id':4,'img':require('../../images/pillow.png')},
            {'name':'简料','id':6,'img':require('../../images/simple.png')},
            {'name':'单片','id':5,'img':require('../../images/sigle-pice.png')},
            {'name':'背封袋','id':3,'img':require('../../images/back-close.png')}],
      
    }
  },

  methods:{
    typeSelect(index){
      this.curBagIndex = index
      if (index ==-1) {
        //其他
        this.curBags = '其他'
        this.printInfo.packagingType = 8
      }
      else{
        var item = this.bags[index]
        this.curBags = item.name
        this.printInfo.packagingType = item.id 
      }
      this.$emit('orderPrint',this.printInfo)
    },
    sizeConstant(){

    },
    borderConstant(){

    },
   
  },
  mounted(){

  },
  watch:{
     ['printInfo.printingParamswidth'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.height'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.packagingType'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.edgeUp'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.edgeUnder'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.edgeLeft'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.edgeRight'](val){
      this.$emit('orderPrint',this.printInfo)
    },
     ['printInfo.printingParams.edgeSide'](val){
      this.$emit('orderPrint',this.printInfo)
    }
  }
}
</script>

<style>
  .creat-order-print-info {
    padding: 0 10px;
    margin-bottom: 10px;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    background: #FFF;
    overflow: hidden;
  }  
  .unit{
    border: none;
    height: 30px;
  }
  .copi-center {
    width: 920px;
    padding: 10px;
  }
  .copi-center a {
    cursor: pointer;
  }
  .copi-center .c-title {
    align-self: flex-start;
    color: #666;
    font-size: 12px;
    margin: 10px 0px;
  }
  .copi-center .p-line {
    position: relative;
    margin: 0;
  }
  .copi-center .input {
    width: 900px;
  }
  .copi-center .input.default1 {
    width: 410px;
  }
  .copi-center .input.default2 {
    width: 200px;
  } 
  .copi-center .icons-link {
    width: 30px;
    height: 30px;
    margin: 0 20px;    
    background-position: -60px 0;
  } 
  .bag-type, .bt-item {
    height: 150px;
    margin-right: 10px;
    padding: 5px 0;
    text-align: center;
    background: #F5F5F5;
  }
  .bag-type .bt-img {
    width: 110px;
    height: 110px;
    border: 1px solid #E1E1E1;
  } 
  .bag-type .bt-img img {
    max-width: 110px;
    max-height: 110px;
  } 
  .bag-type .bt-img h2 {
    color: #999;
  }
  .bag-type .bt-item p {
    margin: 7px 0 10px 0;
  }
  .bag-type .bt-item:hover p , .bt-item.bagSelect p{
    color: #41B8F0;
  } 
  .bag-type .bt-item:hover .bt-img,  .bt-item.bagSelect .bt-img{
    border-color: #41B8F0;
  }  
  .eage-info {
    padding-bottom: 10px;
    background: #F5F5F5;
  }
  .eage-info .p-line {
    margin-left: 10px;
  }
  .eage-info input {
    margin: 10px 10px 0 10px;
  }
  .eage-info .icons-link {
    margin: 0 5px; 
  }
  .eage-info .p-line .i-mm {
    top: 10px;
    right: 20px;
  }
  .creat-order-print-info .i-mm {
    position: absolute;
    top: 0;
    right: 10px;
    height: 35px;
    font-style: normal;
    line-height: 33px;
    font-size: 12px;    
  }
  .bagSelect{
    border-color: #41B8F0;
    color: #41B8F0;

  }
</style>
