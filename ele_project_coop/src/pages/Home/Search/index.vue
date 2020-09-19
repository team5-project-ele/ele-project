<template>
  <div class="searchContainer">
    <van-sticky>
      <div class="header" style="background-color:#fff;">
        <div ><van-icon name="arrow-left" color="#999" size="26" @click="$router.back()"/></div>
        <!-- 搜索框 -->
        <van-search
          show-action
          placeholder="输入商家，商品名称"
          @search="onSearch"
          v-model="msg"
        >
          <template #action>
            <div style="font-size:16px;font-weight:bold;color:#333" @click="toSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </van-sticky>
    

     <!-- 点击搜索后显示对应商家 -->
    <div v-if="keyword">
      <!-- 综合排序 筛选 -->
      <van-sticky :offset-top="90"><Screen /></van-sticky>
      
      <!-- 商家列表 -->
      <StoreList/>
    </div>

    <!-- 搜索前显示历史搜索和热门搜索 -->
    <div class="searchContext" v-else>
      <!-- 历史搜索 -->
      <div class="historySearch" :class="{isShow:delHist}" >
        <div class="header">
          <header>历史搜索</header>
          <van-icon name="delete" color="#cecece" size="16" @click="delHistory" />
        </div>
        <div class="history">
          <div class="btn" v-for="(item,index) in historyList" :key="index">{{item}}</div>
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
import { Search ,Sticky} from 'vant'
import {reqHotSearch} from '../../../api/index'
import Screen from '../../../components/Screen'
import StoreList from '../../../components/StoreList'
import {mapState} from 'vuex'
export default {
  name:'Search',
  data () {
    return {
      hotSearchList:[], // 热门搜索的数组数据
      msg:'', // 输入框随时输入的文本数据
      keyword:'', // 点击搜索或者enter键时得到的文本信息
      delHist:false, // 是否清除历史搜索
    }
  },
  components: {
    [Search.name]:Search,
    Screen,
    StoreList,
    [Sticky.name]: Sticky
  },
  mounted () {
    this.getHotSearch()

  },
  computed: {
    ...mapState({
      historyList:state => state.storeListModule.historyList
    })
  },
  methods: {
    //  请求热门搜索的数据
    async getHotSearch () {
      const result = await reqHotSearch()
      this.hotSearchList = result.data.hot_search
    },

    // 键盘回车时触发的回调
    onSearch (msg) {
      this.keyword = msg
      this.$store.dispatch('screenStoreAction',{msg})
      this.$store.dispatch('changeHistoryListAction',{msg})
      this.delHist = false
    },

    // 点击搜索按钮时触发的回调
    toSearch () {
      const msg = this.msg
      this.keyword = msg
      // this.historyList.push(msg)
      this.$store.dispatch('changeHistoryListAction',{msg})
      this.$store.dispatch('screenStoreAction',{msg})
      this.delHist = false
    },

    // 点击历史搜索右侧的删除按钮后，会清除历史记录
    delHistory () {
      this.delHist = true
      this.$store.commit('clearHistory')
    }
  }
}
</script>
<style scoped lang='stylus'>
  .searchContainer
    .header
      padding 10px
      padding-bottom 20px
    .searchContext
      margin 10px
      // 历史搜索
      .historySearch
        &.isShow
          display none
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