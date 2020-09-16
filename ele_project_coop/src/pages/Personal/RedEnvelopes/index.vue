<template>
  <div class="redenvelopesContainer">
    <!-- 头部 -->
    <header class="header">
      <div class="top-header">
        <van-icon @click="goback" class="iconfont-dayuhao" name="arrow-left" />
        <h1>我的优惠</h1>
        <p>兑换红包</p>
      </div>
      <ul class="tapbar">
        <li >红包 <span>0</span></li>
        <li >店铺红包<span>2</span></li>
        <li >抵用卷<span>0</span></li>
      </ul>
    </header>
    <!-- 下拉框 -->
    <main class="main">
      <div class="recommend">
        <span><img src="../../../../public/images/gift.png" alt=""></span>
        <p>推荐有奖</p>
        <div>15元现金拿不停<van-icon name="arrow" /></div>
      </div>
      <div class="no-RedEnvelopes">
        <img src="https://cube.elemecdn.com/5/51/255490294be88d8a2fbb92c5ad1bcgif.gif">
      </div>
      <ul class="bottom-text">
        <li>没有红包</li>
        <li>快去抢几个吧</li>
      </ul>
    </main>
    <footer class="footer">
      <div>
        <span>查看历史红包</span><i>|</i><span>红包说明</span>
      </div>
    </footer>
  </div>
</template>
<script>
import {icon} from 'vant'

export default {
  components:{
    [icon.name]:icon
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .redenvelopesContainer
    wdith 100%
    height 100%
    background #F5F5F5
    .header
      width 100%
      height 168px
      background-image: linear-gradient(90deg,#0af,#0085ff)
      .top-header
        width 100%
        height 88px
        display flex
        justify-content space-between
        padding 30px 15px
        padding-right 25px
        box-sizing border-box
        .iconfont-dayuhao
          width 24px
          height 39px
          font-size 40px
          color white
          line-height 35px
        h1
          font-size 36px
          color white
          font-weight bolder 
          margin-left 60px
        p
          font-size 28px
          color white
          margin-top 5px
      .tapbar
        wdith 100%
        height 40px
        display flex
        justify-content space-between
        margin-top 30px
        box-sizing border-box
        padding 0 100px
        font-size 28px
        color #AFDEFF
        li 
          position relative
          &:first-child
            border-bottom 1px solid white
            color white
          &:active
            border-bottom 1px solid white
          span 
            font-size 12px
            position absolute
            top -5px
            right -15px
    .main
      width 100%
      height 84px
      box-sizing border-box
      background none
      .recommend
        margin 0 auto
        width 698px
        height 84px
        background white
        box-shadow 3px 3px #E0E0E0
        position relative
        span 
          height 30px
          width 30px
          img
            margin-top 20px
            margin-left 30px 
            width 35px
            height 35px
        p 
          font-size 28px
          color #333333
          margin-left 80px
          margin-top -32px
        div
          position absolute
          right 0
          top 30px
          font-size 20px
      .no-RedEnvelopes    
        width 400px
        height 400px
        margin 0 auto
        margin-top 100px
        img
          text-align center
          width 100%
          height 100%
      .bottom-text
        text-align center
        width 200px
        height 200px
        margin 0 auto
        display flex
        flex-direction column
        li
          color #6a6a6a
          &:first-child
            font-size 34px
            margin-top 40px
            margin-bottom 20px
          &:last-child
            color #AAAAAA
            margin-bottom 50px
    .footer 
      width 500px
      height 300px
      margin 0 auto
      text-align center
      position relative
      div
        left 50%
        top 280%
        transform translate(-50%,-50%)
        width 400px
        height 300px
        position absolute
        color #AAAAAA
        span 
          font-size 12px
          
          &:first-child
            margin-right 10px
            margin-left 20px
          &:last-child
            margin-left 10px

</style>