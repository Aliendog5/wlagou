<template>
<div>
  <div id="content" v-show="!bool">
    <div class="logininfo">
      <div class="haslogin center">
        <a class="button" href="javascript:;" onclick="alert('下载拉勾APP，快速完善简历，投递更方便');"> 简历&gt; </a>
        <div class="headcon">
          <img class="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png">
          <p style="position: absolute">当前登录者：{{currentUser}}</p>
        </div>
        <div class="name"></div>
      </div>
    </div>
        <!-- 登录地址-->
    <div class="buttons">
      <a class="button deliver" href="/user/deliverlist.html">
        <span>投递</span>
      </a>
      <a class="button interview" href="/minterview/interviewlist.html">面试</a>
      <a class="button invitation" href="/minvite/invitation.html">
        <span>邀约</span>
      </a>
      <a class="button collect" href="/user/collectlist.html">收藏</a>
    </div>
    <a class="logout" href="javascript:void(0)" style="display: block;" @click="quit">退出登录</a>
  </div>
  <!-- denglu -->
  <div id="content" v-show="bool">

        <div class="logininfo">
                        <!-- 未登录 -->
                <div class="nologin center">
                    <router-link class="loginbut" :to="{path:'/reg'}" target="_self">登录 / 注册</router-link>
                </div>
                    </div>
        <!-- 登录地址-->


        <div class="buttons">

            <a class="button deliver" href="/user/deliverlist.html">
                <span>投递</span>


            </a>
            <a class="button interview" href="/minterview/interviewlist.html">面试</a>

            <a class="button invitation" href="/minvite/invitation.html">
                <span>邀约</span>
                            </a>

            <a class="button collect" href="/user/collectlist.html">收藏</a>
        </div>
            </div>
</div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      bool: true,
      currentUser:""
    };
  },
  mounted() {
    if (sessionStorage.getItem("user") == null) {
      this.bool = true;
    } else {
      this.bool = false;
      this.currentUser=sessionStorage.getItem("user")
    }
  },
  methods:{
    quit(){
      sessionStorage.removeItem("user")
       this.bool = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  font-family: Helvetica;
  font-size: 65.5%;
  color: #333;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input,
textarea,
button,
select,
div,
footer,
header,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
ul {
  margin: 0;
  list-style: none;
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-start: 0;
}
h2,
h3,
p {
  margin: 0;
}
a {
  outline: none;
  text-decoration: none;
}
img,
input {
  border: none;
  outline: none;
  padding: 0;
}
.none {
  display: none;
}
.invisibile {
  visibility: hidden;
}
#header {
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
}
#header .left {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40px;
}
#header .left:active {
  background-color: #f0f0f0;
}
#header .left .corner {
  width: 9px;
  height: 20px;
  margin: 13px auto 0 auto;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -1.5px -20.5px;
  background-size: 250px 250px;
  display: inline-block;
}
#header .right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 40px;
}
#header .right:active {
  background-color: #f0f0f0;
}
#header .right .corner {
  width: 17px;
  height: 20px;
  margin: 13px auto 0 auto;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -60px -46.5px;
  background-size: 250px 250px;
  display: inline-block;
}
#header .right-text {
  position: absolute;
  right: 15px;
  top: 0;
  height: 100%;
}
#header .right-text .text {
  font-size: 1.4rem;
  color: #fff;
}
#footer {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #e8e8e8;
  background-color: #f6f6f6;
  color: #c2cfcc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: -moz-box;
  display: -webkit-box;
  display: box;
  font-size: 1.6rem;
}
#footer div {
  height: 100%;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  box-flex: 1;
  text-align: center;
}
#footer div:active {
  background-color: #f0f0f0;
}
#footer div.selected {
  color: #00b38a;
  background-color: #e7f3f0;
}
#footer .icon {
  display: inline-block;
  width: 18px;
  height: 17px;
  margin-bottom: -2px;
}
#footer .footer-tab-custom .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -32px -2.5px;
  background-size: 250px 250px;
}
#footer .footer-tab-search .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -14px -2.5px;
  background-size: 250px 250px;
}
#footer .footer-tab-mine .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -2px;
  background-size: 250px 250px;
}
#footer .footer-tab-custom .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -32px -20.5px;
  background-size: 250px 250px;
}
#footer .footer-tab-search .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -14px -20.5px;
  background-size: 250px 250px;
}
#footer .footer-tab-mine .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -19.5px;
  background-size: 250px 250px;
}
.hover_effect {
  background-color: #f0f0f0;
}
.components-header {
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
}
.components-header .left {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40px;
}
.components-header .left:active {
  background-color: #f0f0f0;
}
.components-header .left .corner {
  width: 9px;
  height: 20px;
  margin: 13px auto 0 auto;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -1.5px -20.5px;
  background-size: 250px 250px;
  display: inline-block;
}
.components-header .right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 40px;
}
.components-header .right:active {
  background-color: #f0f0f0;
}
.components-header .right .corner {
  width: 17px;
  height: 20px;
  margin: 13px auto 0 auto;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -60px -46.5px;
  background-size: 250px 250px;
  display: inline-block;
}
.components-header .right-text {
  position: absolute;
  right: 15px;
  top: 0;
  height: 100%;
}
.components-header .right-text .text {
  font-size: 1.4rem;
  color: #fff;
}
.components-footer {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #e8e8e8;
  background-color: #f6f6f6;
  color: #c2cfcc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: -moz-box;
  display: -webkit-box;
  display: box;
  font-size: 1.6rem;
}
.components-footer div {
  height: 100%;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  box-flex: 1;
  text-align: center;
}
.components-footer div:active {
  background-color: #f0f0f0;
}
.components-footer div.selected {
  color: #00b38a;
  background-color: #e7f3f0;
}
.components-footer .icon {
  display: inline-block;
  width: 18px;
  height: 17px;
  margin-bottom: -2px;
}
.components-footer .footer-tab-custom .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -32px -2.5px;
  background-size: 250px 250px;
}
.components-footer .footer-tab-search .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -14px -2.5px;
  background-size: 250px 250px;
}
.components-footer .footer-tab-mine .icon {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -2px;
  background-size: 250px 250px;
}
.components-footer .footer-tab-custom .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -32px -20.5px;
  background-size: 250px 250px;
}
.components-footer .footer-tab-search .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -14px -20.5px;
  background-size: 250px 250px;
}
.components-footer .footer-tab-mine .selected {
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -52.5px -19.5px;
  background-size: 250px 250px;
}
#content {
  margin-bottom: 45px;
  padding: 0 15px;
}
#content:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#content .buttons {
  margin-bottom: 10px;
}
#content .buttons:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#content .buttons .button {
  display: block;
  width: 48%;
  height: 86px;
  line-height: 86px;
  background-color: #1fc8a1;
  text-align: center;
  color: #fff;
  font-size: 1.6rem;
  margin-top: 10px;
  position: relative;
}
#content .buttons .num {
  display: inline-block;
  width: 23px;
  height: 23px;
  line-height: 23px;
  background-color: #7efffa;
  text-align: center;
  color: #22ac9a;
  font-size: 1.3rem;
  border-radius: 50%;
  position: relative;
  top: -2px;
}
#content .buttons .invitation {
  float: left;
}
#content .buttons .interview {
  float: right;
}
#content .buttons .deliver {
  float: left;
}
#content .buttons .collect {
  float: right;
}
#content .logininfo {
  margin: 10px 0;
}
#content .center {
  text-align: center;
  width: 125px;
  margin: 0 auto;
}
#content .nologin {
  height: 111px;
}
#content .nologin .loginbut {
  font-size: 1.4rem;
  color: #fff;
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  margin: 0 auto;
  background-color: #1fc8a1;
  position: relative;
  top: 33px;
}
#content .nologin .loginbut:active {
  background-color: #00bd91;
}
#content .haslogin {
  position: relative;
  width: 100%;
  top: 10px;
  height: 111px;
}
#content .haslogin .headcon {
  height: 81px;
  width: 81px;
  margin: 0 auto;
  -webkit-border-radius: 40.5px;
  -moz-border-radius: 40.5px;
  border-radius: 40.5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  overflow: hidden;
  background-color: #f6f6f6;
}
#content .haslogin .button {
  position: absolute;
  color: #00b38a;
  font-size: 1.4rem;
  right: 0;
}
#content .haslogin .headpic {
  width: 72px;
  height: 72px;
  margin: 4px 0 0 1px;
  -webkit-border-radius: 36px;
  -moz-border-radius: 36px;
  border-radius: 36px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
}
#content .haslogin .name {
  font-size: 1.4rem;
  color: #333;
  height: 22px;
  line-height: 22px;
}
#content .address {
  width: 100%;
  padding: 15px;
  height: 68.5px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  position: relative;
}
#content .address:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#content .address a.edit {
  display: block;
  width: 23px;
  height: 23px;
  line-height: 23px;
  background-color: #e4e4e4;
  position: absolute;
  right: 0;
  bottom: 0;
}
#content .address a.edit i {
  display: block;
  width: 10px;
  height: 18px;
  margin: 0 auto;
  margin-top: 5px;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -88px -3.9px;
  background-size: 250px 250px;
}
#content .address .icon {
  display: block;
  width: 14px;
  height: 45px;
  background: url(/images/mobile/asset/common/img/icon2.png) no-repeat -110px -46.5px;
  background-size: 250px 250px;
  float: left;
}
#content .address .no-add {
  float: left;
  position: relative;
  left: 5px;
}
#content .address .no-add h2 {
  color: #00b38a;
  font-size: 1.5rem;
  font-weight: normal;
}
#content .address .no-add p {
  padding-top: 7px;
  color: #bbb;
  font-size: 1.2rem;
}
#content .address .add {
  position: relative;
  left: 5px;
}
#content .address .add p {
  color: #00b38a;
  font-size: 1.4rem;
  line-height: 22px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#content .logout {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #1fc8a1;
  color: #fff;
  font-size: 1.6rem;
  margin-bottom: 10px;
}
/*denglu*/
</style>
