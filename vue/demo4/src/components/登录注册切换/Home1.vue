<template>

  <div>

    <p>欢迎~</p>
    <router-link to="/home1/home2">登录</router-link>
    <router-link to="/home1/home3">注册</router-link>
    <router-view></router-view>

    <hr />

    <p>欢迎~</p>
    <router-link to="Home2">登录</router-link>
    <router-link to="home3">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
