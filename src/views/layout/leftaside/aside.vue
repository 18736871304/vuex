<template>
  <div height="100%" style="width: auto">

    <!-- 导航图标 -->
    <div v-if="nav.LOGO && this.nav.LOGO.id === '1'"
         class="avatar avatar-flex"
         :style="{width: (getCollapseState == false)?'200px':'64px'}">
      <div>
        <a href="javascript:;">
          <img src="../../../assets/logo.png" alt="" :style="{width: '50px', height: '50px',borderRadius:'25px',marginRight: '10px'}">
          <span style="border-radius:25px" >我的管理系统</span>
          <!-- {{nav.LOGO.title}} -->
        </a>
      </div>
    </div>
    <!-- -->
    <el-menu
      :style="{width: (getCollapseState == false)?'200px':'64px'}"
      :default-active="String(activeNav)"
      class="el-menu-vertical"
      :collapse="getCollapseState"
      :background-color="getAsideColor"
      :text-color="getATextColor"
      :active-text-color="getActiveColor"
      :unique-opened="getDoubleOpen" 
      :default-openeds="defaultOpen"
      ref="menu"
      router
    >
      <template v-for="(item, parentIndex) in nav.nav">

        <SideNav
          :item="item"
          :index="parentIndex"
          :state="getCollapseState"
          v-bind:key="parentIndex"
          style="color:#fff"
        ></SideNav>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";
import SideNav from "./SideNav";

export default {
  name:'aside',
  data() {
    return {
      nav: [],
      defaultOpen: ["0"]
    };
  },
  components: {
    SideNav
  },
  computed: {
    activeNav() {
      //当前激活的导航
      return this.$route.path;
    },
    ...mapGetters({
      getCollapseState: "CollapseState",
      getAsideColor: "AsideColor",
      getATextColor: "ATextColor",
      getActiveColor: "ActiveColor",
      getDoubleOpen: "DoubleOpen"
    })
  },
  created() {
    console.log(this.getDoubleOpen)
    //获得导航的json数据
    Axios({
      url: "https://18736871304.github.io/vuex/dist/nav.json",
      method: "get"
    }).then(res => {
      //把导航数据存入vuex中
      this.$store.dispatch("setNavs", {
        nav: res.data.nav
      });
      
      this.nav = res.data;
    });
  }
};
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
    padding-top: 60px;
    width: 200px;
    min-height: 400px;
    height: calc(100% - 60px);
  }

  .aside-show {
    width: 200px;
    max-width: 200px;
    min-height: 400px;
    height: 100%;
  }

  .aside-hide {
    width: 64px;
    max-width: 64px;
    min-height: 400px;
    height: 100%;
  }

  .el-menu--collapse {
    height: 100%;
    margin-top: 60px
  }

  .el-submenu [class^=fa] {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 16px;
  }

.el-submenu__icon-arrow,.el-icon-arrow-down{
   color: #fff;
}
  
/* .aa {
  height: 60px;
  background: red;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 1000;
} */
</style>