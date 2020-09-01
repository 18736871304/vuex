import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    isCollapse: false,
    nav: [],
    asideColor: '#5F4B8B',
    aTextColor: '#FFFFFF',
    aActiveColor: '#ff6600',
    headerBColor: '#5F4B8B',
    headerColor: '#FFFFFF',

    asideTitle: [{
      title: '主控制台',
      path: '/welcome',
      activeIndex: 0
    }], //存储点击左侧导航栏后的导航名，作为标题显示头
    crumbs: [
      '控制台', '主控制台'
    ], //存储面包屑
    // {
    //   parentTitle: '控制台',
    //     childTitle: '主控制台'
    // }
    activeIndex: 0, //当前活跃的标题下标
    count: 0 ,//下标增值变量
    doubleOpen: true,//只展开一个侧边导航
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
    //获取面包屑里的数据
    AsideTitle: state => {
      return state.asideTitle
    },
    //面包屑的下标
    active: state => {
      return state.activeIndex
    },
    //比对下标，添加选中时的颜色
    Count: state => {
      return state.count
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
    //侧边是否只打开一个菜单导航
    DoubleOpen: state => {
      return state.doubleOpen
    },
    Navs: state => {
      return state.nav
    }
  },
  mutations: {
    //es6语法，等同edit:funcion(){...}
    //改变左侧栏是否展开或收缩
    setCollapseState(state, payload) {
      console.log(payload)
      state.isCollapse = payload
    },
    setNav(state, values) {
      state.nav = values
    },


    //面包屑下标增加
    setCount(state, value) {
      state.count = value
    },
    //点击面包屑，侧边导航栏打开
    setAside(state, values) {
      state.asideTitle.push(values)
    },
  
    delOrAddAside(state, value) {
      state.asideTitle = value
    },


  //侧边是否只打开一个菜单导航
    valueChange(state, changeValue) {
      state.doubleOpen = changeValue
    },


    setActiveIndex(state, value) {
      state.activeIndex = value
    },
    setCrumbs(state, crumbs) {
      state.crumbs = crumbs
    },
    setnav(state, values) {
      state.nav = values
    },
  },

  actions: {
    setNavs(context, nav) {
      context.commit('setnav', nav)
    }
  },
  modules: {}
});