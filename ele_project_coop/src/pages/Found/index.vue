<template>
    <div class="goldCoinContainer">
    <!-- 头部区域 -->
    <a class="header">
      <!--左侧金币 -->
      <div class="goldCoin" @click="gorecommend">
        <p class="title">金币商城</p>
        <p class="tips">0元好物在这里</p>
        <img class="icon" src="./image/1.webp">
      </div>
      <!-- 右侧推荐和优惠 -->
      <div class="right">
        <!-- 上面推荐 -->
        <div class="recommend" @click="gorecommendation">
          <p class="title">推荐有奖</p>
          <p class="tips">20元现金拿不停</p>
          <img class="icon" src="./image/2.webp" alt="">
        </div>
        <!-- 下面优惠 -->
        <div class="discount" @click="goperiphery">
          <p class="title">周边优惠</p>
          <p class="tips">领取口碑好券</p>
          <img class="icon" src="./image/3.webp" alt="">
        </div>
      </div>
    </a>
    <div class="main">
      <!-- 限时好礼 -->
      <div class="ceremony" @click="gorecommend">
        <span class="left"></span>
        <van-icon class="icon" name="underway-o" />
        <p class="title">限时好礼</p>
        <span class="right"></span>
      </div>
      <p class="tips">金币换豪礼</p>
      <!-- 轮播图 -->
      <div class="gutter">
        <div class="grid-content">
          <img src="data:image/jpeg;base64,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" alt="">  
          <p class="title">PS4抽奖</p>
          <div class="pirce">
            <span class="coin">200金币</span>
            <s class="original">￥2299</s>
          </div>
        </div>
          <div class="grid-content">
          <img src="data:image/jpeg;base64,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" alt="">  
          <p class="title">JBL耳机抽奖</p>
          <div class="pirce">
            <span class="coin">200金币</span>
            <s class="original">￥599</s>
          </div>
        </div>
          <div class="grid-content">
          <img src="data:image/jpeg;base64,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" alt="">  
          <p class="title spill">Beats头戴式耳机抽奖</p>
          <div class="pirce">
            <span class="coin">150金币</span>
            <s class="original">￥759</s>
          </div>
        </div>
      </div>
      <!-- 查看更多 -->
      <p class="activity-more" @click="gorecommend">查看更多 > </p>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'Found',
  data(){
    return {

    }
  },
  methods:{
    //去金币商城
    gorecommend(){
      this.$router.push({
        path:'/found/recommend'
      })
    },
    // 去推荐有奖
    gorecommendation(){
      this.$router.push({
        path:'/found/recommendation'
      })
    },
    // 去周边优惠
    goperiphery(){
      this.$router.push({
        path:'/found/periphery'
      })
    } 
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
.goldCoinContainer
  height calc(100vh)
  background #f5f5f5
  .header
    display flex
    height 320px
    width 100%
    box-sizing border-box
    background #FFF
    .title
        font-size 32px
        color #FF9900
        padding-bottom 12px
    .tips
        font-size 24px
        color #999
    .goldCoin
      position relative
      width 50%
      height 100%
      border-right 1px solid #ededed
      box-sizing border-box
      padding 40px    
      .icon
        position absolute
        bottom 15px
        right 20px
        float right
        width 150px 
        height 150px

    .right
      width 50%
      height 100%
      .recommend
        box-sizing border-box
        height 160px
        position relative
        padding 40px
        border-bottom 1px solid #ededed  
        .title
          color #1BA9E1
        .icon
          position absolute
          right 30px 
          top 30px 
          float right
          width 90px 
          height 90px
      .discount
        box-sizing border-box
        height 80px
        position relative
        padding 40px
        .title
          color #ED6660
        .icon
          position absolute
          right 30px 
          top 30px 
          float right
          width 90px 
          height 90px  
.main
  margin-top 20px
  background #fff
  .ceremony
    box-sizing border-box
    width 100%
    height 82px
    display flex
    padding 35px 35px 0 35px
    justify-content center
    .left
      position relative
      top 22px
      right 16px
      width 30px
      height 2px 
      background black 
      &:after
        content ''
        position absolute
        right -10px
        top -2px
        width 10px
        height 10px
        border-radius 50%
        background black
    .right
      position relative
      top 22px
      left 16px
      width 30px
      height 2px 
      background black 
      &:after
        content ''
        position absolute
        left -10px
        top -2px
        width 10px
        height 10px
        border-radius 50%
        background black    
    .icon
      color red
      font-size 40px
      margin 0 5px 25px 0
    .title
      font-size 36px
      font-weight 700
      line-height 40px
  .tips
    font-size 18px
    text-align center
    color #999
    margin-bottom 30px
  .gutter
    display flex
    height 380px
    margin-bottom 30px
    padding-left 30px    
    .grid-content 
      border-radius: 4px;
      width 220px
      height 240px
      margin-right 16px
      img
        width 100%
        height 100%
      .title
        font-size 24
        font-size 24px
        margin 20px 0
        color #333   
      .pirce
        display flex
        height 48px
        .coin
          font-size 14px 
          color #FF5339
        .original
          font-size 24px
          color #999
          margin-left 5px
      .spill
        overflow hidden
        white-space nowrap 
        text-overflow ellipsis
  .activity-more
    font-size 28px
    color #999
    height 67px
    line-height 67px
    text-align center        
</style>
