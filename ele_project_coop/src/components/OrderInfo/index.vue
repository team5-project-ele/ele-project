<template>
  <div class="infoContainer">
    <div class="header">
      <div class="top">
        <van-icon color="#fff"
                  class="icon"
                  name="arrow-left" />
      </div>
      <div class="bottom">
        <div class="bottom-img">
          <img src="./order/logo.webp"
               alt="">
          <span class="icon">品牌</span>
        </div>
        <div class="bottom-title"
             @click="showPopup">
          <h2>
            <span>頭叁甲(包子油条豆腐脑回龙观东大街店)</span>
            <van-icon class="title-icon"
                      name="play" />
          </h2>
          <div class="tips">
            <span>评价4.6</span>
            <span>月售1372单</span>
            <span>蜂鸟快送约30分钟</span>
          </div>
        </div>
        <van-popup v-model="show"
                   class="msg">
          <div class="msg-title">
            <i class="msg-icon">品牌</i>
            <span>頭叁甲(包子油条豆腐脑回龙观东大街店)</span>
          </div>
          <div class="msg-cont">
            <div class="contItem">
              <h3>4.6</h3>
              <p>评分</p>
            </div>
            <div class="contItem">
              <h3>1340单</h3>
              <p>月售</p>
            </div>
            <div class="contItem">
              <h3>蜂鸟快送</h3>
              <p>约30分钟</p>
            </div>
            <div class="contItem">
              <h3>0.0元</h3>
              <p>配送费</p>
            </div>
            <div class="contItem">
              <h3>989m</h3>
              <p>距离</p>
            </div>
          </div>
          <van-divider>公告</van-divider>
          <div class="msg-text">
            现在的市场太透明了，便宜的东西无非就是减少成本，原料少一点，工艺差一点，看似差不多，其实相差甚远，价格战我们甘拜下风，打打质量战我们横扫千军，而我们的顾客也很睿智，所以我们家的订单也一直不断，口碑也是交口称赞，总结了一点，吃了都说好！
          </div>
        </van-popup>
        <div class="card">
          <div class="confit">
            <span>￥7</span>
            <van-icon color="#F4A460"
                      class="confit-icon"
                      name="gem-o" />
            <span>无门槛</span>
          </div>
          <p>领取</p>
        </div>
        <div class="tags">
          <van-tag class="tag"
                   color="#FF4B33"
                   plain>25减4</van-tag>
          <van-tag class="tag"
                   color="#FF4B33"
                   plain>36减5</van-tag>
          <van-tag class="tag"
                   color="#FF4B33"
                   plain>39减9</van-tag>
          <van-tag class="tag"
                   color="#FF4B33"
                   plain>配送费优惠</van-tag>
          <div @click="showSheet">
            <span>2个优惠</span>
            <van-icon name="arrow-down" />
          </div>
          <van-action-sheet class="sheetAction"
                            title="优惠活动"
                            v-model="sheet">
            <div class="content">
              <div class="actions">
                <van-tag plain
                         class="tag"
                         color="#FF4B33">满减</van-tag>
                <span>满25元减4元，满36元减5元，满39元减9元</span>
              </div>
              <div class="actions">
                <van-tag plain
                         class="tag"
                         color="#FF4B33">特价</van-tag>
                <span>特价商品0.1元起</span>
              </div>
            </div>
          </van-action-sheet>
        </div>
        <p class="van-ellipsis">公告：现在的市场太透明了，便宜的东西无非就是减少成本，原料少一点，工艺差一点，看似差不多，其实相差甚远，价格战我们甘拜下风，打打质量战我们横扫千军，而我们的顾客也很睿智，所以我们家的订单也一直不断，口碑也是交口称赞，总结了一点，吃了都说好！</p>
      </div>
    </div>
    <van-tabs class="tabs"
              sticky
              v-model="active"
              color="#2396ff">
      <van-tab class="tab"
               title="点餐">
        <RestaurantInfo />
      </van-tab>
      <van-tab class="tab"
               title="评价">
        <RestaurantInfo />
      </van-tab>
      <van-tab class="tab"
               title="商家">
        <RestaurantInfo />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs, Sticky, Tag, ActionSheet, Popup, Divider, Sidebar, SidebarItem } from 'vant'
import RestaurantInfo from './RestaurantInfo'
export default {
  name: 'OrderInfo',
  data () {
    return {
      show: false,
      sheet: false,
      active: 0
    }
  },
  mounted () {

  },
  components: {
    RestaurantInfo,
    [Tab.name]: Tab,
    [Button.name]: Button,
    [Tabs.name]: Tabs,
    [Tag.name]: Tag,
    [Sticky.name]: Sticky,
    [ActionSheet.name]: ActionSheet,
    [Popup.name]: Popup,
    [Divider.name]: Divider,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
  methods: {
    showPopup () {
      this.show = true
    },
    showSheet () {
      this.sheet = true
    }
  }
}
</script>

<style lang="stylus">
.infoContainer
  width 100%
  height 100%
  .header
    width 100%
    // height 537px
    background-color #fff
    .top
      height 200px
      background-color skyblue
      position relative
      background-image url('./order/tab.webp')
      background-size cover
      background-repeat no-repeat
      background-position 50%
      &:before
        content ''
        width 100%
        height 100%
        position absolute
        left 0
        top 0
        background-image linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgba(0, 0, 0, 0.5))
      .icon
        position absolute
        left 20px
        top 10px
        font-size 40px
    .bottom
      position relative
      text-align center
      padding-top 60px
      .bottom-img
        width 150px
        height 150px
        position absolute
        top -120px
        left 50%
        z-index 100
        transform translateX(-50%)
        margin 0 auto
        >img
          width 100%
          height 100%
          border-radius 10px
          border 1px solid #ddd
        .icon
          width 50px
          height 20px
          line-height 20px
          position absolute
          top 0
          left 0
          z-index 99
          background-color #ffe578
          border 1px solid #ffe578
      .bottom-title
        display flex
        flex-direction column
        align-items center
        h2
          position relative
          color #333
          span
            line-height 48px
            display block
            width 500px
            font-weight bold
            font-size 40px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .title-icon
            position absolute
            top 20%
            left 500px
            font-size 30px
        .tips
          color #666
          font-size 22px
          line-height 20px
          margin 10px 0
          span
            margin-left 20px
      .msg
        width 500px
        height 510px
        padding 60px 50px
        .msg-title
          position relative
          height 106px
          .msg-icon
            display inline-block
            width 60px
            height 30px
            border 1px solid yellow
            background-color yellow
            color #6a3709
            border-radius 10px
            margin-right 10px
          span
            font-size 42px
            font-weight bold
        .msg-cont
          display flex
          justify-content space-around
          .contItem
            h3
              font-weight bold
              font-size 30px
              margin 15px 0
            p
              color #999
              font-size 26px
        .msg-text
          width 500px
          height 200px
          overflow scroll
          line-height 45px
          font-size 24px
          text-align left
      .card
        width 288px
        height 48px
        margin 10px auto
        display flex
        line-height 48px
        justify-content space-around
        color #594519
        .confit
          position relative
          width 203px
          background-color #ffe578
          display flex
          justify-content space-around
          font-size 26px
          border-radius 0 10px 10px 0
          .confit-icon
            position absolute
            top 15px
            left 75px
        p
          width 85px
          font-size 26pxs
          background-color #ffe578
          border-radius 10px 0 0 10px
      .tags
        margin 10px auto
        width 600px
        padding 10px 0
        display flex
        .tag
          margin-right 20px
        span
          color #999
        .sheetAction
          height 453px
          .content
            padding 16px 16px 160px
            text-align left
            .actions
              margin 0 0 20px 50px
      >p
        color #999
        padding 0 60px
</style>