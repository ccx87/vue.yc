<template>
  <div class="g-title" flex="mian:left cross:center" :style="styleObj">
    <s></s><span>{{titleName}}</span>
  </div>
</template>

<script>
export default {
  props: [
    'titleName',
    'styleObj'
  ],
  data() {
     return {}
  }  
}
</script>

<style> 
  .g-title {
    height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #E1E1E1;
    color: #333;
    font-weight: 700;
  }
  .g-title > s {
    height: 20px;
    margin-right: 10px;
    border-left: 2px solid #41B8F0; 
  }

</style>
