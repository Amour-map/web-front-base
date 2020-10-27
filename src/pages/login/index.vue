<template>
  <div>
    <form>
      <label for="username">用户名</label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        v-model="username" 
      />
      <label for="pwd">密码</label>
      <input 
        id="pwd" 
        name = "pwd" 
        type="text" 
        v-model="pwd" 
      />
      <button type="submit" @click.prevent="login">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: "",
      pwd: "",
    }
  },
  methods: {
    async login() {
      // 登录
      let loginApiRes = await this.axios.get(`api/datacenter/login`, {
        params: {
          userName: this.username,
          password: this.pwd,
        }
      });
      console.log(loginApiRes)
    },
  }
}
</script>

<style>

</style>