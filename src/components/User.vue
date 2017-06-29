<!--<template>-->
<!--<div class="hello" v-on:click="toHome">-->
<!--<h1>{{ msg }}</h1>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'hello',-->
<!--data () {-->
<!--return {-->
<!--msg: '欢迎来到我的第一个vue项目'-->
<!--}-->
<!--},-->
<!--methods:{-->
<!--toHome:function(){-->
<!--console.log("test")-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<template>
    <!--<div class="panel-view">-->
        <!--<CellTips>个人中心</CellTips>-->
        <!--<Panel title-only :link-obj="linkObjs" more-info="show more" more-link="#"></Panel>-->
    <!--</div>-->
    <data-table :data-table="tableData"></data-table>
</template>

<script>
    import DataTable from '../../node_modules/vue-datatable';
    export default {
        data() {
            return {
                tableData: {
                    options: {
                        // Global sort option
                        sortable: true,
                        // Global edit option
                        editable: true,
                        // How many items will be shown in each page
                        pageCount: 10,
                        // Callback of change page
                        onPageChanged(page) {
                            console.log(page);
                        }
                    },

                    columns: [
                        {
                            value: 'id',
                            text: 'ID',
                            // If this column is sortable
                            sortable: true,
                            // If this column is editable
                            editable: false,
                            // Render this column as HTML or not
                            isHTML: false,
                            // Render this column as button array or not
                            isButton: false
                        },
                        {
                            value: 'html',
                            text: 'HTML',
                            sortable: false,
                            editable: false,
                            isHTML: true,
                            isButton: false
                        },
                        {
                            value: 'button',
                            text: 'Button',
                            sortable: false,
                            editable: false,
                            isHTML: false,
                            isButton: true
                        }
                    ],

                    rows: [
                        {
                            id: {
                                value: 1,
                                // If this field is editable
                                editable: false
                            },
                            html: {
                                value: '<a href="https://www.github.com">GitHub</a>'
                            }
                        }
                    ]
                }
            }
        },

        components: {
            DataTable
        }
    }
//    import CellTips from '../../vuwe/src/components/cells/cells-tips.vue'
//    import Panel from '../../vuwe/src/components/panel/panel.vue'
//    export default {
//        data () {
//            return {
//                linkObjs: [
//                    {
//                        link: '#title-1',
//                        title: 'Title 1',
//                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
//                        info: {
//                            source: 'baidu.com',
//                            time: '2016-11-11',
//                            extra: '抄的'
//                        }
//                    },
//                    {
//                        link: '#title-2',
//                        title: 'Title 2',
//                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
//                        img: 'https://imgly.net/img/2gj.jpg'
//                    }
//                ]
//            }
//        },
//
//        components: {
//            CellTips,
//            Panel
//        }
//    }
</script>

<style>
    .panel-view {
        padding: 0 10px;
    }

    .vw-list-content[data-v-6d18ae1a] {
        border-top: 1px solid #eee;
    }

    .weui-panel__hd {
        display: none;
    }

    .weui-cell_link {
        display: none;
    }
</style>
