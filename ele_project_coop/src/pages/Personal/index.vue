 <template>
    <div class="Container">
    <!-- 头部登录+金币+红包 -->
      <div v-if="this.isShow" class="personal">
        <header class="header">
          <div  @click="toJump(userName ? `/personalinformation?userName=${userName}&phone=${phone}` : '/login')" class="login">
            <div  class="center">
              <img v-if="!userName" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
              <img v-else src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed" alt="">
              <div class="login-text">
                <h1 v-if="!userName">登录<span>/</span>注册</h1>
                <h1 v-else>{{userName}}</h1>
                <div>
                  <span class="iconfont icon-shouji"></span>
                  <span v-if="!userName">登录后享受更多特权</span>
                  <span v-else>{{phone}}</span>
                </div>
              </div>
              <div class="iconfont icon-dayuhao"></div>
            </div>
          </div>
          <div class="classification">
            <div @click="toJump('/personal/redenvelopes')" class="Red-envelopes">
              <div v-if="!userName" class="iconfont icon-hongbao"></div>
              <div v-else class="num">
                <p  id="red">
                  0
                  <span>个</span>
                </p>
              </div>
              <p>红包</p>
            </div>
            <div @click="toJump('/personal/goldcoin')" class="Gold-coin">
              <div v-if="!userName" class="iconfont icon-jinbishangcheng"></div>
              <div v-else class="num">
                <p  id="green">
                  0
                  <span>个</span>
                </p>
              </div>
              <p>金币</p>
            </div>
          </div>
        </header>
        <!-- 其他选项 -->
        <main class="main">
          <ul class="Other-options">
            <li @click="toJump('/personal/shippingaddress')">
              <i class="iconfont icon-weizhi"></i>
              <span>我的地址</span>
              <i class="iconfont icon-dayuhao"></i>
            </li>
            <li @click="toJump('/found/recommend')" class="border-bottom">
              <img src="../../../public/images/shop-coin.png"/>
              <span>金币商城</span>
              <i class="iconfont icon-dayuhao"></i>
            </li>
            <li @click="toJump('/found/recommendation')">
              <img src="../../../public/images/gift.png"/>
              <span>分享拿20元现金</span>
              <i class="iconfont icon-dayuhao"></i>
            </li>
            <li @click="toJump('/personal/mycustomerservice')" class="border-bottom">
              <i class="iconfont icon-kefu"></i>
              <span>我的客服</span>
              <i class="iconfont icon-dayuhao"></i>
            </li>
            <li class="border-bottom">
              <img src="../../../public/images/logo.png"/>
              <span>下载饿了么APP</span>
              <i class="iconfont icon-dayuhao"></i>
            </li>
            <li @click="toJump('/personal/rule')">
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
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Personal',
  components: {
    
  },
  mounted(){
    // console.log('触发了')
    if(localStorage.getItem('UUID_KEY')){
      let result = localStorage.getItem('UUID_KEY')
      this.A = localStorage.getItem('UUID_KEY')
      this.userName = result.slice(0,12)
    }
    if(localStorage.getItem('PHONE')){
      let userPhone = localStorage.getItem('PHONE')
      userPhone = localStorage.getItem('PHONE').split('')
      userPhone.splice(3,4,'****')
      this.phone = userPhone.join('')
    }
  },
  data(){
    return {
      userName: '',
      phone:'',
    }
  },
  methods: {
    toJump(path){
      this.$router.push(path)
    }
  },
  computed:{
    isShow(){
      let result =  this.$route.path === '/personal' ? true : false;
      return result 
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
          .num
            p 
              font-size 52px
              font-weight bold
              // color #FF5F3E
              margin-top 60px
              display inline-block
              span
                font-size 12px
                margin-left 30px
                position relative
                bottom 55px
            #red
              color #FF5F3E
            #green
              color #6AC20B



          

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