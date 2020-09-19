// 首页
<template>
<div style="position:relative;height:100%;width:100%;overflow:hidden">
  <!-- 首页 -->
   <div id="firstPageContainer"   style="overflow-y:scroll">
      <!-- 头部定位和搜索框 -->
      <div class="header" @click="toLocation">
        <div class="address iconfont icon-icon-dingwei">华北理工大学 <span class="iconfont icon-Downarrow-filled"></span></div>
        <van-sticky>
          <div class="search" @click="toPath('/search')">
            <div class="sea">
              <span class=" iconfont icon--search">搜索饿了么商家，商品名称</span>
            </div>
          </div>
        </van-sticky>
      </div>
      <div class="firstPageContext" >
        <!-- 分类区 -->
        <div class="navFood">
          <div class="navItem" v-for="navItem in classificationFood" :key="navItem.id" @click="toPath('/categorystore')">
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
          <van-sticky :offset-top="56"><Screen /></van-sticky>
          <StoreList />
        </div>
      </div>
      
    </div>

  <!-- 定位位置 -->
  <div class="locationContainer" :class="{active:showLocation === true}">
    <header>
      <div @click="topage" class="iconfont icon-next-copy" style="font-size:18px"> </div>
      <div style="font-size:19px">选择收货地址</div>
      <div style="font-size:16px">新增地址</div>
    </header>
    
    <div class="location">
      <div>唐山<span class="iconfont icon-Downarrow-filled" style="margin:5px 0 0 5px"></span></div>
      <van-search class="searInput" v-model="address" placeholder="请输入地址" />
    </div>

    <!-- 当前地址 -->
    <div class="currentAdd">
      <h3>当前地址</h3>
      <div class="current">
        <div class="name">华北理工大学</div>
        <div class="loca">重新定位</div>
      </div>
    </div>

    <!-- 收货地址 -->
    <div class="ShippingAdd">
      <h3>收获地址</h3>
      <van-address-list
        :list="list"
        class="ship"
        @select="topage"
      />
    </div>
  </div>
</div>
 
</template>
<script>
import {reqFirstPageInfo} from '../../api/index'
import { Search ,Button ,Sticky ,Toast ,AddressList } from 'vant'
import StoreList from '../../components/StoreList'
import Screen from '../../components/Screen'
export default {
  name:'Home',
  components: {
    [Search.name]: Search,
    [Sticky .name]: Sticky ,
    [Toast.name]: Toast,
    [AddressList.name]: AddressList ,
    StoreList,
    Screen
  },
  data () {
    return {
      classificationFood:[], // 美食分类的数组数据
      showLocation:false, // 是否显示地址部分
      address:'', // 输入的地址
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '陈艺飞',
          tel: '18332781586',
          address: '华北理工大学',
          isDefault: false,
        }
      ],
      getAdd:'', // 得到地址数据
    }
  },
  mounted () {
    this.getFirstPage()
    this.$store.dispatch('getStoreListAction')
    if (!this.getAdd) {
      this.showLocation = true
    }
  },
  methods: {
    async getFirstPage () {
      const result = await reqFirstPageInfo()
      this.classificationFood = result.data.classification.entries
    },

    // 点击美食，跳转到具体页面
    toPath (path) {
      this.$router.push(path)
    },

    // 点击跳转到地址信息部分
    toLocation () {
      this.showLocation = true
    },

    // 点击跳转到首页
    topage () {
      this.showLocation = false
      this.getAdd = '华北理工大学'
    }
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  #firstPageContainer
    height 100%
    width 100%

    .header
      background #0091FF
      .address
        font-size 35px
        font-weight bold
        color #ffffff
        height 40px
        padding 30px 0 20px 20px
      .search
        width 100%
        height 112px
        color #999
        background-color #0091FF
        padding 20px 20px
        box-sizing border-box
        display flex
        .sea
          background-color #fff
          font-size 28px
          height 72px
          width 100%
          text-align center
          line-height 72px
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
  .locationContainer
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 100%;
    width: 100%;
    height: 100%;
    background-color #F4F4F4 
    transition: all 1s;
    &.active
      margin-left: 0;
    header
      background-color #00A1FF
      color #fff
      height 88px
      display flex
      justify-content space-between
      align-items center
      padding 10px 30px
      box-sizing border-box
    .location
      display flex
      height 112px
      align-items center
      padding 10px 30px
      box-sizing border-box
      background-color #fff
      .searInput
        flex 1
    .currentAdd
      margin-top 25px
      h3
        color #666
        font-size 26px
        margin-bottom 20px
        margin-left 20px
      .current
        height 88px
        padding 0 30px
        background-color #fff
        display flex
        justify-content space-between
        align-items center
        .name
          font-weight bold
          color #333
          font-size 30px
        .loca
          color #2395ff
    .ShippingAdd
      h3
        color #666
        font-size 26px
        margin 20px 0 10px 20px
      .van-address-list
        padding 20px 0 
        .van-address-item
          border-radius 0
        

				
</style>