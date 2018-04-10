<template>
  <div class="homeselect">
      <ul v-if="selectDatas">
          <li v-for="(selectData,index) in selectDatas" :key="index">
            <router-link to="/List">
              <div class="box_Af">
                  <img :src="'../static/img/' + selectData.url + '.png'">
              </div>
              <div class="box_Bf">
                  <span>{{selectData.name}}</span>
              </div>
            </router-link>  
          </li>
      </ul>
  </div>
</template>
<script>
import { Rater, Loading } from 'vux'
export default {
  components: {
    Rater,
    Loading
  },
  props: {
    'select': [String]
  },
  created: function () {
    // 显示
    this.$vux.loading.show({
      text: 'Loading'
    })
    console.log(this.apiPrefix)
    this.$http.get(this.apiPrefix + 'class.json').then(({data}) => {
      this.Data = data
    //   console.log(this.Data)
      for (const arr of data) {
        // console.log(arr.class_name)
        if (arr.class_name === this.select) {
          this.selectDatas = arr.data
          // 隐藏
          this.$vux.loading.hide()
        }
      }
    //   console.log(this.select)
    })
  },
  methods: {
  },
  data () {
    return {
      level: 2,
      selectDatas: [],
      Data: []
    }
  },
  watch: {
    select: function () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      for (const arr of this.Data) {
        // console.log(arr.class_name)
        if (arr.class_name === this.select) {
          this.selectDatas = arr.data
          this.$vux.loading.hide()
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
    .homeselect{
        ul{
            background-color: #eeeeee;
            display: flex;
            display: -webkit-flex;
            flex-flow: row wrap;
            li{
               
                padding: 5px;
                // margin-top: 5px;
                background-color: #ffffff; 
                display: flex;
                display: -webkit-flex;
                flex-direction: column;
                width: calc(~"25% - 10px");
                width:-moz-calc(~"25% - 10px");
                width:-webkit-calc(~"25% - 10px");
                text-align: center;
                background: #eeeeee;
                .box_Af{
                    background: #ffffff;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .box_Bf{
                    background: #ffffff;
                    span{
                      color: #333333;
                    }
                }
            }
        }
    }
</style>
