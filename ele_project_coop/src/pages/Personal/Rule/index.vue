<template>
  <div class="ruleContainer">
    <ul class="list">
      <li class="item">
        营业资质
      </li>
      <li class="item">
        服务承诺
      </li>
      <li class="item">
        <span>规则动态</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>规则解读</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>用户协议</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>平台秩序</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>消费者保障</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>品类管理规范</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>配送规范</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
      <li class="item">
        <span>政府信息公示</span>
        <span>
          <van-icon class="iconfont-down" name="arrow-down" />
        </span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
}
</script>

<style lang="stylus" scoped>
  .ruleContainer
    width 100%
    height 100%
    background white
    .list
      // padding-left 29px
      display flex
      flex-direction column
      .item
        padding 32px 30px
        color #333
        font-size 30px
        border-bottom 1px solid #DDDDDD
        position relative
        margin-left 29px
        &:last-child
          margin-left 0
          padding-left 50px
        .iconfont-down
          position absolute
          right 30px
          color #BBBBBB
        
        


</style>