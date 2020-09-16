// 首页
<template>
  <div id="firstPageContainer">
    <!-- 头部定位和搜索框 -->
    <div class="header">
      <div class="address el-icon-location-outline">华北理工大学</div>
      <!-- <input placeholder="搜索饿了么商家，商品名称" class="search">
        <van-icon name="search" />
      </input> -->
      <!-- <van-search placeholder="搜索饿了么商家，商品名称" class="search" background="#0091FF" ></van-search> -->
      <div class="search">
        <span class=" iconfont icon--search">搜索饿了么商家，商品名称</span>
      </div>
    </div>
    <div class="firstPageContext">
      <!-- 分类区 -->
      <div class="navFood">
        <div class="navItem" v-for="navItem in classificationFood" :key="navItem.id" @click="toPath">
          <img :src="navItem.image">
          <span>{{navItem.name}}</span>
        </div>
      </div>

      <!-- 活动栏内容 -->
      <div class="activityContext">
        <div class="setMeal">
          <div class="mealDesc">
            <h3>品质套餐</h3>
            <div class="desc">搭配齐全吃得好</div>
            <div class="buy">立即抢购 ></div>
          </div>
          <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" alt="" class="mealImg">
        </div>
        <!-- 超级会员 -->
        <div class="superMember">
					<div class="MemberLeft">
            <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" alt="">
            <span class="super">超级会员</span>
            <span class="desc">每月领20元红包</span>
          </div>
          <div class="openMember">限时6元开通 ></div>
				</div>
      </div>

      <!-- 推荐商家 -->
      <div class="recommedStore">
        <span class="store">推荐商家</span>
        <StoreList />
      </div>
    </div>
    
  </div>
</template>
<script>
import {reqFirstPageInfo} from '../../api/index'
import { Search ,Button } from 'vant'
import StoreList from '../../components/StoreList'
export default {
  name:'Home',
  components: {
    [Search.name]: Search,
    StoreList
  },
  data () {
    return {
      classificationFood:[], // 美食分类的数组数据
    }
  },
  mounted () {
    this.getFirstPage()
  },
  methods: {
    async getFirstPage () {
      const result = await reqFirstPageInfo()
      this.classificationFood = result.data.classification.entries
    },

    // 点击美食，跳转到具体页面
    toPath () {
      this.$router.push('/categorystore')
    }
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .header
    background #0091FF
    padding 20px
    .address
      font-size 35px
      font-weight bold
      color #ffffff
      height 40px
    .search
      width 99%
      height 72px
      text-align center
      line-height 72px
      color #999
      font-size 28px
      background-color #ffffff
      margin-top 20px 
  .firstPageContext
    margin 0 20px
		// 分类区
    .navFood
      display flex
      height 354px
      flex-wrap wrap
      margin-bottom 40px
      .navItem
        width 20%
        display flex
        flex-direction column
        justify-content center
        align-items center
        img 
          width 12vw
          height 12vw
        span
          font-size 24px
    // 活动栏内容区
    .activityContext
      .superMember
        width 100%
        height 80px
        display flex
        justify-content space-between
        align-items center
        background-color #F7E3AD
        .MemberLeft
          margin-left 20px
          img 
            vertical-align bottom
            width 34px
            height 34px
          .super
            color #644f1b
            font-weight bold 
            font-size 28px
            margin 0 10px
          .desc
            font-size 24px
            color #644f1b
        .openMember
          font-size 24px
          color #644f1b
      .setMeal
        width 100%
        margin-bottom 10px
        background-color #f8f8f8
        display flex
        justify-content space-between
        align-items center
        height 220px
        img
          width 282px
          height 188px
          padding-right  40px
        .mealDesc
          padding-left  40px
          h3
            color #333333
            font-weight bold
            font-size 40px
          .desc
            color #777777
            font-size 30px
            margin 20px 0
          .buy
            color #af8260
            font-size 28px
    // 推荐商家
    .recommedStore
      position relative
      width 100%
      height 72px
      text-align center
      .store
        position relative
        line-height 72px
        font-size 0.4rem
        display inline-block
        &::before,
        &::after
          position absolute
          content ''
          width 50px
          height 1px
          background-color #999
        &::before
          left -70px
          top 36px
        &::after
          right -70px
          top 36px

				
</style>