<template>
  <div class="personalContainer">
    <!-- 头部 -->
    <header class="header">
      <div class="headPortrait">头像</div>
      <div class="img">
        <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed" alt="">
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </header>
    <main class="main">
      <div class="userName">
        <p class="name">用户名</p>
        <div>
          <span>{{this.$route.query.userName}}</span>
          <span class="iconfontdayuhao">
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
    </main>
    <div class="grey">账号绑定</div>
    <div class="phone">
      <span class="iconfont icon-shouji"></span>
      <span>手机</span>
      <span>{{this.$route.query.phone}}</span>
      <span>
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="grey">安全设置</div>
    <div class="loginPossword">
      <span>登录密码</span>
      <span>未设置</span>
      <span>
        <van-icon name="arrow" />
      </span>
    </div>
    <footer @click="signOut" class="footer">
      <p>退出登录</p>
    </footer>

   
  </div>
</template>
<script>
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    
  },
  methods: {
    signOut(){
      // console.log('点击了')
      localStorage.removeItem('UUID_KEY','PHONE')
      localStorage.removeItem('PHONE')
      this.$router.push('/personal')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .personalContainer
    background #F5F5F5
    width 100%
    height 100%
    font-size 32px 
    color #333333
    .header
      background white
      height 160px
      display flex
      .headPortrait
        width 100px
        font-weight bold
        padding-left 28px
        line-height 160px
      .img
        height 160px
        display flex
        margin-left 445px
        margin-top 20px
        img
          width 120px
          height 120px
          border-radius 50%
        span
          line-height 140px
          margin-left px
          color #C5C5C5
      .userName
        flex none
    .main
      margin-top 0
      border-top 1px solid #F9F9F9
      width 100%
      height 101px
      box-sizing border-box
      padding 28px
      .userName
        .name
          font-weight bold
          width 100px
        div
          color #6F6F6F
          margin-left 460px
          margin-top -30px
          span
            &:last-child
              width 36px
              height 36px
              display inline-block
              margin-right -10px
              color #C5C5C5
              position relative
              top 8px
    .grey
      height 28px
      background #f5f5f5
      font-size 24px
      margin 32px 0 14px 28px
      color #999999
    .phone 
      width 100%
      height 101px
      background white
      padding 28px
      display flex
      box-sizing border-box
      line-height 59px
      span
        &:nth-child(1)
          color #0097ff
        &:nth-child(2)
          margin-left 10px
          font-weight bold
        &:nth-child(3)
          margin-left 370px
          color #898989
        &:nth-child(4)
          margin-left 10px
          margin-top 4px
          color #C5C5C5
    .loginPossword
      width 100%
      height 101px
      background white
      line-height 59px
      box-sizing border-box
      padding 28px
      span
        
        &:nth-child(2)
          margin-left 420px
          color #0097ff
        &:nth-child(3)
          margin-left 10px
          color #C5C5C5
          position relative
          top 6px
    .footer
      width 100%
      height 98px
      background white
      box-sizing border-box
      padding 28px 0
      margin 40px 0
      text-align center
      line-height 54px
      p
        margin 0 auto
        font-weight bold
        color #ff5339
        
</style>