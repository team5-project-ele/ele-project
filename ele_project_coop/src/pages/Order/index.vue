<template>
  <div class="orderContainer">
    <template v-if="userInfo">
      <div class="orderList"
           v-for="(list,index) in orderList"
           :key="list.id">
        <div class="orderCard">
          <div class="top"
               @click="toOrderInfo(list.id)">
            <div class="logo">
              <img :src="list.restaurant_img"
                   alt="">
            </div>
            <div class="header">
              <div class="title">
                <span>{{list.restaurant_name}}</span>
                <van-icon name="arrow" />
                <p>{{list.status_bar.title}}</p>
              </div>
              <div class="time">
                <span>{{list.formatted_created_at}}</span>
              </div>
              <div class="orderDtail">
                <span class="detail">{{list.basket.group[0].name}}</span>
                <span>等{{list.basket.group.length}}件商品</span>
                <p class="price">￥ {{list.total_amount}}</p>
              </div>
            </div>
          </div>
          <div class="bottom"
               @click="toDetail(list.id)">
            <van-button class="but"
                        color="#2395ff"
                        plain
                        @click="toOrderInfo">再来一单</van-button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="logo-in">
        <img src="./images/login-in.png"
             alt="">
        <h3>登录后查看外卖订单</h3>
        <van-button @click="toLogin"
                    class="logo-btn"
                    type="primary">立即登录</van-button>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from 'vant'
import { mapState, mapGetters, mapActions } from 'vuex'
import { reqOrderInfo } from '../../api'
export default {
  name: 'Order',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    this.getOrderListAction()
    // this.userInfo = null
  },
  methods: {
    ...mapActions({
      getOrderListAction: 'getOrderListAction'
    }),
    // 跳转到订单详情页
    toDetail (navId) {
      let obj = this.orderList.find(item => item.id === navId)
      let result = obj.basket

      this.$router.replace({ path: '/order/detail', query: { info: obj, item: result } })
    },
    // 跳转到商品详情页
    toOrderInfo (navId) {
      this.$router.push({ path: '/orderinfo', query: { listId: navId } })
    },
    // 跳转到登录页面
    toLogin () {

    }
  },
  computed: {
    ...mapState({
      orderList: state => state.orderModule.orderList
    })
  }

}
</script>

<style lang="stylus">
.orderContainer
  padding-top 10px
  width 100%
  background-color rgb(245, 245, 245)
  .orderList
    width 100%
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
        .but
          position absolute
          right 45px
          bottom 40px
          width 146px
          height 56px
          text-align center
          line-height 56px
          padding 10px 20px
          font-size 24px
  .logo-in
    width 450px
    margin 150px auto
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    img
      width 400px
      height 400px
      margin 20px 0
    >h3
      color #6A6A6A
      margin 30px 0
      font-size 30px
    .logo-btn
      font-size 26px
      width 200px
      height 60px
</style> 