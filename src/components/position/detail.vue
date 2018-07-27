<template>
  <div id="detail">
    <p>{{arr[0].city}}</p>
    <p>{{arr[0].companyFullName}}</p>
    <p>{{arr[0].companyName}}</p>
    <p>{{arr[0].createTime}}</p>
    <p>{{arr[0].id}}</p>
    <p>{{arr[0].positionId}}</p>
    <p>{{arr[0].positionName}}</p>
    <p>{{arr[0].salary}}</p>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: "detail",
  data(){
    return {
      id:"",
      arr:[{
        city:""
      }]
    }
  },
  created(){
    let str=window.location.href;
    this.id=str.split("?")[1].split("=")[1]

    $.ajax({
      type:"post",
      url:"http://localhost:55555/home/detail",
      data:{
        positionId:this.id
        // home.js内写的这个名字positionId
      }
    }).then((res)=>{
      this.arr=res
    })
  },
};
</script>
<style scoped>
</style>
