<template>
<div class='g-assign'>
    <bar-top bgColor='green'></bar-top>
    <creat-order-step></creat-order-step> 
    <div class="assign-main">
        <nav flex="main:left cross:center" class="nav-tab">
          <span class="tit">当前位置：</span>
          <a class="old nav-item">订单管理</a>
          <i class="i-line">></i>
          <a class="new nav-item">大米礼盒包装印刷</a>
        </nav>
        <div class="assign-content" flex="main:justify">
          <div class="ac-left">
            <bar-title title-name="印前推荐"></bar-title>
            <div class="ac-search">
               <div class="ac-s-item" flex="main:justify cross:center">
                  <div class="div-item" flex="main:center cross:center">
                      <span class="tit">印前归属公司</span>
                      <label class="bor-lab" flex="cross:center">
                          <input class="input" placeholder="请输入归属如：上海一厂，进度搜索"/>
                          <a class="sch-send" flex="main:center cross:center">
                            <i class="icons icons-sch"></i>
                          </a>
                      </label>
                  </div>
                  <div class="div-item" flex="main:center cross:center">
                      <span class="tit">印前名称</span>
                      <label class="bor-lab" flex="cross:center">
                          <input class="input" placeholder="请输入归属如：上海一厂，进度搜索"/>
                          <a class="sch-send" flex="main:center cross:center">
                             <i class="icons icons-sch"></i>
                          </a>
                      </label>
                  </div>
               </div>
               <div class="ac-s-item" flex="main:left cross:center">
                  <div class="div-item" flex="main:center cross:center">
                    <span class="tit">印前工作负荷</span>
                    <button class="button all-btn active">全部</button>
                    <button class="button easy-btn">轻松</button>
                    <button class="button ord-btn">普通</button>
                    <button class="button busy-btn">繁忙</button>
                  </div>
                  <div class="div-item disc-txt" flex="main:center cross:center">
                    <span class="tit">线框颜色说明：</span>
                    <span class="br-col-easy"><i></i>轻松</span>
                    <span class="br-col-ord"><i></i>普通</span>
                    <span class="br-col-busy"><i></i>繁忙</span>
                  </div>                  
               </div>                
            </div>
            <div class="ac-list" flex="main:justify cross:center">
               <div class="list-item" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item busy" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item ord" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>
               <div class="list-item" flex="dir:top">
                 <div class="li-1" flex="main:justify cross:enter">
                   <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                   <div class="u-info">
                     <p class="u-name">白云</p>
                     <p class="u-lv col-lan">LV1</p>
                     <p class="u-attr">上海一厂</p>
                   </div>
                 </div>
                 <div class="li-2">手上任务：<span class="col-lan">1</span></div>
                 <div class="li-3">历史接单：<span class="col-lan">12</span></div>
                 <div class="li-4" flex="main:justify">
                   <button class="button link-btn">联系TA</button>
                   <button class="button assign-btn">分配给TA</button>
                 </div>
               </div>                                                                                          
            </div>
            <div class="block txt-right page">
              <el-pagination
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>            
          </div> 
          <div class="ac-right">
            <div class="ac-r-item">
               <bar-title title-name="订单进度" :styleObj="styleTitleObj"></bar-title>
               <p class="progress-disc">工艺审核完成，正在派发印前</p>
               <div class="order-div">
                  <button class="button order-btn">提交稿件</button>
               </div>
               <div class="time-line" flex="main:justify cross:center">
                  <span>订单时间轴</span>
                  <a class="tl-btn">展开</a> 
               </div>
               <div class="sub-time-line">
                  
               </div>
            </div>
            <div class="ac-r-item">
                <bar-title title-name="客户信息" :styleObj="styleTitleObj"></bar-title>
                <div class="li-1" flex="main:justify cross:enter">
                    <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                    <div class="u-info">
                        <p class="u-name">白云</p>
                        <p class="u-lv col-lan">LV1</p>
                    </div>
                </div>
                <div class="li-2" flex="main:justify">
                    <button class="button link-btn">联系客户</button>
                </div>               
            </div>
            <div class="ac-r-item">
               <bar-title title-name="工艺师信息" :styleObj="styleTitleObj"></bar-title>
                <div class="li-1" flex="main:justify cross:enter">
                    <img clss="u-img" src="../../images/ass-1.png" alt="photo"/> 
                    <div class="u-info">
                        <p class="u-name">白云</p>
                        <p class="u-lv col-lan">LV1</p>
                    </div>
                </div>
                <div class="li-2" flex="main:justify">
                    <button class="button link-btn">联系工艺师</button>
                </div>                
            </div>                         
          </div>          
        </div>
    </div>
    <bar-bottom :styleObj="styleObj" class='bottom'></bar-bottom>
</div>
</template>

<script>

import barTop from '../../components/common/barTop.vue';
import barBottom from '../../components/common/barBottom.vue';
import creatOrderStep from '../../components/releaseOrder/creatOrderStep.vue';
import barTitle from '../../components/common/barTitle.vue';

export default {
    name: 'login',
    data () {
        return {
          styleObj: {
            background: '#485E7C',
            color: '#FFF'
          },
          styleTitleObj: {
            "border-bottom": "none" 
          }         
        }
    },
    methods:{
    },
    components: {
        barTop,
        barBottom,
        creatOrderStep,
        barTitle
    },
    computed:{
        currentStep(){
            return  this.$store.state.loginState
        }
    }
}
</script>


<style type="text/css" scoped>
  .txt-right {
    text-align: right;
  }
  .g-assign {
    background: #F5F5F5; 
  }
  .assign-main {
    width: 1185px;
    margin: 0 auto;
  }
  .assign-main .nav-tab {
    padding: 10px 0; 
    font-size: 12px;
  }
  .assign-main .nav-tab .tit {
    font-weight: 700;
    color: #666; 
  }
  .assign-main .nav-tab .old {
    color: #666; 
  }
  .assign-main .nav-tab .new {
    color: #41B8F0; 
  }    
  .assign-main .nav-tab .i-line {
    font-style: normal;
    margin: 0 8px;
  } 
  .assign-content {
    /*height: calc(100% - 36px);*/
  }
  .assign-content .g-title {
    padding: 0;
  }
  .assign-content .ac-left {
    width: 900px;
    height: 100%;
    background: #FFF;
    padding: 10px 20px;
  }
  .assign-content .ac-right {
    flex: 0 0 auto;
    width: 260px;
    height: 100%;
  }
  .ac-search {
    padding-bottom: 10px;
    border-bottom: 1px solid #E1E1E1;
  } 
  .ac-search .bor-lab {
     width: 340px;
     height: 36px;
     border: 1px solid #E1E1E1;
  } 
  .ac-search .ac-s-item {
     color: #666;
     margin-top: 10px;
  }
  .ac-search .tit {
     margin-right: 10px;
  }
  .ac-search .bor-lab .input {
     border: none;
     height: 34px;
     width: 100%;
     color: #999;
     font-size: 12px;
     text-indent: 10px;
  }
  .ac-search .div-item {
    flex: 0 0 auto;
  }
  .ac-search .disc-txt {
    margin-left: 15px;
  }
  .ac-search .bor-lab .sch-send {
    width: 30px;
    height: 34px;
  }
  .ac-search .bor-lab .icons-sch {
    background-position: 0 -180px;
  }
  .ac-search .button {
    width: 70px;
    height: 30px;
    background: #E5E5E5;
    color: #666;
    font-size: 14px;
    margin-right: 10px;
  }
  .ac-search .button.active {
    background: #41B8F0;
    color: #FFF;
  }
  .ac-search .disc-txt .tit {
    margin-right: 0 !important;
  }
  .ac-search .disc-txt .tit {
    margin-right: 10px;
  }
  .ac-search .disc-txt i{
    width: 7px;
    height: 7px;
    display: inline-block;
    margin: 0 8px;
  }
  .ac-search .br-col-easy i {
    background: #89C997;
    margin-left: 0;
  }
  .ac-search .br-col-ord i {
    background: #E1E1E1;    
  }
  .ac-search .br-col-busy i {
    background: #CD3D3D;
  }
  .ac-list {
    flex-wrap: wrap;
    padding: 10px 0; 
    position: relative;
    font-family: "微软雅黑";
  } 
  .ac-list .list-item {
    width: 280px;
    height: 220px;
    border: 1px solid #89C997;
    padding: 20px;
    color: #666;
    margin-bottom: 10px;
  }   
  .ac-list .list-item.busy {
    border-color: #CD3D3D;
  }
  .ac-list .list-item.ord {
    border-color: #E5E5E5;
  }  
  .assign-main .col-lan {
    color: #41B8F0;
  }
  .assign-main .u-info {
    flex: 1 1 auto;
    padding-left: 10px;
  }
  .assign-main .u-info > p {
    margin-bottom: 5px;
  }
  .assign-main .u-name {
    font-weight: 700;
  }
  .assign-main .li-1,
  .assign-main .li-3 {
    margin-bottom: 10px;
  }
  .assign-main .li-2 {
    margin-bottom: 5px;
  }
  .ac-list .list-item .button {
    width: 110px;
    height: 30px;
    border: 1px solid #E1E1E1;
    font-size: 13px;
    font-family: "微软雅黑";
  }
  .assign-main .link-btn:before {
    content: "";
    width: 20px;
    height: 20px;
    vertical-align: bottom;
    display: inline-block;
    margin-right: 5px;
    background: url("../../images/icons.png");
    background-repeat: no-repeat;
    background-position: 0 -141px;
  }
  .ac-list .list-item .assign-btn:before {
    content: "";
    width: 20px;
    height: 20px;
    vertical-align: bottom;
    display: inline-block;
    margin-right: 5px;
    background: url("../../images/icons.png");
    background-repeat: no-repeat;
    background-position: 0 -161px;
  }  
  .ac-list .list-item .assign-btn {
    border-color: #41B8F0;
    color: #41B8F0;
  }
  .ac-r-item {
    font-family: "微软雅黑";
    background: #FFF;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .ac-r-item .progress-disc {
    font-size: 14px; 
    padding: 5px 20px;
  }
  .ac-r-item .time-line {
    margin: 10px;
    height: 42px;
    background: #EEE;
    padding: 0 10px;
    color: #666;
  }
  .ac-r-item .time-line .tl-btn {
    font-size: 12px;
    cursor: pointer;
  }
  .ac-r-item .li-1 {
    padding: 0 20px;
    margin-top: 10px;
  }
  .ac-r-item .li-2 {
    padding: 10px 20px 5px 20px;
  }  
  .ac-r-item .link-btn {
    width: 100%;
    height: 30px;
    border: 1px solid #E1E1E1;
    font-size: 13px;
    color: #666;    
  }
  .order-div {
    padding: 0 10px;
    margin: 10px 10px 20px 10px; 
  }
  .order-div .order-btn {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 48px;
    color: #FFF;
    background: #46BE8A;
    font-weight: 700;
    font-size: 14px;
  }
  .g-assign .page {
    margin-bottom: 50px;
  }
</style>