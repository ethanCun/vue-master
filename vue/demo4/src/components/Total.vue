<template>

  <div>

      <div>
        <router-link to="/home">1. 路由实现经典布局</router-link>
      </div>
      <div>
        <router-link to="/home1">2. 路由实现登录注册切换</router-link>
      </div>
      <div>
        <router-link to="/father2">3. 子组件调用父组件方法</router-link>
      </div>
      <div>
        <router-link to="/father">4. 子组件获取父组件属性</router-link>
      </div>
      <div>
        <router-link to="/father3">5. 父组件获取子组件属性</router-link>
      </div>
      <div>
        <router-link to="/father4">6. 父组件调用子组件方法</router-link>
      </div>
      <div>
        <router-link to="/customBind">7. 自定义组件</router-link>
      </div>
      <div>
        <router-link to="/filters">8. 过滤器</router-link>
      </div>

      <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>


</style>
