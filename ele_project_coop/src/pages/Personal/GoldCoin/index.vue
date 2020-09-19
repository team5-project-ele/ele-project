<template>
  <div class="goldCoinContainer">
    <!-- 头部 -->
    <header class="header">
      <div class="num">
        <span>0</span>
        <div>
          <van-icon class="iconfontdayuhao" name="arrow" />
        </div>
      </div>
      <div class="goldcoin">
        <span>当前金币</span>
        <div class="iconfont-wenhao">
          <van-icon name="question-o" />
        </div>
      </div>
     
    </header>
    <!-- 标题 -->
    <div class="bgt">
      <div class="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAABkCAMAAACyy3u6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURf/////qn//qoP///rzf///++v/pmv/kh//+/P/WRv/khv///f/qo//jg//rpv/sq//YTrrd///pnf/99Pv+///22qHtrv/usv/ol//0zsjk///nj/745P7xwtHp///wu/b8+67wuNX32ubz//vbadzu/8j1z/roqlMMaS0AAAPLSURBVHja7d3bctsgFAVQJBmEkNAFWZVv8iVxkv//w7oaG9SSl07rQ0v2emJ43GEO+EBsBgDwOw5i5Axo8YzN+k1hkD6tw7Up2YyboioZEOpNW/F7+lWbYu2T4psilWwmTYH0aXFR2LWP9IkMH72NPHmkn2DXJdEUgtu1X9tdF+lT4KatbfptI90s0n8+WRfGL/ayxtqnMBd7V3n+jV2X9z1ncfP2V161gtvZhLMg+HYU+71otj2L1+Fx0Elt+jItFukbyQLYCq3VjdabLYsVv7qc3a6bFqk3S0melM7vlI62zSebVnj7qz9LbNIqd/RYxpp+tTzkJ67yGDtLvusOSuVLOtrKwyuXc+KGNn36XZcnOv+J2vQs5rXvR+7NkhlUbtmlH3H6G7fKK2kjt+kbO0vhpL3wm4zFitet4HaYuKEJ0d8vKy98JTiLVulaa9L108p6OftBd62gvPD3PYvP0Psne1M0iyL0GIorZzSk+CLhC1vsm9bY4VXYoStCJ6rws69SdsblpmrscDmbSDaTWcANd8xYfHhaVNKVGzt0s6JoSkZryFX0R03/SFOkn5x5Ulv3qcha/5J9hFXHNRL89kISsr1w+HnpKzWwSPHUu8VyPQU3S2qr1CJ7PbFo8dRrJHh/E0Odfm77mjqfJIuX/LSRwJPlbE1deepca6W0VunAIuXfo5hPh6I9MFrlcKrFpjoNnEVONoVxjYTEv0fhU4AMMikzFjlX1t3rBbybIj/z+K8XUqRPtuva4calL5A+xdpfPM9fvJfFm0Hqpn7TblxT30gGJLuuf69rPhjQ7rou/YwBhTlyd6veM6A981QS6Yfs79vhxCBUl+2AQyYx/nE94WwZDOc44AD8gbLvsWsEMlT7fbLFN2iEMKn5HnDE7k1vUOrx4AmojTqf6QR1n5rcqMcLYzQpqJUC4f8DZQffGEbvkKvHQ0t4qvP58yd/SucTehVPdX6/XN7X/tofhRix7p8re/9288J8Jcr9s50v324uCDqA7B4+ansQ97IDIaxfLpcXLPxQsr8R/fqGQQjrt91qtXtD/AGcd13Xrbpud2ZAbL3rVrNuh7VP7bVb3XVvDGgdb+Fj6YerOhbCR/goO0C74b4yIHbEUTOc9bGbHfEhK4TX4253fCVc9/hlgC+on8R+bya8qAngIPT8iNUgfXK90PlM44fIyE0/sscT4iC4ceHXuP2j1e+V+1kA1B2EHz//C+p1g7JDbPsIX2k8paTGa33PvsF/q5Hrm/lDlhrxISsAOTTCjAMKfiAlkgcAAAAAAPg/fAfJ8j4/TEYE4wAAAABJRU5ErkJggg==" alt="">
      </div>
      <div class="exchange">
        <h3>兑换商品</h3>
        <div>好物随心换</div>
      </div>
    </div>
    <!-- 列表区域 -->
    <main class="main">
      <ul  class="list">
        <li class="item" v-for="(item,index) in goldCoinContainer" :key="index">
          <p>{{item.title}}</p>
          <div class="price">
            <span>{{item.points_required}}</span>
            <span>金币</span>
            <span>{{item.corner_marker}}</span>
            <div class="img">
              <img :src="item.image_hash">
            </div>
          </div>
        </li>
      </ul>
    </main>
    <!-- 底部查看更多 -->
    <footer class="footer">
      <div @click="toJump('/found/recommend')">
        <span>查看更多</span>
        <van-icon class="iconfontdayuhao" name="arrow" />
      </div>
    </footer>
  </div>
</template>
<script>
import {Icon} from 'vant'
import {reqGetGoldCoin} from '../../../api/index'
export default {
  data(){
    return {
      goldCoinContainer: [],
    }
  },
  mounted(){
    this.getgoldcoindata()  
  },
  methods: {
    async getgoldcoindata(){
      let result = await reqGetGoldCoin()
      this.goldCoinContainer = result.data
    },
    toJump(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .goldCoinContainer
    width 100%
    height 100%
    .header
      background-image: linear-gradient(90deg,#0af,#0085ff)
      width 100%
      height 220px
      .num
        width 200px
        color #ffffff 
        box-sizing border-box
        padding 0 0px 0 60px
        position relative
        
        div
          width 50px
          height 50px
        span 
          line-height 200px
          font-size 84px
          font-weight bolder
        .iconfontdayuhao
          position absolute
          top 85px
          left 105px
          font-size 30px
          margin-left 10px
      .goldcoin
        height 30px
        margin-top 150px
        margin-left -135px
        color #ffffff
        display flex
        sapn 
          height 30px
        .iconfont-wenhao
          margin-left 8px
          margin-top -5px
    .bgt
      width 100%
      height 120px
      background #ffffff
      padding-top 10px
      box-sizing border-box
      .img
         img
          display block
          width 50%
          height 100px
          margin-top 20px
          margin 0 auto 
          text-align center
      .exchange
        margin-top -70px
        margin-left 310px
        h3
          font-size 30px
          color #333333
          font-weight bold
        div 
          color #999999
          margin-top 8px
    .main     
      margin-top 1px
      .list
        display flex
        flex-wrap wrap
        justify-content space-between
        .item
          box-sizing border-box
          padding 20px 28px
          border-right 1px solid #F9F9F9
          border-bottom 1px solid #F9F9F9
          p
            font-size 28px
            color #333333
            margin-bottom 10px
          .price
            span
              &:nth-child(1)
                font-size 26px
                color #ff5339
                font-weight bold
                margin-right 10px
              &:nth-child(2)
                color #999999
                margin-right 10px
              &:nth-child(3)
                background #ff5339
                color #ffffff
                padding 5px
                border-radius 5px
                font-weight bold
          .img
            margin-top 48px
            width 314px
            height 195px
            img
              width 100%
    .footer
      width 100%
      height 80px
      background #ffffff
      div 
        text-align center
        line-height 80px
        color #999999
        span 
          font-size 26px
        .iconfontdayuhao
          display inline-block
          padding-top 10px
          
                

       
        
          
        
</style>