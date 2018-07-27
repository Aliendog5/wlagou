<template>
  <div>
    <h2>注册</h2>
    <form>
      <p><label>用户名：<input v-model="username" type="text" name="username"></label></p>
      <p><label>密码：<input v-model="userpwd" type="text" name="userpwd"></label></p>
      <p><input @click="reg" type="button" value="注册"></p>
    </form>
    <p>已有账号？<button class="btn" @click="goLogin">去登录</button></p>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name:"reg",
  data(){
    return {
      username:"",
      userpwd:""
    }
  },
  methods:{
    reg(){
      $.ajax({
        type:"post",
        url:"http://localhost:55555/home/reg",
        data:{
          u_name:this.username,
          u_pwd:this.userpwd
        }
      }).then((res)=>{
        alert("注册成功，去登录")
        this.$router.push("/login")
      })
    },
    goLogin(){
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
div{font-size: 20px}
[type="button"]{width: 250px;height: 40px;border: none;background: #00b38a;color: #fff;}
input{height: 30px;margin: 10px;width: 200px;border: solid 1px red;}
.btn{
  width: 60px;
  height: 30px;
  border: none;
  background: #00b38a;
  color: #fff;
}
</style>

