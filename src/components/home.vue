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

    <el-container
      class="container-aside"
      :style="{paddingLeft: (getCollapseState == false?'200px':'64px')}"
    >
      <Header></Header>
      <el-main style="padding-top: 60px;">
        <AsideTitle></AsideTitle>

        <!--页面的展示-->
        <transition name="compAnimate" appear>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template> 
<script>
import Header from "@/views/layout/rightmain/header.vue";
import Aside from "@/views/layout/leftaside/aside.vue";

import AsideTitle from "@/views/layout/rightmain/AsideTitle.vue";
import Crumbs from "@/views/layout/rightmain/Crumbs.vue";

import { mapGetters } from "vuex";
import style from "@/assets/public.css";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header,
    Aside,
    AsideTitle
    // Crumbs,
  },
  computed: {
    ...mapGetters({
      getCollapseState: "CollapseState",
      getNavs: "Navs",
      getAsideTitle: "AsideTitle",
      getCount: "Count"
    })
  },
  watch: {
    $route: function(to) {
      this.createTabs(to.path);
    }
  },
  methods: {

    createTabs(path) {
      if (path !== "/welcome") {
        let asideItem = new Object();
        //得到当前点击的左侧导航的名字，存入vuex的header/asideTitle中
        let nav = this.getNavs.nav;
        for (let i = 0; i < nav.length; i++) {
          const parentTitle = nav[i].title;
          //判断是否存在子导航，如果存在则取子导航的名字，如果没有，则取当前的导航名字
          if (nav[i].child) {
            for (let j = 0; j < nav[i].child.length; j++) {

              if (nav[i].child[j].path === path) {
                const childTitle = nav[i].child[j].title;
                //判断vuex中是否已经存在当前标题，如果存在则不处理，否则添加入vuex中
                let result = this.getAsideTitle.filter(item => {
                  return item.title === nav[i].child[j].title;
                });
                if (result.length == 0) {
                  //添加标题标签
                  let count = this.getCount;
                  count++;
                  this.$store.commit("setCount", count);
                  asideItem.title = nav[i].child[j].title;
                  asideItem.path = nav[i].child[j].path;
                  asideItem.activeIndex = count;
                  this.$store.commit("setAside", asideItem);
                  this.$store.commit("setActiveIndex", count);
                  this.setCrumbs(parentTitle, childTitle);
                  return;
                } else {
                  //定位到当前标题标签
                  if (nav[i].child[j].path === path) {
                    let result = this.getAsideTitle.filter(item => {
                      return item.title === nav[i].child[j].title;
                    });
                    this.$store.commit("setActiveIndex", result[0].activeIndex);
                    this.setCrumbs(parentTitle, childTitle);
                  }
                }
              }
            }
          } else {
            if (nav[i].path === path) {
              //判断vuex中是否已经存在当前标题，如果存在则不处理，否则添加入vuex中
              let result = this.getAsideTitle.filter(item => {
                return item.title === nav[i].title;
              });
              const childTitle = nav[i].title;
              //添加标题标签
              if (result.length == 0) {
                let count = this.getCount;
                count++;
                this.$store.commit("setCount", count);
                asideItem.title = nav[i].title;
                asideItem.path = nav[i].path;
                asideItem.activeIndex = count;
                this.$store.commit("setAside", asideItem);
                this.$store.commit("setActiveIndex", count);
                this.setCrumbs(childTitle, "");
                return;
              } else {
                //定位到当前标题标签
                if (nav[i].path === path) {
                  let result = this.getAsideTitle.filter(item => {
                    return item.title === nav[i].title;
                  });
                  this.$store.commit("setActiveIndex", result[0].activeIndex);
                  this.setCrumbs(childTitle, "");
                }
              }
            }
          }
        }
      } else {
        this.$store.commit("setActiveIndex", 0);
        this.setCrumbs("控制台", "主控制台");
      }
    },

    setCrumbs(pt, ct) {
      let crumbs = new Array();
      crumbs.push(pt, ct);
      this.$store.commit("setCrumbs", crumbs);
    }
  }
};
</script>
<style scoped >
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #5f4b8b;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
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

.container-aside {
  padding-top: 60px;
}

/*组件过渡动画*/
[appear] {
  padding-top: 60px;
}
.compAnimate-enter {
  opacity: 0;
  transform: translateY(-60px);
}

.compAnimate-leave-to {
  opacity: 0;
}

.compAnimate-enter-active {
  transition: all 0.8s ease-in-out;
}
.compAnimate-leave-active {
  transition: all 0.2s ease;
}
</style>
