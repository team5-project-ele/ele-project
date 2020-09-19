<template>
  <div class="customerServiceContainer">
    <!-- 头部 -->
    <header class="header">
      <div>
        <img src="https://ecs.elemecdn.com/4/1e/f919b986e01173b3d8746b688e9fbpng.png" alt="">
        <p>你好，客服小e很高兴为您服务！</p>
        <div class="triangle"></div>
      </div>
    </header>
    <!-- 主体 -->
    <main class="main">
      <div class="list">
        <div class="list-header">
          <p>常见问题</p>
        </div>
        <dl class="item">
          <div class="package">
            <div id="problem">
              <span>退单问题</span>
              <div class="iconfontdayuhao">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="solve">
              <dd>如何申请部分退款？</dd>
              <dd>商家拒绝退单怎么办？</dd>
            </div>
          </div>
        </dl>
        <dl class="item">
          <div class="package">
            <div id="problem">
              <span>催单问题</span>
              <div class="iconfontdayuhao">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="solve">
              <dd>我的订单超时怎么办？</dd>
              <dd>订单一直没有骑士接单怎么办？</dd>
            </div>
          </div>
        </dl>
        <dl class="item">
          <div class="package">
            <div id="problem">
              <span>订单变更</span>
              <div class="iconfontdayuhao">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="solve">
              <dd>下单后怎么更改联系电话？</dd>
              <dd>订单忘记备注了怎么办</dd>
            </div>
          </div>
        </dl>
        <dl class="item">
          <div class="package">
            <div id="problem">
              <span>活动问题</span>
              <div class="iconfontdayuhao">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="solve">
              <dd>我的红包为什么用不了？</dd>
              <dd>我是新用户吗？</dd>
            </div>
          </div>
        </dl>
        <dl class="item">
          <div class="package">
            <div id="problem">
              <span>投诉反馈</span>
              <div class="iconfontdayuhao">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="solve">
              <dd>错送漏送餐怎么办？</dd>
              <dd>食品忧理赔相关</dd>
            </div>
          </div>
        </dl>
      </div>
      
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <div class="btn">
        <span>在线客服</span>
      </div>
    </footer>
  </div>
</template>
<script>
import icon from 'vant'
export default {
}
</script>

<style lang="stylus" scoped>
  .customerServiceContainer
    width 100%
    height 100%
    background #F5F5F9
    .header
      width 100%
      height 240px
      background-image url(https://shadow.elemecdn.com/faas/service-front/static/media/bg.c8e3f1ab.png)
      position relative
      div
        width 100%
        height 160px
        img 
          height 96px
          width 96px
          margin 32px 32px 32px 48px
        p
          width 400px
          height 40px
          padding 8px 12px
          padding-left 20px
          border-radius 6px
          color white
          font-size 25px
          font-weight bold 
          line-height 40px
          margin-left 190px
          margin-top -110px
          background rgba(51,51,51,.15)
        .triangle
            position absolute
            top 65px
            left 160px
            width 0px
            height 0px
            box-sizing border-box
            border 15px solid red
            transform rotate(-90deg)
            border-color  transparent transparent rgba(51,51,51,.15) transparent
    .main
      margin 0 16px
      margin-top -66px
      background white
      width 718px
      height 982px
      position relative
      .list
        width 100%
        height 100%
        displaay flex 
        .list-header
          box-sizing border-box
          padding 32px 32px 0px
          font-size 28px
          color #333333
          p
            font-weight bolder 
        .item
          width 718px
          height 184px
          display flex
          border-bottom 1px solid #eee
          margin 0
          #problem
            span
              width 180px
              height 120px
              font-size 24px
              display inline-block
              line-height 120px
              text-align center
              margin 32px 0
              border-right 1px solid #eee
            .iconfontdayuhao
              margin-left -35px
              margin-bottom 100px
              display inline-block
              position relative
              bottom -3px
          .solve  
            margin-left 230px
            margin-top -210px
            font-size 28px
            color #666666
            dd
              width 490px
              height 90px
              line-height 90px
              box-sizing border-box
              padding-bottom 6px
              &:nth-child(1)
                border-bottom 1px solid #eee
    .footer
      width 100%
      height 120px
      position fixed
      bottom 0
      background white 
      line-height 120px
      box-sizing border-box
      padding 16px 24px
      .btn
        width 701px
        height 88px
        border-radius 8px
        background #00A6FF
        
        line-height 88px
        text-align center
        span 
          color white
          font-size 32px
          font-weight bolder

              




</style>