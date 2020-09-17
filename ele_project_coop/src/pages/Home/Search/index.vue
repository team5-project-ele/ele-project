<template>
  <div class="searchContainer">
    <div class="header">
      <div><van-icon name="arrow-left" color="#999" size="26" @click="$router.back()"/></div>
      <!-- 搜索框 -->
      <van-search
        show-action
        placeholder="输入商家，商品名称"
      >
        <template #action>
          <div style="font-size:16px;font-weight:bold;color:#333">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="searchContext">
      <!-- 历史搜索 -->
      <div class="historySearch">
        <div class="header">
          <header>历史搜索</header>
          <van-icon name="delete" color="#cecece" size="16" />
        </div>
        <div class="history">
          <div class="btn">网红手撕烤鸭</div>
          <div class="btn">网红手撕烤鸭</div>
          <div class="btn">111111111</div>
          <div class="btn">网红手撕烤鸭</div>
        </div>
      </div>

      <!-- 热门搜索 -->
      <div class="hotSearch">
        <header>热门搜索</header>
        <div class="hot">
          <div class="hotBtn" v-for="(item,index) in hotSearchList" :key="index">{{item.word}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Search } from 'vant'
import {reqHotSearch} from '../../../api/index'
export default {
  name:'Search',
  data () {
    return {
      hotSearchList:[], // 热门搜索的数组数据
    }
  },
  components: {
     [Search.name]:Search
  },
  mounted () {
    this.getHotSearch()
  },
  methods: {
    //  请求热门搜索的数据
    async getHotSearch () {
      const result = await reqHotSearch()
      console.log(result.data.hot_search)
      this.hotSearchList = result.data.hot_search
    }
  }
}
</script>
<style scoped lang='stylus'>
  .searchContainer
    .header
      margin 10px
      margin-bottom 20px
    .searchContext
      margin 10px
      // 历史搜索
      .historySearch
        .header
          display flex
          justify-content space-between
          header
            font-weight bold
            color #666
            font-size 32px
            margin-left 10px
        .history
          display flex
          flex-wrap wrap
          margin 20px 10px
          .btn
            height 67px
            line-height 67px
            text-align center
            font-size 28px
            background-color #f7f7f7
            color #666
            margin 20px
            padding 0 20px
      .hotSearch
        header
          font-weight bold
          color #666
          font-size 32px
        .hot
          display flex
          flex-wrap wrap
          margin 20px 0
          .hotBtn
            height 67px
            line-height 67px
            text-align center
            font-size 28px
            background-color #f7f7f7
            color #666
            margin 20px
            padding 0 20px
       
</style>