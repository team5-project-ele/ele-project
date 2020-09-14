<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
export default {
  name: 'App',
  components: {
    FooterBar
  }
}
</script>

<style lang="stylus"></style>
