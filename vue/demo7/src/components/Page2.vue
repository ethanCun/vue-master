<template>
  <div>
    <el-button type="text" @click="visiable = !visiable">打开表格</el-button>

    <!-- Dialog 分为两个部分：body和footer，footer需要具名为footer的slot -->
    <el-dialog :visible.sync="visiable" title="这是标题">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期"></el-table-column>
        <el-table-column property="name" label="姓名"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>

      <!-- footer需要具名为footer的slot -->
      <span slot="footer">
        <el-button @click="visiable = false">取消</el-button>
        <el-button type="primary" @click="visiable = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default{
    name: 'page2',
    data(){
      return {

         visiable: false,
         gridData: [{
                   date: '2016-05-02',
                   name: '王小虎',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                   date: '2016-05-04',
                   name: '王小虎',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                   date: '2016-05-01',
                   name: '王小虎',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                   date: '2016-05-03',
                   name: '王小虎',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }],
      }
    }
  }
</script>

<style>
</style>
