<template>
  <div>
    <div class="categoryStore" v-if="uuid !== null">
      <ul class="StoreList">
      <li 
        v-show="(restaurantCategoryIds === undefined || restaurantCategoryIds.length === 0) ? 'true' : restaurantCategoryIds.includes(storeItem.restaurant.flavors[0].id)" 
        class="storeItem" 
        v-for="storeItem in storeList" 
        :key="storeItem.restaurant.id"
        @click="toOrderInfo(storeItem.restaurant.id)"
      >
        <!-- 商家详情 -->
        <div class="storeDsec" >
          <div class="image"><img :src="storeItem.restaurant.image"></div>
          <div class="desc">
            <div class="title">
              <h3>{{storeItem.restaurant.name}}</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                :value="storeItem.restaurant.rating"
                :size="6"
                :gutter="8"
                allow-half
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>{{storeItem.restaurant.rating}} 月售{{storeItem.restaurant.recent_order_num}}单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥{{storeItem.restaurant.piecewise_agent_fee.rules[0].price}}起送 | {{storeItem.restaurant.piecewise_agent_fee.description}}</div>
              <div class="distance">{{parseFloat(storeItem.restaurant.distance * 0.001).toFixed(2)}}km | {{storeItem.restaurant.order_lead_time}}分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">{{storeItem.restaurant.flavors[0].name}}</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px" class="van-ellipsis" v-for="active in storeItem.restaurant.activities" :key="active.id">
                <van-tag :type="active.icon_name === '减'? 'danger' : active.icon_name === '特'? 'warning' : 'success' " style="margin-right:10px">{{active.icon_name}}</van-tag>
                {{active.tips}}
              </div>
              <div style="margin-bottom:5px" class="van-ellipsis" v-for="item in storeItem.restaurant.supports" :key="item.id">
                <van-tag color="#666" text-color="#fff" style="margin-right:10px">{{item.icon_name}}</van-tag>
                {{item.description}}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>
    <div v-else class="isLogin">
      <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
      <div class="num">没有结果</div>
      <div class="log">登录后查看更多商家</div>
      <van-button type="primary" @click="toLogin('/login')">登录</van-button>
    </div>
  </div>
</template>
<script>
import { Rate ,Tag ,Empty ,Button } from 'vant'
// import {reqStoreList} from '../../api/index'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name:'storeList',
  props: ['restaurantCategoryIds'],
  data () {
    return {
      value:3, // 评分
      // storeList:[], // 商家列表数组数据
      newStoreList:[], // 筛选出来的商家裂变数据
      uuid:null, // 用户唯一标识
    }
  },
  components: {
    [Rate.name]: Rate,
    [Tag.name]: Tag,
    [Empty.name]: Empty,
    [Button.name]: Button,
  },
  computed: {
    ...mapState({
      storeList:state => state.storeListModule.storeList
    })
  },
  mounted () {
    this.storeListSort()
    this.uuid = localStorage.getItem('UUID_KEY')
  },
  methods: {
    
    // 对综合排序下的选项进行排序
    storeListSort () {
      this.$screen.$on('storeSort',(value)=>{       
        if (value === 1) {
          // 起送价最低
          this.storeList.sort(function (a,b) {
            return a.restaurant.piecewise_agent_fee.rules[0].price - b.restaurant.piecewise_agent_fee.rules[0].price
          })
        }else if (value === 2) {
          // 配送最快  
        }else if (value === 0 || value === 7) {
          this.sort('rating')  
        }else if (value === 5) {
          this.sort('distance')
        }else if (value === 6) {
          this.sort('recent_order_num')
        }
      })
    },

    // 排序筛选
    sort (val) {
      this.storeList.sort(function (a,b) {
        return b.restaurant[val] - a.restaurant[val]
      })
    },

    // 跳转到详情页
    toOrderInfo (navId) {
      this.$router.push({ path: '/orderinfo', query:{listId:navId} })
    },

    // 去登录界面
    toLogin (path) {
      this.$router.push(path)
    }
  }

  
}
</script>
<style scoped lang='stylus'>
   // 商家列表
    .categoryStore
      margin-top 40px
      .StoreList
        margin 20px
        .storeItem
          border-bottom 1px solid  #FCFCFC
          // border-bottom 1px solid  red
          padding-bottom 30px
          margin-top 30px
          .storeDsec
            display flex
            height 130px
            .image
              width 130px
              height 130px
              border 1px solid rgba(0,0,0,.1)
              margin-right 20px
              img 
                width 100%
                height 100%
            .desc
              flex 1
              padding 5px 0
              .title
                display flex
                justify-content space-between
                margin-bottom 20px
                h3
                  font-size 28px
                  color #333
                  font-weight bold
              .score
                text-align left 
                span 
                  padding-left 20px
              .pricAddDis
                display flex
                justify-content space-between
                margin-top 20px
                font-size 24px
                .price
                  color #666
                .distance
                  color #999
          .reductionContainer
            display flex
            margin-top 20px
            // height 138px
            .left
              height 100%
              width 130px
            .reduction
              flex 1
              display flex
              width 138px
              padding-left 20px
              text-align left
              flex-direction column
              justify-content space-between
              .reductionInfo
                border-top 1px dashed #FCFCFC
                padding-top 10px
    .isLogin
      height 600px
      img
        width 200px
        height 200px
      .num
        font-size 35px
        color #6a6a6a
        margin 20px 0
      .log
        color #999
        margin 30px 0
      
      

</style>