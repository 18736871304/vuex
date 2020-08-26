import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    name: '这是vuex中的',
    isCollapse: false,
    nav: [],
    asideColor: '#5F4B8B',
    aTextColor: '#FFFFFF',
    aActiveColor: '#ff6600',
    headerBColor: '#5F4B8B',
    headerColor: '#FFFFFF',
  },
  mutations: {
    //es6语法，等同edit:funcion(){...}
    //改变左侧栏是否展开或收缩
    setCollapseState(state, payload) {
      console.log(payload)
      state.isCollapse = payload
    },
    Navs: state => {
      return state.nav
    }

  },
  getters: {
    //获取左侧栏是否展开或收缩的状态
    CollapseState(state) {
      return state.isCollapse
    },
    //头部背景颜色（HeaderBColor）和字体颜色（HeaderColor）
    HeaderBColor: state => {
      return state.headerBColor
    },
    HeaderColor: state => {
      return state.headerColor
    },


    AsideColor: state => {
      return state.asideColor
    },
    ATextColor: state => {
      return state.aTextColor
    },
    ActiveColor: state => {
      return state.aActiveColor
    },
    DoubleOpen: state => {
      return state.doubleOpen
    }
  },
  actions: {
    setNavs(context, nav) {
      context.commit('Navs', nav)
    }
  },
  modules: {}
});