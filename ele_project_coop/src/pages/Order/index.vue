<template>
  <div class="orderContainer">
    <div class="orderList"
         v-if="$route.path==='/order'">
      <div class="orderCard">
        <div class="top">
          <div class="logo">
            <img src="./order/logo.webp"
                 alt="">
          </div>
          <div class="header">
            <div class="title">
              <span>頭叁甲(包子油条豆腐脑回龙观东大街店)</span>
              <i class="el-icon-arrow-right"></i>
              <p>已送达</p>
            </div>
            <div class="time">
              <span>2020-08-27</span>
              <span>18:55</span>
            </div>
            <div class="orderDtail">
              <span class="detail">手工 · 猪肉大葱包（一屉三个）</span>
              <span>等6件商品</span>
              <p class="price">￥ 19.40</p>
            </div>
          </div>
        </div>
        <div class="bottom"
             @click="toDetail">
          <div>再来一单</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    toDetail () {
      this.$router.replace({ path: '/order/detail' })
    }
  }
}
</script>

<style lang="stylus">
.orderContainer
  padding-top 10px
  background-color rgb(245, 245, 245)
  .orderList
    width 100%
    height 100%
    background-color rgb(245, 245, 245)
    .orderCard
      height 310px
      margin-top 20px
      padding 28px 0 0 30px
      background-color #fff
      .top
        width 100%
        height 185px
        border-bottom 1px solid #eee
        .logo
          width 84px
          height 64px
          float left
          img
            width 64px
            height 64px
            border 1px solid #eee
        .header
          color #333
          float right
          height 95px
          .title
            position relative
            display flex
            justify-content space-between
            width 636px
            height 48px
            line-height 48px
            color #333
            span
              width 320px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              font-size 33px
            i
              position absolute
              left 325px
              top 15px
            p
              position absolute
              right 30px
          .time
            height 26px
            color #999
            padding 10px 0
            border-bottom 1px solid #eee
            span
              margin-right 10px
          .orderDtail
            margin 20px
            display flex
            color #666
            height 90px
            line-height 45px
            .detail
              width 320px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .price
              text-align right
              margin-left 60px
              font-weight bold
              font-size 26px
              color #333
      .bottom
        position relative
        height 97px
        line-height 97px
        padding 20px 30px
        div
          border 1px solid #2395ff
          position absolute
          right 45px
          bottom 40px
          width 104px
          height 34px
          line-height 34px
          padding 10px 20px
          color #2395ff
          font-size 26px
</style> 