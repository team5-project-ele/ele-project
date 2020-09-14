<template>
<<<<<<< HEAD
  <div id="Container">
    <header class="header">
        
    </header>
=======
  <div id="app">
    <GoldCoin></GoldCoin>
>>>>>>> 813a9888c3b38e1b94938dc52d371321713b09f8
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "App",
  data() {
    return {

    }
  },
  mounted() {
    
=======
import GoldCoin from './pages/GoldCoin'
export default {
  name: 'App',
  components: {
    GoldCoin
>>>>>>> 813a9888c3b38e1b94938dc52d371321713b09f8
  }
}
</script>

<style lang="stylus">
<<<<<<< HEAD
  #Container
    width 100%
    height 100%
    .header
      width 100%
      height 220px
      background rgb(0,140,255)
</style>>


=======
  #app
    width 100%
    height 400px
    background #ededed
  
</style>
>>>>>>> 813a9888c3b38e1b94938dc52d371321713b09f8
