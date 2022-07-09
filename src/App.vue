<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/fl">分类</router-link>
    <router-link to="/dd">订单</router-link>
    <router-link to="/my">我的</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less">
a {
  margin-right: 20px;
}
</style>
