<template>
  <div id="app">
    <GoldCoin></GoldCoin>
  </div>
</template>

<script>
import GoldCoin from './pages/GoldCoin'
export default {
  name: 'App',
  components: {
    GoldCoin
  }
}
</script>

<style lang="stylus">
  #app
    width 100%
    height 400px
    background #ededed
  
</style>
