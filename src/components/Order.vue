<template>
  <div id="order">
    <div class="tabs-view">
      <TabBar :tabs="tabItemList" v-if="tabItemList" @change="onChange"></TabBar>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import TabBar from '../../vuwe/src/components/tab/tab-bar.vue'
  export default {
    data () {
      return {
        tabItemList: ['全部订单', '已预约', '已完成'],
        link: ['all', 'book', 'complete']
      }
    },
    methods: {
      onChange (i) {
        this.$router.push({name:this.link[i]});
        //this.currentView = `tabView${i}`
      }
    },
    components: {
      TabBar
    }
  }
</script>

<style>
  .tabs-view {
    position: relative;
    height: 200px;
  }

  .weui-navbar__item:after {
    border-right: none;
  }

  .weui-navbar__item.weui-bar__item_on {
    border-bottom: 3px solid #04BE02;
    color: #04BE02;
    background-color: #fafafa;
  }
</style>
