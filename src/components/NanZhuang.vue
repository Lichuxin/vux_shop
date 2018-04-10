<template>
  <div class="NanZhuang">
      <ul>
          <li>
              <div class="box_left">
                  <img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff">
              </div>
              <div class="box_right">
                  <p class="name">真功夫</p>
                  <div class="Bf">
                    <rater v-model="level" active-color="#04BE02" :font-size="15" disabled></rater>
                    <span class="price">￥18</span>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
import { Rater } from 'vux'
export default {
  components: {
    Rater
  },
  methods: {},
  data () {
    return {
      level: 2
    }
  }
}
</script>
<style lang="less" scoped>
    .NanZhuang{
        ul{
            background-color: #eeeeee;
            li{
                padding: 10px;
                margin-top: 10px;
                background-color: #ffffff; 
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                .box_left{
                    margin-right: 10px;
                }
            }
        }
    }
</style>
