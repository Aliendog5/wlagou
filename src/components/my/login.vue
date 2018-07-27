<template>
  <div>
    <h2>登录</h2>
    <form action="">
      <p><label>用户名：<input v-model="username" type="text" name="username"></label></p>
      <p><label>密码：<input v-model="userpwd" type="text" name="userpwd"></label></p>
      <p><input @click="login" type="button" value="登录"></p>
    </form>
    <p>没有账号？<button class="btn" @click="goReg">去注册</button></p>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name:"login",
  data(){
    return {
      username:"",
      userpwd:""
    }
  },
  methods:{
    login(){
      $.ajax({
        type:"post",
        url:"http://localhost:55555/home/login",
        data:{
          u_name:this.username,
          u_pwd:this.userpwd
        }
      }).then((res)=>{
        sessionStorage.setItem('user', res[0].u_name)
        if(confirm("登陆成功，去主页?")){
          this.$router.push("/position")
        }
      })
    },
    goReg(){
      this.$router.push("/reg")
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

