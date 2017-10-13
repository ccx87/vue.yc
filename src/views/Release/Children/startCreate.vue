<template>
  <div class="ro-center">
    <div class="start-creat" flex="dir:top main:center cross:center">
      <p class="sc-title">欢迎使用找印前（印城版）！</p> 
      <div class="sc-center">
        <div class='c-item' flex="dir:top main:center cross:center">
          <img src="../../../images/ao-yin.png" class="c-img" alt="凹印" />
          <b class="c-text">凹印</b>
          <div class='c-info'>
             凹版印刷是图像从表面上雕刻凹下的制版技术。一般说来，采用铜或锌板作为雕刻的表面，凹下的部分可利用腐蚀、雕刻、铜版画或mezzotint金属版制版法。Collographs可能按照凹印版印刷。
          </div>
        </div>
      </div>
      <div class="sc-bottom">
        <router-link class="btn creat-btn" to="/releaseOrder/creatOrder">开始创建</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return{

    }
  },
  methods:{
 
  }
}
</script>

<style>
  .ro-center {
    width: 100%;
    height: calc(100% - 90px);
    background: #F5F5F5;
    overflow: hidden;
  }  
   .start-creat {
    width: 610px;
    height: 425px;
    margin: 0 auto;
    overflow: hidden;
  }  
  .sc-title {
    color: #333;
    margin-bottom: 20px;
    font: 24px/25px '';
  }
  .sc-center {
    width: 600px;
    height: 300px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 9.6px 0.4px rgba(0, 193, 222, 0.3);    
  }
  .c-img {
    width: 167px;
    height: 130px;
  }
  .sc-center .c-item {
    width: 470px;
    height: 300px;
    margin: 0 auto;
  }
  .sc-center .c-text {
    margin: 10px 0;
  }
  .sc-center .c-info {
    line-height: 25px;
    color: #666;
    font-size: 12px;
  }
  .sc-bottom {
    margin-top: 25px; 
  }
  .sc-bottom .btn {
    padding: 10px 30px 10px;
    background: #41B8F0;
    border-color: #41B8F0;
    border-radius: 0px;
    color: #FFF;
    font-size: 14px;
  }
</style>