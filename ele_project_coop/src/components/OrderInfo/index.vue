<template>
  <div class="infoContainer">
    <div class="header"
         v-if="orderinfo.rst">
      <div class="top">
        <img :src="orderinfo.rst.nav_img"
             alt="">
        <van-icon color="#fff"
                  class="icon"
                  name="arrow-left"
                  @click="toBack" />
      </div>
      <div class="bottom">
        <div class="bottom-img">
          <img :src="orderinfo.rst.logo_img"
               alt="">
          <span class="icon">品牌</span>
        </div>
        <div class="bottom-title"
             @click="showPopup">
          <h2>
            <span>{{orderinfo.rst.name}}</span>
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
            <span>{{orderinfo.rst.name}}</span>
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
            {{orderinfo.rst.promotion_info}}
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
        <p class="van-ellipsis">公告：{{orderinfo.rst.promotion_info}}</p>
      </div>
    </div>
    <van-tabs class="tabs"
              sticky
              v-model="active"
              color="#2396ff">
      <van-tab class="tab"
               title="点餐">
        <div class="main">
          <div class="hot"
               v-if="orderinfo.rst">
            <div class="main-img">
              <img :src="orderinfo.rst.tab_img"
                   alt="">
            </div>
            <div class="recommend">
              <p>{{orderinfo.recommend[0].name}}</p>
              <ul class="list">
                <li class="tops"
                    v-for="(tops,index) in orderinfo.recommend[0].items"
                    :key="tops.item_id">
                  <img :src="orderinfo.rst.list_img"
                       alt="">
                  <h4>{{tops.name}}</h4>
                  <p>{{tops.tips}}</p>
                  <div class="sale">
                    <span>￥{{tops.price}}</span>
                    <div class="plus">
                      <i v-if="tops.count>=1"
                         class="iconfont icon-icon-1"
                         @click="addOrDesCart(tops,false,index)"></i>
                      <span>{{tops.count}}</span>
                      <van-icon class="sale-icon"
                                name="add"
                                color="#2396ff"
                                @click="addOrDesCart(tops,true,index)" />
                    </div>

                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <van-sticky class="stickyContainer"
                        :offset-top="50">
              <van-sidebar v-model="activeKey"
                           class="sideContainer">
                <van-sidebar-item class="sideItem"
                                  :title="item.name"
                                  v-for="(item,index) in orderinfo.menu"
                                  :key="item.name" />
              </van-sidebar>
            </van-sticky>
            <van-sticky class="stickyContainer2"
                        :offset-top="50">
              <div class="listContainer">
                <dl class="menu"
                    v-for="(menuItem,index) in orderinfo.menu"
                    :key="menuItem.vfood_id"
                    v-show="index===activeKey">
                  <dt class="title">
                    <span class="in-title">{{menuItem.name}}</span>
                    <span>{{menuItem.description}}</span>
                  </dt>
                  <dd class="in-list"
                      v-for="(change,index) in menuItem.foods"
                      :key="change.vfood_id">
                    <div class="in-item">
                      <img :src="orderinfo.rst.list_img"
                           alt="">
                      <section>
                        <h4 class="sec-tit">{{change.name}}</h4>
                        <p>{{change.description}}</p>
                        <div class="sect">
                          <span>月售100份</span>
                          <span>好评率89%</span>
                        </div>
                        <div class="sale">
                          <span>￥1</span>
                          <div class="plus">
                            <i v-if="change.count>=1"
                               class="iconfont icon-icon-1"
                               @click="addOrDesCart(change,false,index)"></i>
                            <span>{{change.count}}</span>
                            <van-icon class="sale-icon"
                                      name="add"
                                      color="#2396ff"
                                      @click="addOrDesCart(change,true,index)" />
                          </div>
                        </div>
                      </section>
                    </div>
                  </dd>
                </dl>
              </div>
            </van-sticky>
          </div>
          <div class="footer">
            <van-button round
                        class="side-icon"
                        color="#ff6000"
                        @click="toList">去点必选品</van-button>
            <p>满25元减4元，满36元减5元，满39元减9元</p>
            <div class="cart">
              <div class="cartCar">
                <div class="cart-icon">
                  <van-icon name="cart-circle"
                            class="cart-i"
                            @click="goCart"
                            :class="{active:boughtList.length}" />
                  <div class="cart-tip"
                       v-if="boughtList.length">{{boughtList.length}}</div>
                </div>
                <div class="cart-left">
                  <p>未选购商品</p>
                  <p>另需配送费</p>
                </div>
              </div>
              <div class="cart-right">
                <p>下单前请点必选品</p>
                <p>￥0起送</p>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab class="tab"
               title="评价">
      </van-tab>
      <van-tab class="tab"
               title="商家">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs, Sticky, Tag, ActionSheet, Popup, Divider, Sidebar, SidebarItem } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'OrderInfo',
  data () {
    return {
      show: false,
      sheet: false,
      active: 0,
      navId: 0,
      activeKey: 0
    }
  },
  mounted () {
    this.navId = this.$route.query.listId
    this.getOrderInfoAction(this.navId)
  },
  components: {
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
  computed: {
    ...mapState({
      orderinfo: state => state.orderinfoModule.orderinfo,
      boughtList: state => state.orderinfoModule.boughtList
    })
  },
  methods: {
    ...mapActions({
      getOrderInfoAction: 'getOrderInfoAction'
    }),
    ...mapMutations({
      getBoughtList: 'getBoughtList',
      changeCount: 'changeCount'
    }),
    showPopup () {
      this.show = true
    },
    showSheet () {
      this.sheet = true
    },
    // 返回界面
    toBack () {
      this.$router.back()
    },
    // 去必选品
    toList () {
      let result = this.orderinfo.menu.findIndex(item => item.name === '必选品')
      this.activeKey = result
    },
    // 添加购物车
    addOrDesCart (obj, flag, index) {
      this.getBoughtList({ obj, flag, index })
    },
    // 查看购物车
    goCart () {

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
    background-color #fff
    .top
      height 200px
      position relative
      >img
        width 100%
        height 200px
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
  .tabs
    .tab
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
              height 450px
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
                  .plus
                    display flex
                    justify-content space-around
                    .iconfont
                      color #2396ff
                      font-size 50px
                      vertical-align middle
                    span
                      color #333
                      text-align center
                      line-height 50px
                      margin 0 10px
                      vertical-align middle
                    .sale-icon
                      font-size 50px
                      vertical-align middle
        .content
          display flex
          .stickyContainer
            margin-bottom 100px
            width 180px
            .sideContainer
              width 180px
              overflow auto
              height calc(100vh - 200px)
              .sideItem
                font-size 26px
                color #666
          .stickyContainer2
            width calc(100vw - 200px)
            padding-left 20px
            overflow auto
            flex 1
            margin-bottom 100px
            .listContainer
              width 100%
              overflow auto
              .menu
                width 100%
                .title
                  line-height 48px
                  margin 10px 0
                  color #999
                  .in-title
                    color #666
                    font-size 28px
                    font-weight bold
                    margin-right 10px
                .in-list
                  .in-item
                    height 190px
                    margin 20px 0
                    display flex
                    >img
                      width 190px
                      height 190px
                    section
                      width calc(100vw - 430px)
                      padding-left 20px
                      color #333
                      display flex
                      flex-direction column
                      justify-content space-evenly
                      .sec-tit
                        font-weight bold
                        font-size 29px
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden
                      >p
                        color #999
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden
                      .sect
                        color #999
                      .sale
                        display flex
                        margin-top 10px
                        justify-content space-between
                        span
                          color #ff5339
                            font-size 30px
                        .plus
                          display flex
                          justify-content space-around
                          .iconfont
                            color #2396ff
                            font-size 50px
                            vertical-align middle
                          span
                            color #333
                            text-align center
                            line-height 50px
                            margin 0 10px
                            vertical-align middle
                          .sale-icon
                            font-size 50px
                            vertical-align middle
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
            padding 0 20px
            color #999
            .cartCar
              display flex
              align-items center
              .cart-icon
                font-size 80px
                margin-right 30px
                margin-top -30px
                .cart-i
                  background-color rgba(61, 61, 63, 0.9)
                  border-radius 50%
                  &.active
                    background-color #2396ff
                    color #fff
                .cart-tip
                  width 30px
                  height 30px
                  background-color red
                  border-radius 50%
              .cart-left
                margin-top 15px
            .cart-right
              color #fff
              text-align center
              margin-top 15px
</style>