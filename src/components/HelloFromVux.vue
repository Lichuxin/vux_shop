<template>
  <div>
    <x-header>
      <span>首页</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <div class="swiper">
      <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div class="content">
      <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <!-- .native 就是把组件变回原生DOM的一种方式 -->
            <tab-item class="vux-center" @click.native="changeView(index)" v-for="(item, index) in list2"  :key="index">
              {{item}}
            </tab-item>
          
        </tab>
        <!-- <swiper v-model="index" height="100px" :show-dots="false"> -->
        <!-- <router-view></router-view> -->
        <homeselect :select = 'select_show'></homeselect>
          <!-- <swiper-item v-for="(item, index) in list2" :key="index">
            <div class="tab-swiper vux-center">{{item}} Container</div>
          </swiper-item> -->
        <!-- </swiper> -->
      </div>
    </div>
    
  </div>
</template>
<script>
import { XHeader, Swiper, Tab, TabItem, SwiperItem, Panel } from 'vux'
import homeselect from './HomeSelect'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
const list = () => ['男装', '女装', '男鞋', '女鞋', '功能箱包']
export default {
  components: {
    XHeader,
    Swiper,
    Tab,
    TabItem,
    SwiperItem,
    Panel,
    homeselect
  },
  data () {
    return {
      demo03_list: demoList,
      index01: 0,
      list2: list(),
      select_show: '男装',
      // demo2: '精选',
      index: 0,
      HomeClidrenUrl: ['', 'HuoGuo', 'ZiZhuCan', 'ShaoKao'],
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      },
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: true
    }
  },
  methods: {
    changeView (index) {
      this.select_show = this.list2[index]
      console.log(this.list2[index])
      // console.log(this.select_show)
      // this.$router.push({path: '/' + this.HomeClidrenUrl[index], params: {class_name: this.list2[index]}})
      // return this.data.demo2 === item;
      // this.demo2 === item
    }
    // switchTabItem (index) {
    //   console.log(index)
    //   console.log('on-before-index-change', index)
    //   this.$vux.loading.show({
    //     text: 'loading'
    //   })
    //   setTimeout(() => {
    //     this.$vux.loading.hide()
    //     this.index01 = index
    //   }, 1000)
    // }
  }
}
</script>

<style>
html{
  font-size: 14px;
}
body{
  line-height: normal !important;
}
.overwrite-title-demo {
  margin-top: 5px;
}
</style>