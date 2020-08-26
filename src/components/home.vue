<template>
  <el-container>
    <el-aside
      style="width: auto"
      class="aside aside-flex"
      :class="{'aside-show': getCollapseState == false?true:false,
                      'aside-hide':getCollapseState == true?true:false}"
    >
      <Aside></Aside>
    </el-aside>


    <el-container class="container-aside" :style="{paddingLeft: (getCollapseState == false?'200px':'64px')}">
      <Header></Header>
      <el-main >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </el-container>
</template> 
<script>
import Header from "@/views/layout/rightmain/header.vue";
import Aside from "@/views/layout/leftaside/aside.vue";
import { mapGetters } from "vuex";
import style from "@/assets/public.css"
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header,
    Aside
  },
  computed: {
    ...mapGetters({
      getCollapseState: "CollapseState"
    })
  },

  methods: {}
};
</script>
<style scoped >
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #5F4B8B;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


.container-aside{
padding-top: 60px;
}

  /*组件过渡动画*/
  .compAnimate-enter {
    opacity: 0;
    transform: translateY(-60px);
  }

  .compAnimate-leave-to {
    opacity: 0;
  }

  .compAnimate-enter-active {
    transition: all .8s ease-in-out;
  }
  .compAnimate-leave-active {
    transition: all .2s ease;
  }
</style>
