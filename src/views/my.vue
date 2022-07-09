<template>
  <div>
    <div>
      我的
      <h3>体育改变人生</h3>
    </div>
    <div>
      <router-link to="/my/homepage">体育的主页</router-link>
      <router-link to="/my/homepage1">国内的主页</router-link>
      <router-link to="/my/homepage2">国外的主页</router-link>
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
