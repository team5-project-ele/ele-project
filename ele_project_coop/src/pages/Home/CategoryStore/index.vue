<template>
  <div class="categoryStoreContainer" style="width:100%">
      <!-- 全部食品分类 -->
      <div class="categoryFoot">
        <ul >
          <li :class="{active:categoryId === item.id}" @click="toCategory(item.id)" v-for="(item,index) in categoryStoreList" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="category"><span class="iconfont icon-down" style="color:#fff"></span></div>
      </div>

      <!-- 综合排序 筛选 -->
      <div class="screen">
        <div class="icon">综合排序<span class="iconfont icon-Downarrow-filled" style="font-size:10px"></span></div>
        <div>距离最近</div>
        <div>销量最高</div>
        <div>筛选<span class="iconfont icon-shaixuan"></span></div>
      </div>

    <!-- 商家列表 -->
    <StoreList />
  </div>
</template>
<script>
import StoreList from '../../../components/StoreList'
import {reqCategoryStore} from '../../../api/index'
export default {
  name:'Category',
  data () {
    return {
      categoryStoreList:[], // 商家商品信息
      categoryId:'', // 每个食品分类的ID
    }
  },
  mounted () {
    this.getCategoryStore()
  },
  methods: {
    //  发送请求，请求商家商品信息数据
    async getCategoryStore () {
      const result = await reqCategoryStore()
      this.categoryStoreList = result.data.category
      this.categoryId = result.data.category[0].id
    },

    // 点击出现相应点击样式，并筛选相应商品
    toCategory (categoryId) {
      this.categoryId = categoryId
    }
  },
  components: {
    StoreList
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
      position fixed
      top 0
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


    // 综合排序 筛选
    .screen
      height 80px
      width 100%
      display flex
      justify-content space-around
      align-items center
      color #666
      background-color #fff
      position fixed
      top 80px
      z-index 100
      div
        font-size 28px
        color #666
    // // 商家列表
    // .categoryStore
    //   // position fixed
    //   // top 160px
    //   // width 100%
    //   margin-top 160px
    //   .StoreList
    //     margin 20px
    //     // position absolute
    //     // top 160px
    //     .storeItem
    //       border-bottom 1px solid  #FCFCFC
    //       // border-bottom 1px solid  red
    //       padding-bottom 30px
    //       margin-top 30px
    //       .storeDsec
    //         display flex
    //         height 130px
    //         .image
    //           width 130px
    //           height 130px
    //           border 1px solid #000
    //           margin-right 20px
    //           img 
    //             width 100%
    //             height 100%
    //         .desc
    //           flex 1
    //           padding 5px 0
    //           .title
    //             display flex
    //             justify-content space-between
    //             margin-bottom 20px
    //             h3
    //               font-size 28px
    //               color #333
    //               font-weight bold
    //           .score
    //             span 
    //               padding-left 20px
    //           .pricAddDis
    //             display flex
    //             justify-content space-between
    //             margin-top 20px
    //             font-size 24px
    //             .price
    //               color #666
    //             .distance
    //               color #999
    //       .reductionContainer
    //         display flex
    //         margin-top 20px
    //         height 138px
    //         .left
    //           height 100%
    //           width 130px
    //         .reduction
    //           flex 1
    //           display flex
    //           width 138px
    //           padding-left 20px
    //           flex-direction column
    //           justify-content space-between
    //           .reductionInfo
    //             border-top 1px dashed #FCFCFC
    //             padding-top 10px

          

</style>