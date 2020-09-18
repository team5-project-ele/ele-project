<template>
  <div class="Container">
    <div class="rightCont">
      <ul class="sideList"
          v-if="userInfo">
        <li class="listItem">
          <p>无需餐具</p>
          <div class="item">
            <span>￥0</span>
            <van-icon class="sale-icon"
                      name="add"
                      color="#2396ff" />
          </div>
        </li>
        <li class="listItem">
          <p>无需餐具</p>
          <div class="item">
            <span>￥0</span>
            <van-icon class="sale-icon"
                      name="add"
                      color="#2396ff" />
          </div>
        </li>
      </ul>
    </div>

    <dl class="menu">
      <dt class="title">
        <span class="in-title">热销</span>
        <span>大家喜欢吃，才叫真好吃</span>
      </dt>
      <dd class="in-list">
        <div class="in-item">
          <img src="../../order/list4.webp"
               alt="">
          <section>
            <h4 class="sec-tit">手工·招牌牛肉包（一屉三个）</h4>
            <p>手工包制，一个大肉丸一个大肉丸那种
              主要原料：胡萝卜,牛肉</p>
            <div class="sect">
              <span>月售100份</span>
              <span>好评率89%</span>
            </div>
            <div class="sale">
              <span>￥12</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </section>
        </div>
      </dd>
      <dd class="in-list">
        <div class="in-item">
          <img src="../../order/list4.webp"
               alt="">
          <section>
            <h4 class="sec-tit">手工·招牌牛肉包（一屉三个）</h4>
            <p>手工包制，一个大肉丸一个大肉丸那种
              主要原料：胡萝卜,牛肉</p>
            <div class="sect">
              <span>月售100份</span>
              <span>好评率89%</span>
            </div>
            <div class="sale">
              <span>￥12</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </section>
        </div>
      </dd>
      <dd class="in-list">
        <div class="in-item">
          <img src="../../order/list4.webp"
               alt="">
          <section>
            <h4 class="sec-tit">手工·招牌牛肉包（一屉三个）</h4>
            <p>手工包制，一个大肉丸一个大肉丸那种
              主要原料：胡萝卜,牛肉</p>
            <div class="sect">
              <span>月售100份</span>
              <span>好评率89%</span>
            </div>
            <div class="sale">
              <span>￥12</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </section>
        </div>
      </dd>
      <dd class="in-list">
        <div class="in-item">
          <img src="../../order/list4.webp"
               alt="">
          <section>
            <h4 class="sec-tit">手工·招牌牛肉包（一屉三个）</h4>
            <p>手工包制，一个大肉丸一个大肉丸那种
              主要原料：胡萝卜,牛肉</p>
            <div class="sect">
              <span>月售100份</span>
              <span>好评率89%</span>
            </div>
            <div class="sale">
              <span>￥12</span>
              <van-icon class="sale-icon"
                        name="add"
                        color="#2396ff" />
            </div>
          </section>
        </div>
      </dd>
    </dl>
  </div>

</template>
<script>
export default {
  name: 'ListInfo',
  data () {
    return {
      userInfo: {}
    }
  }
}
</script>
<style lang="stylus" scoped>
.Container
  width calc(100vw - 220px)
  height calc(100vh - 200px)
  overflow auto
  padding 0 20px
  .rightCont
    width 100%
    box-sizing border-box
    .sideList
      height 130px
      overflow auto
      display flex
      .listItem
        width 288px
        height 94px
        margin-right 10px
        padding 15px 20px
        display flex
        flex-direction column
        justify-content space-around
        font-size 28px
        color #333
        box-shadow 0 0 0.8vw 0 rgba(0, 0, 0, 0.15)
        border 1px solid #eee
        .item
          display flex
          justify-content space-between
          align-items center
          span
            color #ff5339
            font-size 30px
          .sale-icon
            font-size 50px
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
            .sale-icon
              font-size 50px
</style>