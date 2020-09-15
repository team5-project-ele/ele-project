<template>
<div class="peripheryContainer">
  <div class="header">
    <div class="icon" @click="gofound">
      <van-icon name="arrow-left" />
    </div>
    <h1 class="title">周边优惠</h1>
  </div>
  <!-- 优惠 -->
  <div class="peripheryItem">
    <div class="loadingImg">
      <img src="./image/elm.gif" alt="">
    </div>
    <h3>网络错误</h3>
    <p>页面溜走了</p>
    <button>刷新重试</button>
  </div>
</div>
</template>
<script>
export default{
  name:'Periphery',
  methods:{
    gofound(){
      this.$router.push({
        path:'/found'
      })
    }
  }
}
</script>
<style lang="stylus">
.peripheryContainer
  width 100%
  height 902px
  .header
    width 100%
    height 88px
    line-height 88px
    background #2395f6
    color #FFF
    .icon
      width 88px
      height 88px
      text-align center 
      float left
      line-height 88px
      font-size 35px
    .title
      font-size 35px  
      font-weight bold
      text-align center
  .peripheryItem
    margin-top 190px
    text-align center 
    .loadingImg
      width 400px
      height 400px
      margin 0 auto
      img
        width 100%
        height 100%
    h3
      font-size 35px
      line-height 100px
    p
      color #999
    button
      width 240px
      height 78px
      margin 30px 0
      background #56D176
      border none
      color #FFF
      font-size 30px  
</style>