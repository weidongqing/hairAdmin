<template>
  <div class="panel-view">
    <CellTips>作品展示</CellTips>
    <Panel :link-obj="linkObjs" v-if="linkObjs" more-info="show more" more-link="#"></Panel>

    <!--<CellTips>仅带标题</CellTips>-->
    <!--<Panel title-only :link-obj="linkObjs" title="Panel 1" more-info="show more" more-link="#"></Panel>-->
  </div>
</template>

<script>
  import CellTips from '../../vuwe/src/components/cells/cells-tips.vue'
  import Panel from '../../vuwe/src/components/panel/panel.vue'
  export default {
    data () {
      return {
        linkObjs: [
          {
            link: '#title-1',
            title: 'Title 1',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            img: 'https://imgly.net/img/2gj.jpg'
          },
          {
            link: '#title-2',
            title: 'Title 2',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            img: 'https://imgly.net/img/2gj.jpg'
          },
          {
            link: '#title-3',
            title: 'Title 3',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            img: 'https://imgly.net/img/2gj.jpg'
          },
          {
            link: '#title-4',
            title: 'Title 4',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            img: 'https://imgly.net/img/2gj.jpg'
          }
        ]
      }
    },
    components: {
      CellTips,
      Panel
    }
  }
</script>

<style>
  .panel-view {
    padding: 0 10px;
  }
</style>
