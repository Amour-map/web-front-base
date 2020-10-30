<template>
  <div>
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
    return {}
  },
}
</script>

<style>

</style>
