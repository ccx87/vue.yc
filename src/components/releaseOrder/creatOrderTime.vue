<template>
  <div class="creat-order-time">
    <bar-title title-name="制作时长"></bar-title>
    <div class="cot-center">
       <div class="cot-top" flex="main:left cross:center">
          按小时：<label class="line-lab"><input class="input" v-model='timeObj.hoursTime' value="0"/><i class="icons icons-more"></i></label><span>小时</span>
          <span class="sp-line">或</span>
          按天：<label class="line-lab"><input  v-model='timeObj.dayTime' class="input"value="0"/><i class="icons icons-more"></i></label><span>天</span>
       </div>
       <div class="cot-bottom" flex="main:left cross:center">
          <div class="time-item item-1" flex="main:left cross:center">
            <div class="item-text"><p>当前时间</p><p>{{curTime}}</p></div>
            <div class="item-step"></div> 
          </div>
          <div class="time-item item-2" flex="main:left cross:center">
            <div class="item-text it-1">12小时</div>
            <div class="item-step"></div> 
            <div class="item-text it-2">等待接单</div>
          </div>
          <div class="time-item item-3" flex="main:left cross:center">
            <div class="item-step"></div>
            <div class="item-text">确认接单</div> 
          </div>
          <div class="time-item item-4" flex="main:left cross:center">
            <div class="item-text it-1 col-step">{{needTime}}</div>
            <div class="item-step"></div> 
            <div class="item-text it-2">制作时长</div>
          </div>
          <div class="time-item item-5" flex="main:left cross:center">
            <div class="item-step"></div>
            <div class="item-text"><p>任务在<span class="col-step">2017-11-30</span></p><p>之前完成</p></div> 
          </div>                                         
       </div>
    </div>
  </div>
</template>

<script>
import barTitle from '../../components/common/barTitle.vue';

export default {
  components: {
    'bar-title': barTitle
  },
  data() {
    return {
      styleObj: {
        "border-bottom": "none" 
      },
      timeObj:{
        hoursTime:0,
        dayTime:0,
      },
      curTime:'',
      completeTime:'',
      needTime:'0小时'
    }
  },
  methods:{
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes();
        return currentdate;
    }
  },
  watch:{
    ['timeObj.hoursTime'](val){
      this.curTime = this.getNowFormatDate()
      // this.completeTime = 
      this.timeObj.dayTime = 0
      this.needTime = val+ '小时'
      this.$emit('timeObj',this.timeObj)
    },
    ['timeObj.dayTime'](val){
      this.curTime = this.getNowFormatDate()
      this.timeObj.hoursTime = 0
      this.needTime = val+ '天'
      this.$emit('timeObj',this.timeObj)
    },
  }
}
</script>

<style>
  .creat-order-time {
    padding: 0 10px;
    margin-bottom: 10px;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    background: #FFF;
    overflow: hidden;
    font-family: "微软雅黑";
  }  
  .cot-center {
    width: 920px;
    padding: 10px;
  }
  .cot-center .cot-top {
    color: #666;
  }
  .cot-center .cot-top .line-lab {
    width: 115px;
    height: 36px;
    border: 1px solid #E1E1E1;
    position: relative;
  }
  .cot-center .cot-top .line-lab .input {
    width: 113px;
    height: 34px;
    border: none;
    text-indent: 10px;
  }
  .cot-center .cot-top .sp-line {
    color: #999;
    margin: 0 20px;
  }
  .cot-center .cot-top .icons-more {
    position: absolute;
    top: 6px;
    right: 0px;
    background-position: -20px -140px;
  }
  .cot-center .cot-bottom {
    margin: 20px 0;
  }
  .time-item {
    position: relative;
  }
  .item-1 .item-text {
    text-align: right;
  }
  .item-1 .item-step {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #FFB400;
    margin-left: 10px;
  }
  .item-2 .item-step, 
  .item-4 .item-step {
    width: 200px;
    height: 3px;
    background: #FFB400;
  }
  .item-2 .item-text ,
  .item-4 .item-text {
    position: absolute;
    color: #999
  }
  .item-2 .item-text.it-1,
  .item-4 .item-text.it-1 {
    left: 80px;
    top: -25px;    
  }
  .item-2 .item-text.it-2,
  .item-4 .item-text.it-2 {
    bottom: -25px;
    left: 73px;    
  }  
  .item-3 .item-step {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #FFB400;
  }  
  .item-3 .item-text {
    position: absolute;
    bottom: -25px;
    right: -18px;
    width: 57px;
    color: #999
  }
  .cot-center .col-step {
    color: #FFB400;
  }
  .item-5 .item-step {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #FFB400;
    margin-right: 10px;
  }  
</style>
