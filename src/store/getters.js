/**
 * vuex 测试
 * @param state
 * @returns {string}
 */


export const gettersMsg = state => state.msg;
// ---------------end------------


import * as getDateUtil from '../utils/getDateUtil'
import {setArticleData, setFooterInfo, setNoPictureArticleListData} from './mutations'

/**
 * 获取footer信息
 * @param state
 * @returns {string}
 */
export const getFooterInfo = state => {
  let footerInfo = getDateUtil.footerInfoApi(); // 通过utils获取信息
  if (state.footerInfo !== footerInfo) {        // 判断vuex中的值和获取的是否一致
    setFooterInfo(state, footerInfo);                  // 将通过接口获取的接口放入vuex中，并返回结果
  }
  return state.footerInfo
};

/**
 * 获取带图文的文章信息
 * @param state
 * @returns {Array}
 */
export const getArticleData = state => {
  let articleData = getDateUtil.articleDataApi();  // 通过utils获取信息
  if (state.articleData !== articleData) {         // 判断vuex中的值和获取的是否一致
    setArticleData(state, articleData);                   // 将通过接口获取的接口放入vuex中，并返回结果
  }
  return state.articleData
};

/**
 * 获取不带图文的文章信息
 * @param state
 * @returns {Array}
 */
export const getNoPictureArticleListData = state => {
  let noPictureArticleListData = getDateUtil.noPictureArticleListDataApi(); // 通过utils获取信息
  if (state.noPictureArticleListData !== noPictureArticleListData) {        // 判断vuex中的值和获取的是否一致
    setNoPictureArticleListData(state, noPictureArticleListData);                  // 将通过接口获取的接口放入vuex中，并返回结果
  }
  return state.noPictureArticleListData
};

/**
 * 获取index基本信息，包括footer信息，文章信息，不带图片的文章列表信息
 * @returns {{footerInfo: string, articleData: (articleData|{type}), noPictureArticleListData: ({columnsLeft: {title: string, key: string}[], dataLeft: *[], columnsRight: {title: string, key: string}[], dataRight: *[]}|noPictureArticleListData|{columnsLeft, dataLeft, columnsRight, dataRight})}}
 */
export const getIndexBasicInfo = () => {
  return {
    footerInfo: getFooterInfo,
    articleData: getArticleData,
    noPictureArticleListData: getNoPictureArticleListData,
  }
};
