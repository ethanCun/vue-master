<template>
  <div>
    <el-menu :default-active="$route.path" active-text-color="#0000ff" v-for="(item, index) in routes" :key="index" router>
      <el-menu-item v-if="item.children.length == 0" :path="item.path" :index="item.path">
        {{item.name}}
      </el-menu-item>

      <el-submenu v-if="item.children.length > 0" :index="item.path">

          <template slot="title">
            <i class="el-icon-menu"><span>{{item.name}}</span></i>
          </template>

        <el-menu-item-group  v-for="(child, idx) in item.children" :key="idx" >

          <el-menu-item :path="child.path" :index="child.path">
            {{child.name}}
          </el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default{
    name: 'mmenu',
    data(){
      return {

        routes:[
          {
            name: 'Components',
            path: '/components',
            children:[

            ],
          },
          {
            name: 'Dashboard',
            path: '/dashboard',
            children:[

            ],
          },
          {
            name: 'DirectivePermission',
            path: '/directivePermission',
            children:[

            ],
          },
          {
            name: 'Components',
            path: '/components',
            children:[
                {
                  name: 'Permission',
                  path: '/permission',
                },
                {
                  name: 'Tinymce',
                  path: '/tinymce',
                },
            ],
          },
          {
            name: 'Documentation',
            path: '/documentation',
            children:[

            ],
          },
          {
            name: 'Guide',
            path: '/guide',
            children:[
                {
                  name: 'Icons',
                  path: '/icons',
                },
                {
                  name: 'Markdown',
                  path: '/markdown',
                }
            ],
          }
        ]
      }
    }
  }
</script>

<style scoped="">

</style>
