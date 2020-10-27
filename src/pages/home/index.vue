<template>
  <div>
    <!-- <img :src="url" alt="图片不见了"> -->
    <v-card
      width="600"
    >
      <router-link to="/login">点击跳转</router-link>
      <router-view></router-view>
    </v-card>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // url: require("image/favicon.png")
    }
  },
}
</script>

<style>

</style>
