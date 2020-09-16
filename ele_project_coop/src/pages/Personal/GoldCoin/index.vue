<template>
  <div class="goldCoinContainer">
    <header class="header">
      <div class="num">
        <span>0</span>
        <div>
          <van-icon class="iconfontdayuhao" name="arrow" />
        </div>
      </div>
      <!-- <div>当前金币<img src="https://iknowpc.bdimg.com/static/common/widget/footer-new/img/icon-guide.85b90bf.svg" alt=""></div> -->
      <!-- <div class="bgt">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAABkCAMAAACyy3u6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURf/////qn//qoP///rzf///++v/pmv/kh//+/P/WRv/khv///f/qo//jg//rpv/sq//YTrrd///pnf/99Pv+///22qHtrv/usv/ol//0zsjk///nj/745P7xwtHp///wu/b8+67wuNX32ubz//vbadzu/8j1z/roqlMMaS0AAAPLSURBVHja7d3bctsgFAVQJBmEkNAFWZVv8iVxkv//w7oaG9SSl07rQ0v2emJ43GEO+EBsBgDwOw5i5Axo8YzN+k1hkD6tw7Up2YyboioZEOpNW/F7+lWbYu2T4psilWwmTYH0aXFR2LWP9IkMH72NPHmkn2DXJdEUgtu1X9tdF+lT4KatbfptI90s0n8+WRfGL/ayxtqnMBd7V3n+jV2X9z1ncfP2V161gtvZhLMg+HYU+71otj2L1+Fx0Elt+jItFukbyQLYCq3VjdabLYsVv7qc3a6bFqk3S0melM7vlI62zSebVnj7qz9LbNIqd/RYxpp+tTzkJ67yGDtLvusOSuVLOtrKwyuXc+KGNn36XZcnOv+J2vQs5rXvR+7NkhlUbtmlH3H6G7fKK2kjt+kbO0vhpL3wm4zFitet4HaYuKEJ0d8vKy98JTiLVulaa9L108p6OftBd62gvPD3PYvP0Psne1M0iyL0GIorZzSk+CLhC1vsm9bY4VXYoStCJ6rws69SdsblpmrscDmbSDaTWcANd8xYfHhaVNKVGzt0s6JoSkZryFX0R03/SFOkn5x5Ulv3qcha/5J9hFXHNRL89kISsr1w+HnpKzWwSPHUu8VyPQU3S2qr1CJ7PbFo8dRrJHh/E0Odfm77mjqfJIuX/LSRwJPlbE1deepca6W0VunAIuXfo5hPh6I9MFrlcKrFpjoNnEVONoVxjYTEv0fhU4AMMikzFjlX1t3rBbybIj/z+K8XUqRPtuva4calL5A+xdpfPM9fvJfFm0Hqpn7TblxT30gGJLuuf69rPhjQ7rou/YwBhTlyd6veM6A981QS6Yfs79vhxCBUl+2AQyYx/nE94WwZDOc44AD8gbLvsWsEMlT7fbLFN2iEMKn5HnDE7k1vUOrx4AmojTqf6QR1n5rcqMcLYzQpqJUC4f8DZQffGEbvkKvHQ0t4qvP58yd/SucTehVPdX6/XN7X/tofhRix7p8re/9288J8Jcr9s50v324uCDqA7B4+ansQ97IDIaxfLpcXLPxQsr8R/fqGQQjrt91qtXtD/AGcd13Xrbpud2ZAbL3rVrNuh7VP7bVb3XVvDGgdb+Fj6YerOhbCR/goO0C74b4yIHbEUTOc9bGbHfEhK4TX4253fCVc9/hlgC+on8R+bya8qAngIPT8iNUgfXK90PlM44fIyE0/sscT4iC4ceHXuP2j1e+V+1kA1B2EHz//C+p1g7JDbPsIX2k8paTGa33PvsF/q5Hrm/lDlhrxISsAOTTCjAMKfiAlkgcAAAAAAPg/fAfJ8j4/TEYE4wAAAABJRU5ErkJggg==" alt="">
          <div class="exchange">
            <div>兑换商品</div>
            <div>好物随心换</div>
          </div>
      </div> -->
    </header>
  </div>
</template>
<script>
import {Icon} from 'vant'
export default {
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
      .bgt
      .num
        width 100%
        color #ffffff 
        box-sizing border-box
        padding 0 38px 0 60px
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
          top 30%
          font-size 30px
          margin-left 10px
          
          
        
</style>