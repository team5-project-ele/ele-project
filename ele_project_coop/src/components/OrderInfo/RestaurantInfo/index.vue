<template>
  <div class="main">
    <div class="hot">
      <div class="main-img">
        <img src="../order/section.webp"
             alt="">
      </div>
      <div class="recommend">
        <p>镇店爆款 人气热销TOP5</p>
        <ul class="list">
          <li class="tops">
            <img src="../order/list1.webp"
                 alt="">
            <h4>棒槌油条</h4>
            <p>月售545 好评率88%</p>
            <div class="sale">
              <span>￥6</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </li>
          <li class="tops">
            <img src="../order/list1.webp"
                 alt="">
            <h4>棒槌油条</h4>
            <p>月售545 好评率88%</p>
            <div class="sale">
              <span>￥6</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </li>
          <li class="tops">
            <img src="../order/list1.webp"
                 alt="">
            <h4>棒槌油条</h4>
            <p>月售545 好评率88%</p>
            <div class="sale">
              <span>￥6</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </li>
          <li class="tops">
            <img src="../order/list1.webp"
                 alt="">
            <h4>棒槌油条</h4>
            <p>月售545 好评率88%</p>
            <div class="sale">
              <span>￥6</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </li>
          <li class="tops">
            <img src="../order/list1.webp"
                 alt="">
            <h4>棒槌油条</h4>
            <p>月售545 好评率88%</p>
            <div class="sale">
              <span>￥6</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <van-sticky class="stickyContainer"
                :offset-top="50">
      <van-sidebar class="sideContainer"
                   v-model="activeKey">
        <van-sidebar-item title="收藏有礼">

        </van-sidebar-item>
        <van-sidebar-item title="热销"></van-sidebar-item>
        <van-sidebar-item title="优惠"></van-sidebar-item>
        <van-sidebar-item title="必选品"></van-sidebar-item>
        <van-sidebar-item title="干粮"></van-sidebar-item>
        <van-sidebar-item title="滋溜"></van-sidebar-item>
        <van-sidebar-item title="小吃"></van-sidebar-item>
        <van-sidebar-item title="面条"></van-sidebar-item>
        <van-sidebar-item title="饮料"></van-sidebar-item>
        <van-sidebar-item title="卤菜"></van-sidebar-item>
        <van-sidebar-item title="消费纠纷和解员"></van-sidebar-item>
      </van-sidebar>
    </van-sticky>

    <div class="footer">
      <van-button round
                  class="side-icon"
                  color="#ff6000">去点必选品</van-button>
      <p>满25元减4元，满36元减5元，满39元减9元</p>
      <div class="cart">
        <van-icon name="cart-circle"
                  class="cart-icon" />
        <div class="cart-left">
          <p>未选购商品</p>
          <p>另需配送费</p>
        </div>
        <div class="cart-right">
          <p>下单前请点必选品</p>
          <p>￥0起送</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Button, Sticky, Sidebar, SidebarItem } from 'vant'

export default {
  name: 'App',
  data () {
    return {
      activeKey: 0
    }
  },
  components: {
    [Sticky.name]: Sticky,
    [Button.name]: Button,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
}
</script>

<style lang="stylus">
.main
  .hot
    display flex
    flex-direction column
    .main-img
      width 686px
      height 176px
      margin 0 auto
      >img
        width 100%
        height 100%
        border-radius 5px
    .recommend
      height 500px
      width calc(100vw - 25px)
      padding-left 25px
      margin-top 25px
      >p
        font-weight bold
        font-size 35px
        margin-bottom 25px
      .list
        height 400px
        display flex
        overflow auto
        .tops
          height 100%
          margin-right 25px
          >img
            width 240px
            height 240px
          h4
            color #333
            margin 15px 0
            font-size 28px
          >p
            color #999
          .sale
            width 240px
            display flex
            margin-top 20px
            justify-content space-between
            span
              color #ff5339
              font-size 35px
            .sale-icon
              font-size 50px
  .footer
    z-index 99
    position fixed
    bottom 0
    left 0
    width 100%
    height 121px
    background-color rgba(61, 61, 63, 0.9)
    .side-icon
      width 185px
      height 63px
      position absolute
      right 20px
      top -100px
      font-size 24px
      font-weight bold
    >p
      background-color #f9e8a3
      text-align center
      padding 8px 0
      color #333
      font-size 22px
    .cart
      display flex
      justify-content space-between
      align-items center
      color #999
      .cart-icon
        font-size 80px
</style>
