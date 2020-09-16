<template>
  <div class="detailsContainer">
    <!-- 头部图片 价格 -->
    <div class="imgContent">
      <img :src="(xlsfirstData.imageurl)" alt="">
    </div>
    <!-- 中奖名单 -->
    <div class="prize">
      <van-icon class="icon" name="volume" />
      <span class="title">139****4542的温州用户获得PS4-抽奖,133****6942的徐州用户获得PS4-抽奖</span>
    </div>
    <!-- 价格 -->
    <div class="price">
      <div class="pricebanner">
        <h2 class="commodity">PS4</h2>
        <p class="original "><s>￥{{xlsfirstData.prize}}元</s></p>
        <div class="coin">
          <p>{{xlsfirstData.credits}}<span>{{xlsfirstData.unitName}}</span></p>
        </div>
      </div>
    </div>
    <!-- 内容介绍 -->
    <div class="main">
      <div class="explain">
        <div class="play">
          <van-icon class="icon" name="play" />
          <p class="title">详情说明：</p>
        </div>
        <!-- 商品介绍 -->
        <div class="conent" v-html="xlsfirstData.introduction">
          <h3>商品简介</h3>
        </div>
      </div>
    </div>
    <p class="sticky">*兑换项与活动和设备生产商Apple Inc.公司无关</p>
    <div class="footer">
      <button class="submit">金币不足</button>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default{
  name:'Details',
  mounted (){
    this.getXIsfirstDataActions()
    // console.log(this.xlsfirstData)
    let xlsfirstData = this
  },
  methods:{
    ...mapActions({
      getXIsfirstDataActions:'getXIsfirstDataActions'
    })
  },
  computed:{
    ...mapState({
      xlsfirstData: state => state.xIsFirstModule.xlsfirstData
    })
  }
}
</script>
<style lang="stylus">
.detailsContainer
  position relative
  height calc(100vh)
  background #f5f5f5
  .imgContent
    width 100%
    height 350px
    img
      width 100%
      height 100%
  .prize
    box-sizing border-box
    height 60px
    padding 11px 15px
    .icon
      float left
      width 35px
      height 35px
      line-height 35px
      text-align center
      border-radius 50%
      color #FFF
      background #FF6000
      margin-right 8px
    .title
      display block
      color #666
      line-height 40px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
  .price
    height 160px
    background #FFF
    .pricebanner
      position relative
      padding 35px 30px
      .commodity
        font-size 32px
        font-weight bold
        color #333
      .original
        font-size 26px
        color #999
        margin 40px 0
      .coin
        position absolute
        right 15px
        top 50px
        font-size 66px
        margin-bottom 30px
        color #FF6000
        span
          font-size 30px
          margin-left 10px
  .main
    width 100%
    height 1010px
    background #FFF
    .explain
      padding 20px
      .play
        display flex
        height 60px
        padding 10px
        box-sizing border-box
        border-bottom 1px solid #f5f5f5
        .icon
          color #999
          margin-right 5px
        .title
          color #999
    .conent
      margin-top 20px
      height 92%
      h4
        font-size 28px 
        font-weight bold
        margin 15px
      strong
        font-size 28px 
        font-weight bold
        margin 15px 0
      p
        font-size 28px
        line-height 48px
  .sticky
    margin-bottom 130px
    height 115px
    line-height 115px
    text-align center
    color #CCC
    box-shadow: 0px -2px 0px 1px #ccc inset
    background #ededed
  .footer
    position fixed
    bottom 0
    width 100%
    height 130px
    background #FFF
    .submit
      width 92%
      height 70%
      border-radius 12px
      background-color #CCC
      border none   
      margin 18px 30px
      color #FFF
      font-size 32px
      font-weight bold
</style>