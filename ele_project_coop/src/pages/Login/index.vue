<template>
  <div class="login-Container">
    <div class="wrap">
      <div class="login-logo">
      <img src="https://gw.alicdn.com/tfs/TB1kHnqpcKfxu4jSZPfXXb3dXXa-750-192.png" alt="">
      </div>
      <div class="userInfo">
        <input class="user-Input" @input="handleInput(true)"  v-model="phone" placeholder="手机号"/>
        <input class="user-Input"  @input="handleInput(false)"  v-model="code" placeholder="验证码"/>
        <button :class="{grey:handleDisabled}" :disabled="handleDisabled" class="Get-validation" @click="handleCode">获取验证码</button>
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
import {Toast} from 'vant'
import {reqGetCaptcha} from '../../api/index'
export default {
  name: 'Login',
  components: {
    [Toast.name]:Toast
  },
  data(){
    return {
      A: '《用户服务协议》',
      B: '《隐私权政策》',
      phone: '',
      code: '',
      captcha: 0,
    }
  },
  mounted(){
    this.phone = ''
    this.captcha = 0
  },
    methods: {
      handleInput(flag){
        if(flag){
          

        }
      },
      handleLogin(){
        const {phone, code, captcha} = this
        let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}/;
        if(!phone){ // 未输入手机号&验证码
          Toast({
                message: '请填写手机号',
                position: 'bottom',
              })
          
        }else{
          if(!phoneReg.test(phone)){
            Toast({message: '手机号不正确', position: 'bottom'})
          }else{ // 验证码是否匹配
            if(code>>>0 === captcha){
              // 登录成功
              this.$router.replace({path:`/personal?phone=${phone}`})
            }else{
              Toast({message: `验证码不正确，请重新输入，验证码为:${captcha}`, position: 'top'})
            }
          }
        }
      },
      async handleCode(){
        // this.captcha = 0
        let result  = await reqGetCaptcha()
        let CAPTCHA = result.data
        this.captcha = CAPTCHA

        Toast({message:`验证码${CAPTCHA}`, position: 'top'})
      }
    },
    computed: {
      handleDisabled(){
        let flag = true;
        if(this.phone.length === 11){
          // 手机号为11位数，
          flag = false
        }else{
          flag = true
        }
        return flag
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
          outline-color #02B6FD
          border-radius 10px
          &:first-child
            margin-bottom 30px
        .Get-validation
            position absolute
            top 230px
            right 100px
            background #ffffff
            border none
        .grey
          color #CCCCCC
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
        margin-top 30px
        padding 0 0px
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