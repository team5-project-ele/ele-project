<template>
  <div class="detailContainer">
    <div class="nav">
      <div class="icon-l">
        <i class="el-icon-arrow-left"
           @click="toOrder"></i>
      </div>
      <h2>订单详情</h2>
      <div class="icon-r">
        <i class="el-icon-headset"></i>
      </div>
    </div>
    <div class="contentContainer">
      <div class="ready">
        <div class="done">
          <span>订单已送达</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <p>感谢您对饿了么的信任，期待再次光临</p>
      </div>
      <div class="list">
        <div class="top">
          <img src="../order/logo.webp"
               alt="" />
          <p>頭叁甲(包子油条豆腐脑回龙观东大街店)</p>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>奶香国宴油条</span>
          <div class="count">
            <span>x1</span>
            <span>￥6</span>
          </div>
        </div>
        <div class="content">
          <span>店铺满减</span>
          <div class="count">
            <span></span>
            <span class="redd">- ￥4</span>
          </div>
        </div>
        <div class="content">
          <span>店铺满减</span>
          <div class="count">
            <span></span>
            <span class="redd">- ￥4</span>
          </div>
        </div>
        <div class="content">
          <span>店铺满减</span>
          <div class="count">
            <span></span>
            <span class="redd">- ￥4</span>
          </div>
        </div>
        <div class="cust">
          <div class="match">
            <i class="el-icon-phone"></i>
            <span>联系商家</span>
          </div>
          <p class="price">实付 ￥ 19.4</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    toOrder () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="stylus">
.detailContainer
  .nav
    width 100%
    height 88px
    line-height 88px
    background-color #2395ff
    display flex
    color #fff
    justify-content space-between
    font-size 36px
    font-weight bolder
    h2
      font-size 38px
    .icon-l
      font-size 40px
      margin-left 30px
    .icon-r
      font-size 40px
      margin-right 30px
  .contentContainer
    padding 20px
    background-color rgb(245, 245, 245)
    .ready
      margin 0 auto
      height 251px
      width 670px
      background-color #fff
      padding 0 20px 40px 20px
      color #333
      .done
        font-size 50px
        padding 36px 0
        margin-bottom 30px
        border-bottom 1px solid #eee
        i
          font-size 40px
      p
        font-size 36px
        margin-top 50px
    .list
      width 670px
      margin 20px auto
      padding 0 20px
      height 1245px
      background-color pink
      border-top 1px solid #efefef
      border-bottom 1px solid #efefef
      color #4d4d4d
      .top
        height 45px
        padding 20px 0
        line-height 45px
        display flex
        position relative
        border-bottom 1px solid #efefef
        img
          width 40px
          height 40px
          margin-right 20px
        p
          font-size 26px
        i
          position absolute
          right 5px
          top 30px
          font-size 30px
      .content
        display flex
        justify-content space-between
        line-height 60px
        height 60px
        padding 10px 0
        border-bottom 1px solid #efefef
        .count
          display flex
          width 120px
          justify-content space-between
          .redd
            color #ff5339
      .cust
        .match
          color #2395ff
</style>