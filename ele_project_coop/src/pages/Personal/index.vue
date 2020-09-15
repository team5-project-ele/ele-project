 <template>
      <div class="Container">
    <!-- 头部登录+金币+红包 -->
    <header class="header">
      <div class="login">
        <div @touchstart="login" class="center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
          <div class="login-text">
            <h1>登录<span>/</span>注册</h1>
            <div>
              <span class="iconfont icon-shouji"></span>
              <span>登录后享受更多特权</span>
            </div>
          </div>
          <div class="iconfont icon-dayuhao"></div>
        </div>
      </div>
      <div class="classification">
        <div class="Red-envelopes">
          <div class="iconfont icon-hongbao"></div>
          <p>红包</p>
        </div>
        <div class="Gold-coin">
          <div class="iconfont icon-jinbishangcheng"></div>
          <p>金币</p>
        </div>
      </div>
    </header>
    <!-- 其他选项 -->
    <main class="main">
      <ul class="Other-options">
        <li>
          <i class="iconfont icon-weizhi"></i>
          <span>我的地址</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
        <li class="border-bottom">
          <img src="../../../public/images/shop-coin.png"/>
          <span>金币商城</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
        <li>
          <img src="../../../public/images/gift.png"/>
          <span>分享拿20元现金</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
        <li class="border-bottom">
          <i class="iconfont icon-kefu"></i>
          <span>我的客服</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
        <li class="border-bottom">
          <img src="../../../public/images/logo.png"/>
          <span>下载饿了么APP</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
        <li>
          <i class="iconfont icon-guize"></i>
          <span>规则中心</span>
          <i class="iconfont icon-dayuhao"></i>
        </li>
      </ul>
    </main>
    <!-- 底部规则 -->
    <footer class="Privacy-policy">
      <div>隐私政策</div>
    </footer>
    </div>
</template>
<script>

export default {
  name: 'Personal',
  components: {
    
  },
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    login(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Container
    background #F5F5F5
    width 100%
    height 100%

    .header
      .login
        position relative
        width 100%
        height 220px
        background-image: linear-gradient(90deg,#0af,#0085ff);
        box-sizing border-box
        padding 50px 30px
        .center
          display flex
          .login-text
            margin-left 32px
            color #fff
            
            h1
              font-size 42px
              font-weight bolder
              margin-bottom 24px
              margin-top 16px
              span
                font-size 32px
           div
              .icon-shouji
                font-size 20px
              p
                font-size 24px
           .icon-dayuhao
                font-size 20px
                color #fff
                position absolute
                right 28px
                top 100px
          img 
            width 120px
            height 120px
            border-radius 50%
      .classification
        height 162px
        width 100%
        display flex
        .Red-envelopes
          border-right 1px solid  #F5F5F5
        div
          width 50%
          height 162px
          display flex
          flex-direction column
          justify-content center
          background #ffffff
          align-items center
          margin 0 auto
          font-size 24px 
          .icon-hongbao
            background #FF5F3E
          .icon-jinbishangcheng
            background #6AC20B
          

          div
            width 50px
            height 50px
            color #ffffff
            border-radius 50% 
            margin-bottom 14px
            font-size 20px
          
          p
            font-weight bold 
            color #666666

  
  .main
    background #F5F5F5
    width 100%
    margin-top 32px
    .Other-options
      .border-bottom
          border-bottom 1px solid #F5F5F5
      li
        position relative 
        width 100%
        height 90px
        background white
        box-sizing border-box
        padding 28px 20px
        font-size 32px
        color #3333333
        &:first-child
          margin-bottom 24px
        &:nth-child(3)
          margin-bottom 24px
        img  
          width 36px
          margin-right 16px
        i 
          margin-right 20px
          color #4AA5F0

        .icon-dayuhao
          position absolute
          right 0
          top 50%
          transform translate(-50%,-50%)
          color #BBBBBB
          font-size 24px
          font-weight bold 
  .Privacy-policy
    width 100%
    div
      font-size 30px
      color #4DA6F0
      margin-top 40px
      text-align center
</style>