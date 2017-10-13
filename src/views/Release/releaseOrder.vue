<template>
  <div class="g-release-order">
    <bar-top :showUserCenter='true'></bar-top>
    <router-view></router-view>
    <bar-bottom :styleObj="styleObj"></bar-bottom>
    <alert></alert>
  </div>
</template>

<script>
import barTop from '../../components/common/barTop.vue';
import barBottom from '../../components/common/barBottom.vue';
import alert from '../../components/common/alert.vue';

export default {
  components: {
    'bar-top': barTop,
    'bar-bottom': barBottom,
    'alert': alert
  },
  data() {
    return {
      styleObj: {
        background: '#485E7C',
        color: '#FFF'
      }
    }
  },
  methods:{

  }
}
</script>

<style>
  .g-release-order {
    height: 100%;
  }
</style>

