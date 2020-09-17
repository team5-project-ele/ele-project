<template>
  <div>
    <div class="screen">
      <van-dropdown-menu active-color="#3190e8" class="screenItem muen" style="height:14px">
        <van-dropdown-item  v-model="value1" :options="option1" @change="changeMenu(value1)"/>
      </van-dropdown-menu>
      <div class="screenItem" :class="{active:value1 === item.value}" @click="discOrrSale(item,item.value)" v-for="item in sortFilter" :key="item.value">{{item.text}}</div>
      <div class="screenItem">筛选<span class="iconfont icon-shaixuan"></span></div>
    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant'
import {reqScreen} from '../../api/index'
export default {
  name:'Screen',
  data () {
    return {
      value1: null, // 初始的类型排序类
      value2: 'a',
      option1: [], // 综合排序类数组数据
      sortFilter:[], // 距离最近或销量最高的回调
    }
  },
  mounted () {
    this.getScreen()
  },
  methods: {
    //  发送异步请求，获取筛选的信息数据
    async getScreen () {
      const result = await reqScreen()
      console.log(result.data.outside.inside_sort_filter)
      this.value1 = result.data.outside.inside_sort_filter[0].value
      this.option1 = result.data.outside.inside_sort_filter
      this.sortFilter = result.data.outside.outside_sort_filter
    },

    // 点击综合排序下面的选项的回调函数
    changeMenu (value) {
      this.$screen.$emit('storeSort',value)
    },

    // 点击距离最近或销量最高的回调函数
    discOrrSale (item,value) {
      // 点击时，将对象添加到综合排序下，并显示该对象的信息
      this.option1.push(item)
      this.value1 = item.value
      this.$screen.$emit('storeSort',value)
    }
  },
  components: {
     [DropdownMenu.name]:DropdownMenu,
     [DropdownItem.name]:DropdownItem
  }
}
</script>
<style lang='stylus'>
   // 综合排序 筛选
    .screen
      height 80px
      width 100%
      display flex
      justify-content space-around
      align-items center
      color #666
      background-color #fff
      // position fixed
      // top 80px
      z-index 100
      .screenItem
        font-size 28px
        color #666 
        &.active
          font-size 28px
          font-weight bold
        .van-dropdown-menu__bar 
          height 40px 
          box-shadow none
          .van-dropdown-menu__title
            color #666
            padding 0 15px 0 0
            font-size 28px
</style>