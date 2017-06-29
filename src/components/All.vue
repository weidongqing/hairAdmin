<template>
  <div id="all">
    <!--<data-table :data-table="tableData"></data-table>-->
<i>{{tableData}}</i>
  </div>
</template>
<script>
  //import DataTable from '../../node_modules/vue-datatable/src/DataTable.vue';
  export default {
    data() {
      return {
        tableData: {
          options: {
            //Global sort option
            sortable: true,
            //Global edit option
            editable: true,
            //How many items will be shown in each page
            pageCount: 10,
            //Callback of change page
            onPageChanged(page) {
              console.log(page);
            }
          },

          columns: [
            {
              value: 'id',
              text: 'ID',
              sortable: true,
              editable: false
            },
            {
              value: 'name',
              text: 'Name',
              sortable: true,
              editable: true
            },
            {
              value: 'age',
              text: 'Age',
              sortable: true,
              editable: true
            },
            {
              value: 'sex',
              text: 'Sex',
              sortable: true,
              editable: true
            }
          ],

          rows: [
            {
              id: {
                value: 1,
                //If this field is editable
                editable: false
              }
            }
          ]
        }
      }
    }
  }
//
//    components: {
//      //DataTable
//    }
//  }

</script>
<style>
  #all {
    position: absolute;
    top: 53px;
  }
</style>

