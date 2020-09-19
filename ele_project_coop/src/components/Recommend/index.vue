<template>
  <div class="recommendContainer">
    <!-- 头部导航 -->
    <div class="header">
      <!-- 左侧的金币 -->
      <div class="conic" >
        <a href="javascript:;">
          <i class="icon"></i>
          <span class="num">0</span>
          <span class="title">金币</span>
        </a> 
      </div>
      <!-- 右侧的兑换记录 -->
       <div class="conic">
        <a href="javascript:;">
          <i class="icon"></i>
          <span class="title">兑换记录</span>
        </a> 
      </div>
    </div>
    <!-- 头部分类 -->
    <div class="content">
      <!-- 左侧鼠标套餐 -->
      <div class="Keyboard">
        <img src="./image/crwugjcwol.jpg" alt="键鼠套装">
      </div>
      <!-- 右侧上下结构 -->
      <div class="right">
        <div class="onusfmp">
          <img src="./image/onusfmp.jpg" alt="">
        </div>
        <div class="sromdt">
          <img src="./image/sromdt.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 产品展示区 -->
    <ul class="exhibition" >
      <li class="exhibitionItem" v-for="(item,index) in operatingList.list" @click="showItem(index)" :key="item.id">
        <img :src="(item.image)" alt="">
        <p class="title">{{item.title}}</p>
      </li>
    </ul>
     <!-- 产品兑换区 -->
     <ul class="exchange">
      <li class="exchangeItem" v-for="(item,index) in goldCoinMallList.list" :key="item.id">
        <div class="ImgItem">
          <img :src="(item.image)" alt="">
        </div>
        <!-- 文字价格兑换区 -->
        <div class="titleItem">
          <p class="title">
            {{item.title}}</p>
          <p class="price">{{item.titleDownTxt}}</p>
          <button class="btn">兑换</button>
        </div>
      </li>
    </ul >
    
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default{
  name:'Recommend',
  data(){
    return{

    }
  },
  mounted (){
    this.getOperatingListAction()
    this.getGoldCoinMallListAction()
  },
  methods: {
    ...mapActions({
      getOperatingListAction:'getOperatingListAction',
      getGoldCoinMallListAction:'getGoldCoinMallListAction'
    }),
    // 点击查看详情
    showItem(navIndex){
      this.$router.push({
        path:'/found/details',
        query:{
          navIndex
        }
      })
    }
  },
  computed: {
    ...mapState({
      operatingList: state => state.operatingModule.operatingList,
      goldCoinMallList: state => state.goldCoinMallModule.goldCoinMallList
    })
  }
}
</script>
<style lang="stylus">
.recommendContainer
  position relative
  .header
    position fixed
    display flex
    height 100px
    line-height 100px
    background #fff
    z-index 100
    width 100%
    .conic
      width 50%
      height 100px
      &:after
        position absolute
        top 10px
        right 50%
        content ''
        width 1px
        height 80px
        background #ededed
      a
        display flex
        justify-content: center;
        align-items: center;
        width 185px
        height 100px
        margin 10px 40px
        .icon
          display inline-block
          width 40px
          height 40px
          background-image url(./image/conic.jpg)
          background-size cover
        .num
          color #ff5500
          font-size 24px
          line-height 100px
          margin-left 10px
        .title
          font-size 22px
          color #333
          margin-left 10px 
  .content
    width 100%
    height 260px
    padding  125px 0 25px
    display flex
    background #ededed
    .Keyboard
      position relative
      width 46%
      height 260px
      padding 0 0 0 25px
      &:after
        position absolute
        top 15px
        right 0
        content ''
        width 1px
        height 230px
        background #eee
      img
        width 100%
        height 100% 
    .right
      width 47%
      height 260px   
      .onusfmp
        position relative
        widows 100%
        height 50%
        &:after
          content ''
          position absolute
          bottom 0
          left 5%
          height 1px
          width 90%
          background #ededed
        img
          width 100%
          height 100%
      .sromdt
        widows 100%
        height 50%
        img
          width 100%
          height 100% 
  .exhibition
    display flex
    flex-flow row wrap 
    justify-content space-around
    align-items center
    background #fff
    height 900px
    .exhibitionItem
      width 43%
      height 250px
      border 1px #ededed solid
      border-radius 10px
      img 
        width 100%
        height 80%
      .title
        height 50px
        text-align center
        font-size 26px
        line-height 50px
  .exchange
    display flex
    flex-wrap wrap
    justify-content space-between
    .exchangeItem
      width 50%
      height 395px
      margin 10px 0
      box-sizing border-box
      border-bottom 1px solid #ededed
      border-right 1px solid #ededed
      .ImgItem
        width 100%
        height 230px
        margin 0 auto
        img 
          width 100%
          height 100%
      .titleItem
        position relative
        box-sizing border-box
        height 150px
        padding 0 0 0 30px
        .title
          height 60px
          line-height 60px
          font-size 26px
          // 单行文本溢出隐藏显示省略号
          overflow hidden
          white-space nowrap
          text-overflow ellipsis  
        .price
          height 45px
          line-height 45px  
          font-size 24px
          color red
        .btn
          position absolute
          right 30px
          bottom 5px
          width 100px
          height 40px
          border-radius 35px
          text-align center
          line-height 40px
          font-size 24px
          color red
          border 1px solid red
          background-color:transparent;
 
          
</style>