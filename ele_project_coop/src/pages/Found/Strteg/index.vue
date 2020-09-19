<template>
  <div class="nvitationContainer">
    <!-- 上面发送包 -->
    <div class="headerContent">
      <div class="hair">
        <p class="title">01 免费发红包给好友</p>
        <span class="tips">饿了么联合周边商家给你红包，通过微信、微博、面对面等方式发给好友</span>
        <div class="ImgContent">
        <img src="./image/1.png" alt="">
        <img src="./image/2.png" alt="">
      </div>
      </div>
      
    </div>
    <!-- 下面赚赏金 -->
    <div class="bottomContent">
      <div class="hair">
        <p class="title">02 好友⽤你红包下单 你赚赏⾦</p>
        <span class="tips">好友注册成功7天内完成实付金额超过7元的首单，14天内完成实付金额超过10元的二单，你可获得最高15元的奖励金</span>
        <div class="ImgContent">
        <img src="./image/3.png" alt="">
        <img src="./image/4.png" alt="">
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Invitation'
}
</script>
<style lang="stylus">
.nvitationContainer
  width 100%
  height 100%
  background #f5f5f5
  .headerContent
    box-sizing border-box
    width 100%
    height 50%
    padding 25px
    .hair
      width 100%
      height 100%
      background #FFF
      padding 0 25px
      .title
        font-size 40px
        padding  20px 0
      .tips
        font-size 26px
        color #999
        line-height 40px
      .ImgContent
        margin-top 30px
        display flex
        width 50%
        height 400px
        img 
          width 100%
          height 100%
  .bottomContent
    box-sizing border-box
    width 100%
    height 50%
    padding 25px
    .hair
      width 100%
      height 100%
      background #FFF
      padding 0 25px
      .title
        font-size 40px
        padding  20px 0
      .tips
        font-size 26px
        color #999
        line-height 40px
      .ImgContent
        margin-top 30px
        display flex
        width 50%
        height 400px
        img 
          width 100%
          height 100%
  
</style>