<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/Classification">分类</router-link>
    <router-link to="/mine">订单</router-link>
    <router-link to="/Order">我的</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
