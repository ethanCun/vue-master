<template>
  <div>

    <div class="search">
      <el-input placeholder="请输入姓名" v-model="name" class="nameTf"></el-input>
      <el-button type="success" class="el-icon-search" @click="search"></el-button>
    </div>

    <el-table :data="tableData" stripe="" border="" @selection-change="selecionChange" @cell-click="cellClick">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="日期" prop="date" sortable="">
        <template slot-scope="scope">
          <i class="el-icon-time"><span>{{scope.row.date}}</span></i>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column fixed="right" label="操作" text-align="center" width="300" style="text-align: center;">
        <template slot-scope="scope">
          <el-button icon="el-icon-search" @click.stop="see(scope.row)"></el-button>
          <el-button icon="el-icon-edit" type="primary" @click.stop="edit"></el-button>
          <el-button icon="el-icon-delete" type="danger" @click.stop="del"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="visiable" title="详情">
      <span>日期: {{currentData.data}}</span>
      <span>姓名: {{currentData.name}}</span>
      <span>地址: {{currentData.address}}</span>
    </el-dialog>

    <el-pagination layout="prev, pager, next" :total="this.total" @current-change="changePage"></el-pagination>

    <template>
      <el-backtop>
        top
      </el-backtop>
    </template>
  </div>


</template>

<script>
  export default {
    name: 'zyTable',
    data() {
      return {
        visiable: false,
        currentData: Object,
        name: '',
        total: 0,
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {

      see(e) {
        console.log('see')
        this.visiable = !this.visiable
        this.currentData = e
      },
      del() {
        console.log('del')
      },
      edit() {
        console.log('edit')
      },
      selecionChange(selection) {
        console.log(JSON.stringify(selection))
      },
      cellClick(selection) {
        console.log(JSON.stringify(selection))
      },
      search(){
        var tabData = []
        for(var i=0; i<this.tableData.length; i++){
          var dd = this.tableData[i]
          if(this.name === ''){
            tabData.push(dd)
          }else{
            if(dd.name.indexOf(this.name) != -1){
              tabData.push(dd)
            }
          }
        }

        this.tableData = tabData
      },
      changePage(e){

        //当前页码
        if(e == 1){
          var tabData = []
          for(var i=0; i<this.tableData.length; i++){
            if (i <= 9){
              tabData.push(this.tableData[i])
            }
          }
          this.tableData = tabData
        }else if (e === 2){
          var tabData = []
          for(var i=0; i<this.tableData.length; i++){
            if (i > 9){
              tabData.push(this.tableData[i])
            }
          }
          this.tableData = tabData
        }
      }
    },
    mounted(){

      this.total = this.tableData.length;

      //默认加载10条
      // var tabData = []
      // for(var i=0; i<this.tableData.length; i++){
      //   if (i <= 9){
      //     tabData.push(this.tableData[i])
      //   }
      // }
      // this.tableData = tabData
    }
  }
</script>

<style scoped="">
  el-table .cell {

    text-align: center;
  }

  .nameTf {

    width: 200px;
  }

  .search{

    margin: 20px 20px 20px 0;
  }
</style>
