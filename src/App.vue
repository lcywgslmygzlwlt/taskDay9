<template>
  <div>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/classification">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/my">我的</router-link>
      <h3>显示路由切换的页面</h3>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
