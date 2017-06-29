<template>
    <div id="footer">
        <div class="views">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <bottomNav class="tab-nav" :value='tabNav' v-if="showNav">
            <navItem value='#/home' title="首页" icon="fa fa-home" @click="onTab('home')"></navItem>
            <navItem value='#/order' title="订单" icon="fa fa-heart" @click="onTab('order')"></navItem>
            <navItem value='#/user' title="我" icon="fa fa-user-circle" @click="onTab('user')"></navItem>
        </bottomNav>
    </div>
</template>

<script>
    import vwHeader from '../vuwe/src/components/article/page-head.vue'
    import bottomNav from '../vuwe/src/components/nav/bottom-nav.vue'
    import navItem from '../vuwe/src/components/nav/nav-item.vue'
    export default {
        data () {
            return {
                title: 'App',
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
            this.backIcon = (window.location.hash !== '#/' && window.location.hash !== '#/home')
            this.showNav = (window.top === window);
            //console.log(`Within an iframe: ${!(window.top === window)}`)
        },
//        watch: {
//            $route (to, from) {
//                console.log(to)
//            }
//        },
        methods: {
            onTab (t) {
                this.$router.push({name: t});
                this.$store.commit('showUserInfo');
            },
        },
        components: {
            vwHeader,
            bottomNav,
            navItem
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .router-link-active {
        color: #04BE02;
    }
</style>
