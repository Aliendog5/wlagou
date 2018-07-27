<template>
<div id="content">
    <div class="custom-info none" style="display: block;">
      <span class="info">10秒钟定制职位</span>
      <a class="go" href="/mine.html" target="_self">
        <!-- <em class="icon" style="display: inline-block;"></em> -->
        <em style="font-style:normal" class="text">编辑</em>
      </a>
    </div>
    <!-- 数据 :to="{path:'/positon/detail',query:{id:item.positionId}}"
    :to="{path:'/position/detail',query:{id:item.positionId}}"
    :href="'#/position/detail?id='+item.positionId"
    -->
    <ul class="list">
      <router-link tag="li" :to="{path:'/position/detail',query:{id:item.positionId}}" class="activeable list-item" v-for="(item,index) in arr" :key="item.positionId">
            <img src="//www.lgstatic.com/i/image3/M00/02/E2/CgpOIFpdX4yANN8-AACw_60J0PM027.png" class="item-logo">
            <div class="item-desc">
                <h2 class="item-title">{{arr[index].companyName}}</h2>
                <p class="item-info">
                    <span class="item-pos">
                        {{arr[index].positionName}} [ {{arr[index].city}} ]
                    </span>
                    <span class="item-salary">{{arr[index].salary}}</span>
                </p><br>
                <p class="item-time">{{arr[index].createTime}}</p>
            </div>
        </router-link>
    </ul>
    <div id="push_bottom" class="animated" style="display: block;" v-if="bool">
        <div class="push_bottom_table">
            <a class="push_bottom_download" href="#">
                <div class="push_bottom_row">
                    <div class="push_bottom_cell push_logo">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_logo_new.png" width="100%" alt="lagou.com">
                    </div>
                    <div class="push_bottom_cell push_tips">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_txt_new.png" width="100%" alt="拉勾 机会很多 挑满意的 手机投简历，在线聊Offer">
                    </div>
                    <div class="push_bottom_cell push_btn">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_btn_new.png" width="100%" alt="下载APP">
                    </div>
                </div>
            </a>
            <div class="push_mascot">
                <img class="push_mascot_img" src="//www.lgstatic.com/m/images/asset/custom/list/img/download_mascot.png" width="100%" alt="拉勾君">
            </div>
            <div class="close_btn" @click="close">
                <img class="close_btn_img" src="//www.lgstatic.com/m/images/asset/custom/list/img/download_btn_close.png" width="100%" alt="关闭">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
 import $ from 'jquery'
export default {
  name: 'ulul',

  data () {
    return {
      arr:[],
      bool:true
    }
  },
  methods:{
    close(){
      this.bool=false;
    }
  },
  created(){
      $.ajax({
        type:"get",
        url:"http://localhost:55555/home/data",
      }).then((res)=>{
        this.arr=res
      })
    }
}
</script>
<style scoped>
#content .custom-info {
    border-bottom: 1px solid #e8e8e8;
    height: 43px;
    line-height: 43px;
    padding: 0 15px;
    color: #555;
    position: relative;
    line-height: 43px;
    font-size: 14px;
    color: #555;
}
#content .custom-info .info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
}
#content .custom-info .go {
    position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    background-color: #f5f5f5;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    color: #00b38a;
    border-radius: 15px;
}
.item-desc{
  margin-left: 70px;
}
.list .list-item {
    padding: 14px;
    border-bottom: 1px solid #e8e8e8;
}
.list .item-logo {
    display: inline-block;
    float: left;
    width: 60px;
    height: 60px;
}
.list .item-title {
    font-size: 18px;
    margin-bottom: 6px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list .item-pos {
    font-size: 14px;
    float: left;
    width: 60%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list .item-time {
    font-size: 12px;
    color: #888;
}
.list .item-salary {
    font-size: 16px;
    color: #00b38a;
    float: right;
}
/*show*/
#push_bottom {
  height: 70px;
    display: none;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 45px;
    width: 100%;
    background-color: rgba(14,14,14,0.9);
    color: #fff;
    z-index: 999;
}
#push_bottom .push_bottom_table {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 4.3% 2.5% 3.3%;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_logo {
    margin-right: 2%;
    width: 12%;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell {
    float: left;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_tips {
    width: 52%;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell {
    float: left;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell img {
    display: block;
}
img, input {
    border: none;
    outline: none;
    padding: 0;
}
#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_btn {
    float: right;
    width: 27.5%;
    padding-top: 1%;
}
#push_bottom .push_bottom_table .push_mascot {
    position: absolute;
    left: 2.5%;
    top: 0;
    z-index: 2;
    width: 14%;
}
#push_bottom .push_bottom_table .close_btn {
    position: absolute;
    right: 2.5%;
    top: 0;
    display: block;
    width: 40px;
    padding: 2%;
    transform: translateY(-50%);
    border-radius: 100%;
    background: linear-gradient(to bottom, rgba(14,14,14,0.9) 0, rgba(14,14,14,0.9) 50%, rgba(14,14,14,0) 51%, rgba(14,14,14,0) 100%);
}
</style>

