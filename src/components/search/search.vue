<template>
  <div class="search">
    <input type="text" v-model="positionName"/>
    <button @click="search">搜索</button>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <p>{{item.city}}</p>
        <p>{{item.companyFullName}}</p>
        <p>{{item.salary}}</p>
        <p>{{item.positionName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "search",
  data() {
    return {
      positionName: "",
      arr:[]
    }
  },
  methods:{
    search(){
      $.ajax({
        type:"post",
        url:"http://localhost:55555/home/search",
        data:{
          positionName:this.positionName
        }
      }).then((res)=>{
        console.log(res);
        this.arr=res
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  height: 30px;
  margin: 10px;
  width: 200px;
}
button{
  height: 30px;width: 50px;
}
div {
  height: 100px;
}
li{
  margin: 10px;
  padding: 10px;
  border: solid 1px red;
}
</style>
