<template>
  <div class="login-Container">
    <div class="wrap">
      <div class="login-logo">
      <img src="https://gw.alicdn.com/tfs/TB1kHnqpcKfxu4jSZPfXXb3dXXa-750-192.png" alt="">
      </div>
      <div class="userInfo">
        <input class="user-Input" @input="handleInput(true)"  v-model="phone" placeholder="手机号"/>
        <input class="user-Input"  @input="handleInput(false)"  v-model="code" placeholder="验证码"/>
        <button disabled class="Get-validation">获取验证码</button>
      </div>
      <div class="Service-agreement">
        新用户登录即自动注册，并表示已同意
        <span class="user-Service-agreement">{{A}}</span>
        &nbsp;&nbsp;和&nbsp;&nbsp;
        <span class="privacy-Privacy">{{B}}</span>
      </div>
      <div class="login">
        <button @click="handleLogin">登录</button>
        <!-- <el-button type="primary" round>登录</el-button> -->
      </div>
      <footer class="Other-information">
        <span>关于我们</span>
      </footer>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data(){
    return {
      A: '《用户服务协议》',
      B: '《隐私权政策》',
      phone: '',
      code: '',
    }
  },
    methods: {
      handleInput(flag){
        if(flag){
          // this.phone.length === 11 ?  :

        }
      },
      handleLogin(){
        const {phone, code} = this
        if(phone && code){ // 未输入手机号&验证码
          
        }else{
          console.log('验证')
        }
        console.log('点击登录')
      }
    }
}
</script>

<style lang="stylus" scoped>
  .login-Container
    width 100%
    .wrap
      width 600px
      padding-top 80px
      display flex
      flex-direction column
      margin 0 auto
      .userInfo
        
        .user-Input 
          position relative
          width 600px
          height 100px
          box-sizing border-box
          border 1px solid #DDDDDD
          padding-left 20px
          outline-color:#02B6FD; 
          &:first-child
            margin-bottom 14px
        .Get-validation
            position absolute
            top 220px
            right 100px
            background #ffffff
            border none
      .login-logo 
        width 326px
        height 70px
        margin 0 auto
        text-align center
        margin-bottom 40px
        img 
          height 100%
          height 100%
      .Service-agreement
        margin-top 20px
        padding 0 15px
        font-size 28px
        color #999999
        span 
          color #02B6FD
      .login
        width 600px
        
        button
          width 100%
          height 84px
          background #02B6FD
          color #ffffff
          border none 
          border-radius 40px
          margin-top 60px
          outline none
          &:active
            background #4CD964
      .Other-information
        margin 40px auto
        span  
          color #999999
          font-size 24px
</style>