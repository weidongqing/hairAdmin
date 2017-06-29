<template>
  <div id="footer">
    <div class="views">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <bottomNav class="tab-nav">
      <navItem value='#test' title="测试" icon="fa fa-home" @click="onTab('test')"></navItem>
      <navItem value='#home' title="首页" icon="fa fa-tree" @click="onTab('home')"></navItem>
      <navItem value='#hello' title="欢迎" icon="fa fa-heart" @click="onTab('hello')"></navItem>
    </bottomNav>
  </div>
</template>

<script>
  import vwHeader from '../../vuwe/src/components/article/page-head.vue'
  import bottomNav from '../../vuwe/src/components/nav/bottom-nav.vue'
  import navItem from '../../vuwe/src/components/nav/nav-item.vue'
  export default {
    data () {
      return {
        title: 'VUWE',
        backIcon: false,
        showNav: true
      }
    },
    computed: {
      tabNav () {
        return window.location.hash
      }
    },
    mounted () {
      this.backIcon = (window.location.hash !== '#/' && window.location.hash !== '#/intro')
      this.showNav = (window.top === window);
      console.log(`Within an iframe: ${!(window.top === window)}`)
    },
    watch: {
      $route (to, from) {
        this.title = to.name
        if (to.path !== '/' && to.path !== '/demo') {
          this.backIcon = true
        } else {
          this.backIcon = false
        }
      }
    },
    methods: {
      onTab (t) {
        if (t === 'doc') {
          window.open('https://vuwe.github.io/vuwe/doc.html')
        } else {
          this.$router.push(t)
        }
      }
    },
    components: {
      vwHeader,
      bottomNav,
      navItem
    }
  }
</script>
