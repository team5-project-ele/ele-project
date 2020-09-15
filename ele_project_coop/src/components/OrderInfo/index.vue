<template>
  <div class="infoContainer">
    <div class="header">

    </div>
    <van-tabs v-model="active"
              sticky>
      <van-tab>
        内容 {{ index }}
      </van-tab>
    </van-tabs>
    <div class="main">

    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Sticky } from 'vant'
export default {
  name: 'OrderInfo',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Sticky.name]: Sticky
  }
}
</script>

<style lang="stylus"></style>