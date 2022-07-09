<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/finda">首页</router-link>
      <router-link to="/mya">我的</router-link>
      <router-link to="/ordera">订单</router-link>
      <router-link to="/diffa">分类</router-link>
    </div>
    <div class="top">显示路由切换的页面</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>
