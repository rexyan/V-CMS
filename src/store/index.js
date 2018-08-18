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

  footerInfo: '',
  articleData: [],
  noPictureArticleListData:[]
};


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store;

