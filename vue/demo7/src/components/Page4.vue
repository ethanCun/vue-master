<template>
  <div>
    <el-button type="primary" @click="selectAll">全选</el-button>
    <el-button @click="cancelSelectAll">取消全选</el-button>

    <!-- 如果需要通过 key 来获取或设置选中状态，则必须设置node-key。 -->
    <el-tree ref="tree" :data="data" :props="defaultProps" @node-click="nodeClick" show-checkbox=""
    @check-change="handleCheckedChange" node-key="id" default-expand-all=""></el-tree>
  </div>
</template>

<script>
  export default {
    name: 'tree',
    data() {

      return {
        data: [{
            id: 1,
            label: '1',
            children: [{
                id: 6,
                label: '1-1',
                children: [{
                  id: 112,
                  label: '1-1-1'
                }]
              },
              {
                id: 8,
                label: '1-2',
                children: [{
                  id: 223,
                  label: '1-2-1'
                }]
              }
            ]
          },
          {
            id: 2,
            label: '2',
            children: [{
                id: 21,
                label: '2-1',
                children: [{
                  id: 211,
                  label: '2-2-1'
                }]
              },
              {
                id: 22,
                label: '2-2',
                children: [{
                  id: 221,
                  label: '2-2-2'
                }]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods:{

      nodeClick(arg1, arg2, arg3){
        console.log(arg1)
        console.log(arg2)
        console.log(arg3)
      },

      //勾选勾选框
      handleCheckedChange(data, checked, indeterminate) {

        //共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
        console.log(JSON.stringify(data), checked, indeterminate);
      },

      selectAll(){
        this.$refs.tree.setCheckedKeys([1,2])
      },

      cancelSelectAll(){
        this.$refs.tree.setCheckedKeys([])
      }
    }
  }
</script>

<style>
</style>
