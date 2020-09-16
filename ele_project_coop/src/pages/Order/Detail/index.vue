<template>
  <div class="detailContainer">
    <van-sticky>
      <div class="nav">
        <div class="icon-l">
          <van-icon @click="toOrder"
                    name="arrow-left" />
        </div>
        <h2>订单详情</h2>
        <div class="icon-r">
          <van-icon name="service-o" />
        </div>
      </div>
    </van-sticky>
    <div class="contentContainer">
      <div class="ready">
        <div class="done">
          <span>订单已送达</span>
          <van-icon name="arrow" />
        </div>
        <p>感谢您对饿了么的信任，期待再次光临</p>
        <van-button size="small"
                    class="but"
                    color="#2395ff"
                    plain
                    @click="toOrderInfo">再来一单</van-button>
      </div>
      <div class="list"
           v-if="orderInfo">
        <div class="top">
          <img :src="orderInfo.restaurant_img"
               alt="" />
          <p>{{orderInfo.restaurant_name}}</p>
          <van-icon name="arrow" />
        </div>
        <div class="content"
             v-for="(item,index) in orderItem.group"
             :key="item.id">
          <span>{{item.name}}</span>
          <div class="count">
            <span>x{{item.quantity}}</span>
            <span>￥{{item.price}}</span>
          </div>
        </div>
        <div class="content extra"
             v-for="(ex,index) in orderItem.extra"
             :key="index">
          <span>{{ex.name}}</span>
          <div class="count">
            <span></span>
            <span class="redd">-￥{{ex.price*-1}}</span>
          </div>
        </div>
        <div class="cust">
          <div class="match"
               @click="showPopup">
            <van-icon class="icon"
                      name="phone-circle-o" />
            <span>联系商家</span>
          </div>
          <p class="price">实付 <span>￥ {{orderInfo.total_amount}}</span></p>
        </div>
      </div>
      <div class="detailCard">
        <div class="delivery">
          <p>配送信息</p>
          <ul class="deliTail">
            <li class="item">
              送达时间：<span>尽快送达</span>
            </li>
            <li class="item address">
              送货地址：
              <div>
                <p>刘(女士)</p>
                <p>15031010366</p>
                <p>龙锦苑东5区11号楼一单元</p>
              </div>
            </li>
            <li class="item">
              配送方式：<span>蜂鸟快送</span>
            </li>
            <li class="item timeov">
              配送骑士：
              <div class="match"
                   @click="showPopup">
                <van-icon class="icon contact"
                          name="phone-circle-o" />
                <span class="contact">联系骑士</span>
                <span>|</span>
                <span>姚立根</span>
              </div>
            </li>
            <li class="item plus">
              <div>
                <img src="../images/ontime.png"
                     alt="">
                <span>服务详情</span>
                <van-icon class="icon"
                          name="phone-circle-o"
                          color="#2395ff" />
              </div>
              <p>准时送达</p>
            </li>
          </ul>
        </div>
        <div class="pay">
          <p>订单信息</p>
          <ul>
            <li class="item">
              订单号：<span>{{orderInfo.id}}</span>
            </li>
            <li class="item">
              支付方式：<span>在线支付</span>
            </li>
            <li class="item">
              下单时间：<span>{{orderInfo.formatted_created_at}}</span>
            </li>
            <li class="item">
              订单备注：<span>无需餐具</span>
            </li>
          </ul>
        </div>
      </div>
      <van-popup class="v-show"
                 v-model="show">
        <h3>手机号隐私保护中</h3>
        <p>号码保护中，对方看不见您的真实手机号</p>
        <img src="../images/tip.webp"
             alt="">
        <van-button class="btn"
                    color="#2395ff">立即联系</van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Button, Divider, Popup, Sticky } from 'vant'
import { mapState, mapActions } from 'vuex'
import { reqOrderItem } from '../../../api'
export default {
  name: 'Detail',
  components: {
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Sticky.name]: Sticky,
    [Popup.name]: Popup
  },
  data () {
    return {
      show: false,
      orderItem: {}, // 商品列表的对象
      orderInfo: {}, // 商品详情对象
    }
  },
  computed: {
    ...mapState({
      orderList: state => state.orderModule.orderList
    })
  },
  mounted () {
    if (this.orderList) {
      this.orderItem = this.$route.query.item
      this.orderInfo = this.$route.query.info
    }
  },
  methods: {
    toOrderInfo () {
      this.$router.push('/orderinfo')
    },
    toOrder () {
      this.$router.push('/order')
    },
    showPopup () {
      this.show = true
    },
    closeShow () {
      this.show = false
    }
  }
}
</script>

<style lang="stylus">
.detailContainer
  background-color rgb(245, 245, 245)
  padding-bottom 10px
  .nav
    width 100%
    height 88px
    line-height 88px
    background-color #2395ff
    display flex
    color #fff
    justify-content space-between
    align-items center
    font-size 36px
    font-weight bolder
    h2
      font-size 38px
    .icon-l
      font-size 40px
      margin-top 10px
      margin-left 30px
    .icon-r
      font-size 40px
      margin-top 10px
      margin-right 30px
  .contentContainer
    padding 20px
    display flex
    flex-direction column
    background-color rgb(245, 245, 245)
    .ready
      margin 0 auto
      height 290px
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
        font-size 32px
        margin 25px 0
      .but
        margin 10px 0
    .list
      width 670px
      margin 20px auto
      padding 0 20px
      background-color #fff
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
        display flex
        justify-content space-between
        align-items center
        height 80px
        padding 10px 0
        border-top 1px solid #efefef
        .match
          color #2395ff
          font-size 26px
          .icon
            font-size 34px
            vertical-align middle
          span
            font-size 28px
            margin-left 10px
            vertical-align middle
        .price
          color #151515
          font-size 28px
          span
            font-weight bold
    .detailCard
      height 1021px
      .delivery
        background-color #fff
        height 590px
        padding 0 20px 10px 10px
        >p
          color #333
          height 79px
          line-height 79px
          border-bottom 1px solid #eee
          font-size 30px
        .deliTail
          padding-left 20px
          color #6e6e6e
          font-size 28px
          .item
            border-bottom 1px solid #f2f2f2
            line-height 80px
          .address
            display flex
            line-height 50px
            margin 20px 0
          .timeov
            display flex
            justify-content space-between
            font-size 26px
            span
              margin-left 15px
              vertical-align middle
            .contact
              vertical-align middle
              color #2395ff
          .plus
            display flex
            justify-content space-between
            font-size 26px
            img
              height 26px
              vertical-align middle
            .icon
              vertical-align middle
              font-size 18px
            span
              vertical-align middle
      .pay
        height 400px
        background-color #fff
        padding 0 20px 10px 10px
        margin 20px 0
        >p
          color #333
          height 79px
          line-height 79px
          border-bottom 1px solid #eee
          font-size 30px
        ul
          padding-left 20px
          color #6e6e6e
          font-size 28px
          .item
            border-bottom 1px solid #f2f2f2
            line-height 80px
    .v-show
      width 600px
      height 550px
      padding 20px
      margin 0 auto
      background-color #fff
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      color #333
      h3
        font-weight bolder
        font-size 36px
        margin-top 20px
      img
        width 282px
        height 252px
      p
        font-size 30px
      .btn
        width 100%
        font-size 35px
        font-weight bold
</style>