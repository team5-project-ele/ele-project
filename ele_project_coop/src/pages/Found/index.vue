<template>
    <div class="goldCoinContainer">
    <!-- 头部区域 -->
    <a class="header" v-show="!uuid">
      <!--左侧金币 -->
      <div class="goldCoin" @click="gorecommend">
        <p class="title">金币商城</p>
        <p class="tips">0元好物在这里</p>
        <img class="icon" src="./image/1.webp">
      </div> 
      <!-- 右侧推荐和优惠 -->
      <div class="right">
        <!-- 上面推荐 -->
        <div class="recommend" @click="gorecommendation">
          <p class="title">推荐有奖</p>
          <p class="tips">20元现金拿不停</p>
          <img class="icon" src="./image/2.webp" alt="">
        </div>
        <!-- 下面优惠 -->
        <div class="discount" @click="goperiphery">
          <p class="title">周边优惠</p>
          <p class="tips">领取口碑好券</p>
          <img class="icon" src="./image/3.webp" alt="">
        </div>
      </div>
    </a>
    <div class="main">
      <!-- 限时好礼 -->
      <div class="ceremony" @click="gorecommend">
        <span class="left"></span>
        <van-icon class="icon" name="underway-o" />
        <p class="title">限时好礼</p>
        <span class="right"></span>
      </div>
      <p class="tips">金币换豪礼</p>
      <!-- 轮播图 -->
      <div class="gutter">
        <div class="grid-content"  v-for="(item,index) in firstScreenData" @click="godetails(index)" :key="index">
          <img :src="(item.image_hash)" alt="">  
          <p class="title">{{item.title}}</p>
          <div class="pirce">
            <span class="coin">{{item.points_required}}金币</span>
            <s class="original">￥{{item.original_price}}</s>
          </div>
        </div>
      </div>
      <!-- 查看更多 -->
      <p class="activity-more" @click="gorecommend">查看更多 > </p>
    </div>
  </div> 
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Found',
  data(){
    return {
      uuid:null
    }
  },
  mounted (){
    
    this.uuid = localStorage.getItem('UUID_KEY') 
    // console.log(this.uuid)
    // 调用action，拿到数据
    this.getFirstScreenDataAction()
    // console.log(this.firstScreenData)
  },
  methods:{
    ...mapActions({
      getFirstScreenDataAction:'getFirstScreenDataAction'
    }),
    // 跳转到指定文件
    godetails(navIndex){
      // console.log(navIndex)
      this.$router.push({
        path:'/found/details',
        query:{
          navIndex  
        }
        
      })
    },
    //去金币商城
    gorecommend(){
      this.$router.push({
        path:'/found/recommend'
      })
    },
    // 去推荐有奖
    gorecommendation(){
      this.$router.push({
        path:'/found/recommendation'
      })
    },
    // 去周边优惠
    goperiphery(){
      this.$router.push({
        path:'/found/periphery'
      })
    } 
  },
  computed:{
    ...mapState({
      firstScreenData: state => state.firstScreenModule.firstScreenData
    })
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  ::-webkit-scrollbar {
   height: 0;
 }
.goldCoinContainer
  height calc(100vh)
  background #f5f5f5
  .header
    display flex
    height 320px
    width 100%
    box-sizing border-box
    background #FFF
    .title
        font-size 32px
        color #FF9900
        padding-bottom 12px
    .tips
        font-size 24px
        color #999
    .goldCoin
      position relative
      width 50%
      height 100%
      border-right 1px solid #ededed
      box-sizing border-box
      padding 40px    
      .icon
        position absolute
        bottom 15px
        right 20px
        float right
        width 150px 
        height 150px

    .right
      width 50%
      height 100%
      .recommend
        box-sizing border-box
        height 160px
        position relative
        padding 40px
        border-bottom 1px solid #ededed  
        .title
          color #1BA9E1
        .icon
          position absolute
          right 30px 
          top 30px 
          float right
          width 90px 
          height 90px
      .discount
        box-sizing border-box
        height 80px
        position relative
        padding 40px
        .title
          color #ED6660
        .icon
          position absolute
          right 30px 
          top 30px 
          float right
          width 90px 
          height 90px  
.main
  margin-top 20px
  background #fff
  .ceremony
    box-sizing border-box
    width 100%
    height 82px
    display flex
    padding 35px 35px 0 35px
    justify-content center
    .left
      position relative
      top 22px
      right 16px
      width 30px
      height 2px 
      background black 
      &:after
        content ''
        position absolute
        right -10px
        top -2px
        width 10px
        height 10px
        border-radius 50%
        background black
    .right
      position relative
      top 22px
      left 16px
      width 30px
      height 2px 
      background black 
      &:after
        content ''
        position absolute
        left -10px
        top -2px
        width 10px
        height 10px
        border-radius 50%
        background black    
    .icon
      color red
      font-size 40px
      margin 0 5px 25px 0
    .title
      font-size 36px
      font-weight 700
      line-height 40px
  .tips
    font-size 18px
    text-align center
    color #999
    margin-bottom 30px
  .gutter
    height 380px
    display -webkit-box
    overflow-x scroll
    -webkit-overflow-scrolling touch
    padding-left 30px 
    .grid-content 
      border-radius: 4px;
      width 220px
      height 240px
      margin-right 16px
      img
        width 95%
        height 100% 
        border 1px solid #ededed
      .title
        font-size 24
        font-size 24px
        margin 20px 0
        color #333
        overflow hidden
        white-space nowrap
        text-overflow ellipsis    
      .pirce
        display flex
        height 48px
        .coin
          font-size 14px 
          color #FF5339
        .original
          font-size 24px
          color #999
          margin-left 5px
      .spill
        overflow hidden
        white-space nowrap 
        text-overflow ellipsis
  .activity-more
    font-size 28px
    color #999
    height 67px
    line-height 67px
    text-align center        
</style>
