<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
// import Personal from './pages/Personal'
export default {
  name: 'App',
  components: {
    FooterBar,
    // Personal
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  height calc(100vh - 102px)
</style>
