<template>
  <div class="orderContainer">
    <div class="orderList">
      <div class="orderCard">
        <div class="top">
          <img src="./order/logo.webp"
               alt="">
          <div class="header">
            <div class="title">
              <span>頭叁甲(包子油条豆腐脑回龙观东大街店)</span>
              <span>></span>
              <p>已送达</p>
            </div>
            <div class="time">
              <span>2020-08-27</span>
              <span>18:55</span>
            </div>
            <div class="orderDtail">
              <span>手工·猪肉大葱包（一屉三个）</span>
              <span>等6件商品</span>
              <p class="price">￥ 19.40</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <button type="primary">再来一单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  components: {

  }
}
</script>

<style lang="stylus">
.orderContainer
  width 100%
  height 100%
  .orderList
    width 100%
    height 100%
    background-color rgb(245, 245, 245)
    .orderCard
      height 310px
      background-color pink
</style>