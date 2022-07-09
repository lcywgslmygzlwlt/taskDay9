<template>
  <div class="home">
    this is Home
    <br />
    <router-link to="/home/hot">热点</router-link>
    <router-link to="/home/new">最新</router-link>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
