// 推荐有奖页面
<template>
  <div class="recommendationContainer">
    <!-- 大图 -->
    <div class="recommendationImg">
      <img src="./image/yaoqing.png" alt="">
    </div>
    <!-- 重要通知 -->
    <div class="notice">
      <!-- <van-icon name="volume" /> -->
      <span>

      </span>
    </div>
  </div>
</template>
<script>
  // import { Icon } from 'vant'
  export default{
    name:'Recommendation',
    // components:{
    //   [Icon.name]:Icon
    // }
  }
</script>
<style lang="stylus">
*
  margin 0
  padding 0
  .recommendationContainer
    height 1200px
    width 100%
    background rgb(249, 53, 93)
    .recommendationImg
      width 100%
      height 850px
      img 
        width 100%
        height 100%
    .notice
      margin 35px auto 0
      width 94%
      height 100px
      background rgb(242,44,72)
          
</style>