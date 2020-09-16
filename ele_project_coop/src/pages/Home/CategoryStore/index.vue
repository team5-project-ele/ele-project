<template>
  <div class="categoryStoreContainer" style="width:100%">
      <!-- 全部食品分类 -->
      <van-sticky>
        <div class="categoryFoot">
        <ul >
          <li :class="{active:categoryId === item.id}" @click="toCategory(item.id,item.restaurant_category_ids)" v-for="(item,index) in categoryStoreList" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="category"><span class="iconfont icon-down" style="color:#fff"></span></div>
      </div>
      </van-sticky>

      <!-- 综合排序 筛选 -->
      <van-sticky :offset-top="40"><Screen /></van-sticky>
      <!-- <div class="screen">
        <div class="icon">综合排序<span class="iconfont icon-Downarrow-filled" style="font-size:10px"></span></div>
        <div>距离最近</div>
        <div>销量最高</div>
        <div>筛选<span class="iconfont icon-shaixuan"></span></div>
      </div> -->

    <!-- 商家列表 -->
    <StoreList :restaurantCategoryIds="restaurantCategoryIds"/>
  </div>
</template>
<script>
import StoreList from '../../../components/StoreList'
import Screen from '../../../components/Screen'
import {reqCategoryStore} from '../../../api/index'
import { Sticky } from 'vant'
export default {
  name:'Category',
  data () {
    return {
      categoryStoreList:[], // 商家商品信息
      categoryId:'', // 每个食品分类的ID
      restaurantCategoryIds:[], // 每个食品分类地下所属商品的ID数组数据
    }
  },
  mounted () {
    this.getCategoryStore()
  },
  methods: {
    //  发送请求，请求商家商品信息数据
    async getCategoryStore () {
      const result = await reqCategoryStore()
      console.log(result.data.category)
      this.categoryStoreList = result.data.category
      this.categoryId = result.data.category[0].id
    },

    // 点击出现相应点击样式，并筛选相应商品
    toCategory (categoryId,restaurantCategoryIds) {
      this.categoryId = categoryId
      this.restaurantCategoryIds = restaurantCategoryIds
      console.log(restaurantCategoryIds)
    }
  },
  components: {
    StoreList,
    Screen,
    [Sticky.name]: Sticky
  }
}
</script>
<style scoped lang='stylus'>
  .categoryStoreContainer
    // 全部食品分类
    .categoryFoot
      height 80px
      width 100%
      background-color #009BFF
      display flex
      // position fixed
      // top 0
      z-index 999
      ul
        flex 1
        height 100%
        display flex
        overflow-x scroll
        white-space nowrap
        color #ffffff
        padding-left 20px
        margin-right 20px
        li
          font-size 28px
          height 100%
          opacity .7
          line-height 80px
          margin-right 30px
          position relative
          box-sizing border-box
          &.active
            opacity 1
            font-weight bold
            
          &.active::before
            position absolute
            content ''
            width 100%
            height 2px
            left 0
            bottom 0px
            background-color #fff

      .category
        width 90px
        line-height 80px
        text-align center
        box-shadow rgba(0,0,0,.1) -3px 0 10px


    // // 综合排序 筛选
    // .screen
    //   height 80px
    //   width 100%
    //   display flex
    //   justify-content space-around
    //   align-items center
    //   color #666
    //   background-color #fff
    //   position fixed
    //   top 80px
    //   z-index 100
    //   div
    //     font-size 28px
    //     color #666

          

</style>