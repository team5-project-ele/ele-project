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
  export default{
    name:'Recommendation'
  }
</script>
<style lang="stylus">
*
  margin 0
  padding 0
  .recommendationContainer
    height 1370px
    width 100%
    background rgb(249, 53, 93)
    .recommendationImg
      width 100%
      height 850px
      img 
        width 100%
        height 100%
</style>