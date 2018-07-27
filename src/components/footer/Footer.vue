<template>
  <div id="footer">
    <router-link tag="div"
                 to="/position"
                 @click.native="show('position')"
                 :class="{'selected':index=='position'}"
                 class="footer-tab-custom">
      <!-- <span class="icon selected"></span> -->
      <span class="text">职位</span>
    </router-link>
    <router-link tag="div"
                 to="/search"
                 @click.native="show('search')"
                 :class="{'selected':index=='search'}"
                 class="footer-tab-search">
      <!-- <span class="icon"></span> -->
      <span class="text">搜索</span>
    </router-link>
    <router-link tag="div"
                 to="/my"
                 @click.native="show('my')"
                 :class="{'selected':index=='my'}"
                 class="footer-tab-mine">
      <!-- <span class="icon"></span> -->
      <span class="text">我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "Footer",
    data () {
      return {
        index: window.location.href.split("#")[1].split("/")[1]
      }
    },
    methods: {
      show (str) {
        this.index = str
      }
    },

  }
</script>
<style>
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
.footer-tab-custom,
.footer-tab-search,
.footer-tab-mine {
  flex: 1;
  font-size: 20px;
  text-align: center;
}
.selected {
  color: #00b38a;
  background-color: #e7f3f0;
}
</style>
