<template>
  <div class="ShippingAddressContainer">
    <!-- 标题 -->
    <header class="title">
      <div @click="goback" class="iconfontxiaoyuhao">
        <van-icon name="arrow-left" />
      </div>
      <h1>我的地址</h1>
    </header>
    <main class="main">
      <ul class="list">
        <li class="item">
          <div class="userInfo">
            <span>张涛</span>
            <span>先生</span>
            <span>16606972650</span>
          </div>
          <div class="address">
            中车小镇4号楼1505
          </div>
          <div class="function">
            <div class="modify">
              <van-icon name="edit" />
            </div>
            <div class="delete">
              <van-icon name="cross" />
            </div>
          </div>
        </li>
         <li class="item">
          <div class="userInfo">
            <span>张涛</span>
            <span>先生</span>
            <span>16606972650</span>
          </div>
          <div class="address">
            佐爵网咖三楼
          </div>
          <div class="function">
            <div class="modify">
              <van-icon name="edit" />
            </div>
            <div class="delete">
              <van-icon name="cross" />
            </div>
          </div>
        </li>
      </ul>
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <div class="newlyadded">
        <div class="add">
          <van-icon class="iconfontjiahao" name="add-o" />
          <span>新增收获地址</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import icon from 'vant'
export default {
  data(){
    return {

    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ShippingAddressContainer
    wdith 100%
    heigh 100%
    background #F5F5F5
    .title
      width 100%
      height 88px
      background-image: linear-gradient(90deg, #0af,#0085ff)
      display flex
      color #ffffff
      line-height 88px
      .iconfontxiaoyuhao
        margin-top 6px
        margin-left 30px
        font-size 35px
        width 50px
        height 50px 
      h1
        margin-left 230px
        font-size 36px
        font-weight bolder
    .main     
      margin 0
      .list
        widht 100%
        background #F5F5F5
        .item
          box-sizing border-box
          padding 30px
          height 139px
          background #ffffff
          margin-bottom 5px
          display flex
          position relative
          .userInfo
            font-size 35px
            span
              &:nth-child(1)
                color #333333
                font-weight bold
                margin-right 10px
              &:nth-child(2)
                margin-right 10px
          .address
            position absolute 
            bottom 30px
            font-size 28px
            color #666666
          .function
            font-size 40px
            display flex
            color #999999
            position absolute
            right 30px
            top 50%
            transform translate(0,-50%)
            div
              margin-right 20px
    .footer      
      width 100%
      height 104px
      border-top 1px solid #dddddd
      background #ffffff
      position fixed
      bottom 0
      display flex
      justify-content center
      font-size 32px
      color #3190E8
      display flex
      line-height 104px
      .iconfontjiahao
        margin-right 10px
        position absolute
        top 50%
        left 30%
        transform translate(0,-50%)
        display inline-block
        font-size 45px
       
          
        
</style>