<template>
  <div id="footerContainer">
    <div class="tabBar"
         @click="toPage('/home')"
         :class="{active:$route.path === '/home'}">
      <i class="iconfont"
         :class="$route.path==='/home'?'icon-changyonglogo401':'icon-changyonglogo40'"></i>
      <span>首页</span>
    </div>
    <div class="tabBar"
         @click="toPage('/found')"
         :class="{active:$route.path === '/found'}">
      <i class="iconfont"
         :class="$route.path==='/found'?'icon-found':'icon-faxian'"></i>
      <span>发现</span>
    </div>
    <div class="tabBar"
         @click="toPage('/order')"
         :class="{active:$route.path === '/order'}">
      <i class="iconfont"
         :class="$route.path==='/order'?'icon-dd':'icon-icon-'"></i>
      <span>订单</span>
    </div>
    <div class="tabBar"
         @click="toPage('/personal')"
         :class="{active:$route.path === '/personal'}">
      <i class="iconfont"
         :class="$route.path==='/personal'?'icon-wodedangxuan':'icon-wode'"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterBar',
  methods: {
    toPage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus">
#footerContainer
  position fixed
  bottom 0
  left 0
  width 100%
  height 120px
  display flex
  justify-content space-around
  background-color #fff
  border-top 1px solid #8e8e93
  .tabBar
    flex 1
    display flex
    flex-direction column
    text-align center
    justify-content center
    color #8e8e93
    &.active
      color #0089dc
    .iconfont
      font-size 50px
    span
      font-size 30px
</style>