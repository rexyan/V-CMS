import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
// import state from './rootState';

Vue.use(Vuex);


const state = {
  /**
   * vuex测试值
   */
  msg: '默认值',
  show_name: '悟空',

  /**
   * 页脚版权信息， string
   */
  footer_info: '',

  /**
   * 文章数据
   * {
      article_title: '', // 文章默认标题
      brief_description: '', // 文章默认标题
      thumbs_up: 0, // 文章默认点赞数
      img_src: '' // 文章默认缩略图
    }
   */
  article_data: []
};


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store;

