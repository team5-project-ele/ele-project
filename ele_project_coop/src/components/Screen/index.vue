<template>
  <div>
    <div class="screen">
      <div class="icon">综合排序<span class="iconfont icon-Downarrow-filled" style="font-size:10px"></span></div>
      <!-- <van-dropdown-menu class="screenItem muen" style="height:30px">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu> -->
      <div  class="screenItem">距离最近</div>
      <div  class="screenItem">销量最高</div>
      <div  class="screenItem">筛选<span class="iconfont icon-shaixuan"></span></div>
    </div>
    <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item>距离最近</van-dropdown-item>
</van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant'
export default {
  name:'Screen',
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    }
  },
  methods: {
     
  },
  components: {
     [DropdownMenu.name]:DropdownMenu,
     [DropdownItem.name]:DropdownItem
  }
}
</script>
<style scoped lang='stylus'>
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
      .muen
        // height 80px !importent 
</style>