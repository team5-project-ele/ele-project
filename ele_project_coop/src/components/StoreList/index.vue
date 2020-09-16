<template>
  <div>
    <div class="categoryStore">
      <ul class="StoreList">
      <li class="storeItem">
        <!-- 商家详情 -->
        <div class="storeDsec">
          <div class="image"><img src="https://cube.elemecdn.com/2/12/5e267e4bceb9bcabd61e1cf13a34aJPEG.JPEG"></div>
          <div class="desc">
            <div class="title">
              <h3>川锦汇麻辣拌</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                v-model="value"
                :size="6"
                :gutter="8"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>4.9 月售3000单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥12起送 | 配送￥1</div>
              <div class="distance">1.65km | 61分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">麻辣烫/关东煮</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px"><van-tag type="danger" style="margin-right:10px">减</van-tag>满30元减10元</div>
              <div class="van-ellipsis"><van-tag type="warning" style="margin-right:10px">保</van-tag>该商户食品安全已由国泰产险承担，食品安全有保障</div>
            </div>
          </div>
        </div>
      </li>
      <li class="storeItem">
        <!-- 商家详情 -->
        <div class="storeDsec">
          <div class="image"><img src="https://cube.elemecdn.com/2/12/5e267e4bceb9bcabd61e1cf13a34aJPEG.JPEG"></div>
          <div class="desc">
            <div class="title">
              <h3>川锦汇麻辣拌</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                v-model="value"
                :size="6"
                :gutter="8"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>4.9 月售3000单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥12起送 | 配送￥1</div>
              <div class="distance">1.65km | 61分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">麻辣烫/关东煮</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px"><van-tag type="danger" style="margin-right:10px">减</van-tag>满30元减10元</div>
              <div class="van-ellipsis"><van-tag type="warning" style="margin-right:10px">保</van-tag>该商户食品安全已由国泰产险承担，食品安全有保障</div>
            </div>
          </div>
        </div>
      </li>
      <li class="storeItem">
        <!-- 商家详情 -->
        <div class="storeDsec">
          <div class="image"><img src="https://cube.elemecdn.com/2/12/5e267e4bceb9bcabd61e1cf13a34aJPEG.JPEG"></div>
          <div class="desc">
            <div class="title">
              <h3>川锦汇麻辣拌</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                v-model="value"
                :size="6"
                :gutter="8"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>4.9 月售3000单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥12起送 | 配送￥1</div>
              <div class="distance">1.65km | 61分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">麻辣烫/关东煮</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px"><van-tag type="danger" style="margin-right:10px">减</van-tag>满30元减10元</div>
              <div class="van-ellipsis"><van-tag type="warning" style="margin-right:10px">保</van-tag>该商户食品安全已由国泰产险承担，食品安全有保障</div>
            </div>
          </div>
        </div>
      </li>
      <li class="storeItem">
        <!-- 商家详情 -->
        <div class="storeDsec">
          <div class="image"><img src="https://cube.elemecdn.com/2/12/5e267e4bceb9bcabd61e1cf13a34aJPEG.JPEG"></div>
          <div class="desc">
            <div class="title">
              <h3>川锦汇麻辣拌</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                v-model="value"
                :size="6"
                :gutter="8"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>4.9 月售3000单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥12起送 | 配送￥1</div>
              <div class="distance">1.65km | 61分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">麻辣烫/关东煮</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px"><van-tag type="danger" style="margin-right:10px">减</van-tag>满30元减10元</div>
              <div class="van-ellipsis"><van-tag type="warning" style="margin-right:10px">保</van-tag>该商户食品安全已由国泰产险承担，食品安全有保障</div>
            </div>
          </div>
        </div>
      </li>
      <li class="storeItem">
        <!-- 商家详情 -->
        <div class="storeDsec">
          <div class="image"><img src="https://cube.elemecdn.com/2/12/5e267e4bceb9bcabd61e1cf13a34aJPEG.JPEG"></div>
          <div class="desc">
            <div class="title">
              <h3>川锦汇麻辣拌</h3>
              <div class="iconfont icon-shenglvehao"></div>
            </div>
            <!-- 评分 -->
            <div class="score">
              <van-rate
                v-model="value"
                :size="6"
                :gutter="8"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
              <span>4.9 月售3000单</span>
            </div>
            <!-- 价格和路程 -->
            <div class="pricAddDis">
              <div class="price">￥12起送 | 配送￥1</div>
              <div class="distance">1.65km | 61分钟</div>
            </div>
          </div>
        </div>
        <!-- 满减区域 -->
        <div class="reductionContainer">
          <div class="left"></div>
          <div class="reduction">
            <div>
              <van-tag  color="#fff" text-color="#666" style="border:1px solid rgb(221, 221, 221)">麻辣烫/关东煮</van-tag>
            </div>
            <div class="reductionInfo" >
              <div style="margin-bottom:5px"><van-tag type="danger" style="margin-right:10px">减</van-tag>满30元减10元</div>
              <div class="van-ellipsis"><van-tag type="warning" style="margin-right:10px">保</van-tag>该商户食品安全已由国泰产险承担，食品安全有保障</div>
            </div>
          </div>
        </div>
      </li> 
    </ul>
    </div>
  </div>
</template>
<script>
import { Rate ,Tag} from 'vant'
export default {
  name:'storeList',
  data () {
    return {
      value:3, // 评分
    }
  },
  components: {
    [Rate.name]: Rate,
    [Tag.name]: Tag,
  },
  mounted () {
    
  },
  methods: {
     
  },
  
}
</script>
<style scoped lang='stylus'>
   // 商家列表
    .categoryStore
      // position fixed
      // top 160px
      // width 100%
      margin-top 160px
      .StoreList
        margin 20px
        // position absolute
        // top 160px
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
              border 1px solid #000
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
            height 138px
            .left
              height 100%
              width 130px
            .reduction
              flex 1
              display flex
              width 138px
              padding-left 20px
              flex-direction column
              justify-content space-between
              .reductionInfo
                border-top 1px dashed #FCFCFC
                padding-top 10px

</style>