<template>
  <div>
    <!-- <p>推荐</p>
    <p>排行榜</p>
    <p>歌单</p> -->
    <div class="nav_main">
      <router-link to="/find/ranking/one">推荐</router-link>
      <router-link to="/find/ranking/two">排行榜</router-link>
      <!-- <router-link to="/find/songlist">歌单</router-link> -->
    </div>

    <div style="1px solid red;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
