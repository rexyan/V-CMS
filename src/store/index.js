import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);


const state = {
  // vuex测试值
  msg: '默认值',
  show_name: '悟空',

  footerInfo: '', // 页脚信息
  articleData: [], // 带图文的文章信息
  noPictureArticleListData: [], // 不带图文的文章信息
  navList: [],  // 菜单栏
  cardInfo: [],  // 热门卡片
  articleTag: [],  // tag标签
  carousel: [] // 轮播图
};


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store;

