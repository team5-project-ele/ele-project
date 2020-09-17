// 推荐有奖页面
<template>
  <div class="recommendationContainer">
    <!-- 大图 -->
    <div class="recommendationImg">
      <img src="./image/yaoqing.png" alt="">
    </div>
    <!-- 重要通知 -->
    <div class="notice">
      <van-icon 
        name="volume"
        class="icon" 
        size="20" 
        color="#FFF"
      />
      <span class="title">
        重要通知：8月20日起推荐有奖全新升级，邀新人下单更高奖励至10元，
        好友下单第二单以及首单为零售订单不参与返奖
      </span>
    </div>
    <!-- 中奖名单 -->
    <p class="clock"> 流沙包 已获取18元现金</p>
    <!-- 立即赚现金 -->
    <button class="btn">立即赚现金</button>
    <!-- 查看赚钱攻略 -->
    <div class="strategy">
      <van-icon name="orders-o" />
      <p class="title">查看赚钱攻略 > </p>
    </div>
    <!-- 奖励进度 -->
    <div class="reward">
      <!-- 头部 -->
      <div class="header">
        <h2 class="speed">奖励进度</h2>
        <span class="detailed">进度明细 ></span>
      </div>
      <!-- 金额 -->
      <ul class="pric">
        <li>
          <p><span class="num">0</span>元</p>
          <span class="title">待下单</span>
        </li>
        <li>
          <p><span class="num">0</span>元</p>
          <span class="title">在路上</span>
        </li>
        <li>
          <p><span class="num">0</span>元</p>
          <span class="title">已获得</span>
        </li>
        <li>
          <p><span class="num">0</span>元</p>
          <span class="title">已失效</span>
        </li>
      </ul> 
    </div>
    <!-- 可提现金额 -->
    <div class="withdrawal">
      <p class="with">可提现金额：
        <span class="num">0</span>
        <span class="wal">元</span>
      </p>
      <van-icon class="icon" name="arrow" />
    </div>
    <!-- 代理商 -->
    <div class="authentication">
      <span>
        代理商/BD实名认证 
      </span>
      <van-icon class="icon" name="arrow" />
    </div>
  </div>
</template>
<script>
  import { Icon } from 'vant'
  export default{
    name:'Recommendation',
    components:{
      [Icon.name]:Icon
    }
  }
</script>
<style lang="stylus">
*
  margin 0
  padding 0
  .recommendationContainer
    height 1779px
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
      height 110px
      line-height 35px
      background rgb(242,44,72)
      .title
        font-size 10px
        color #ffffff
      .icon
        float left
        margin 25px 10px
        text-align center
        line-height 60px
        width 60px
        height 60px
        border-radius 50%
        background rgb(230,31,41)
    .clock
      color rgba(249,230,155,.7)
      font-size 26px
      font-weight bold  
      text-align center
      line-height 60px
    .btn
      width 560px
      height 100px
      border-radius 100px
      background-color #f4d170 
      border none 
      text-align center
      margin 10px 100px 
      font-size 38px
      font-weight bold
      color rgb(86,27,4) 
    .strategy
      display flex
      font-size 32px      
      color rgb(249,230,155)
      height 120px
      justify-content center
      align-items center
      .title
        font-weight 600
        margin 0 8px
    .reward
      width 88%
      height 220px
      border-radius 10px
      margin 10px 45px
      background #FFF
      .header
        display flex
        justify-content space-between
        align-items center
        box-sizing border-box
        padding  0 32px
        width 100%
        height 80px
        border-radius 10px
        background #f9f9f9
        .speed
          font-size 30px
          font-weight 600
          color #666
        .detailed
          font-size 26px
          color #999  
      .pric
        display flex
        justify-content space-around
        align-items center
        li
          width 100px
          height 80px
          text-align center
          margin 35px 0
          p
            font-size 30px
            font-weight bold    
            color #ff5339
            margin-bottom 13px
            .num
              font-size 40px
              margin-right 3px
              font-weight bold
          .title
            color #666
    .withdrawal
      width 88%
      height 120px
      line-height 120px
      background #FFF
      border-radius 10px
      margin 30px 45px
      padding 0 25px
      box-sizing border-box
      .with
        float left
        font-size 35px
        .num
          font-size 45px
          font-weight bold
          color #ff5339
        .wal
          color #ff5339
      .icon
        font-size 40px
        color #999
        float right
        line-height 120px
    .authentication
      color rgb(249,230,155)
      text-align center
      .icon
        vertical-align bottom              
</style>