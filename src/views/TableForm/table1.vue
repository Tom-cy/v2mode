<template>
    <div class="table-container sheet">
      <div class="main-but">
        <vxe-toolbar>
          <template #buttons>
            <vxe-button>新增</vxe-button>
          </template>
        </vxe-toolbar>
  
      </div>
      <div class="main-table">
        <vxe-grid ref="xGrid" v-bind="gridOptions" :columns="tableColumn" :data="tableData">
          <template #name_edit="{ row }">
            <!-- <vxe-input v-model="row.name"/> -->
          </template>
        </vxe-grid>
      </div>
  
      <div class="main-market" style="display:block;font-size: 10px;margin: 20px 20px 5px 20px">{{ reportData.remark }}
      </div>
    </div>
  </template>
  
  <script>
  import tableMixin from './js/tableMixin'
//   import VXETable from 'vxe-table'
  export default {
    mixins: [tableMixin],
    data() {
      return {
  
      }
    },
    created() {
    },
    methods: {
    //   toolbarButtonClickEvent({ code }) {
    //     const $grid = this.$refs.xGrid
    //     switch (code) {
    //       case 'myInsert':
    //         $grid.insert({
    //           name: 'xxx'
    //         })
    //         break
    //       case 'mySave':
    //         setTimeout(() => {
    //           const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    //           VXETable.modal.message({ content: `新增 ${insertRecords.length} 条，删除 ${removeRecords.length} 条，更新 ${updateRecords.length} 条`, status: 'success' })
    //           this.loadData()
    //         }, 100)
    //         break
    //       case 'myExport':
    //         $grid.exportData({
    //           type: 'csv'
    //         })
    //         break
    //     }
    //   },
    //   toolbarToolClickEvent({ code }) {
    //     const $grid = this.$refs.xGrid
    //     switch (code) {
    //       case 'myPrint':
    //         $grid.print()
    //         break
    //     }
    //   }
    }
  }
  </script>
  
  <style scoped lang="scss">
//   @import '../../../static/css/paper.css';
  
  @page {
    margin: 30px;
    size: A4;
  }
  
  body.A4 .sheet {
    height: auto;
  }
  
  .table-container {
    padding: 0 20px 20px;
    width: 100%;
    background: #ffffff;
  }
  
  .main-table {
    margin-top: 20px;
    font-size: 13px !important;
  }
  
  .main-table /deep/ .ColFirstVex {
    font-weight: bold;
    text-align: left !important;
  
  }
  
  .check[data-v-3fc6a2a0] {
    color: #20A0FF;
    display: inline-block;
    width: 25px;
    cursor: pointer;
    font-size: 12px;
  }
  
  .main-table /deep/ .vxe-cell {
    padding-left: 0px;
    padding-right: 0px;
  }
  
  .main-table /deep/ .vxe-cell--label {
    font-size: 13px !important;
  }
  
  .main-table /deep/ .vxe-header--row .vxe-table--render-default .vxe-body--column:not(.col--ellipsis),
  .main-table /deep/ .vxe-header--row .vxe-table--render-default .vxe-footer--column:not(.col--ellipsis),
  .main-table /deep/ .vxe-header--row .vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
    padding: 3px;
    box-sizing: border-box;
  }
  
  .main-table /deep/ .vxe-table--render-default .vxe-body--column,
  .main-table /deep/ .vxe-table--render-default .vxe-footer--column,
  .main-table /deep/ .vxe-table--render-default .vxe-header--column {
    line-height: 15px;
    text-align: center;
  }
  
  .main-table /deep/ .vxe-table--render-default .vxe-body--column.col--ellipsis,
  .main-table /deep/ .vxe-table--render-default .vxe-footer--column.col--ellipsis,
  .main-table /deep/ .vxe-table--render-default .vxe-header--column.col--ellipsis,
  .main-table /deep/ .vxe-table--render-default.vxe-editable .vxe-body--column {
    height: 32px;
  }
  </style>
  