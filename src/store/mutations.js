/**
 * vuex 测试
 * @param state
 * @param payload
 */

export const mutationMsg = (state, payload) => {
  state.msg = payload.msg;
};

export const changeShowName = (state, payload) => {
  /**
   * 如果此方法在action中被调用，那么赋值方式为state.show_name = payload.show_name。否则可直接将state.show_name = payload，外部使用mapMutations调用
   */
  state.show_name = payload.show_name
};

export const changeShowName2 = (state, name_value) => {
  /**
   * 如果此方法在action中被调用，那么赋值方式为state.show_name = payload.name_value。否则可直接将state.show_name = name_value，外部使用mapMutations调用
   */
  state.show_name = name_value
};
// ---------------end--------------


/**
 * 设置页脚信息
 * @param state
 * @param footerinfo
 */
export const setFooterInfo = (state, footerinfo) => {
  state.footerInfo = footerinfo
};

/**
 * 设置文章信息
 * @param state
 * @param articleData
 */
export const setArticleData = (state, articleData) => {
  state.articleData = articleData
};

/**
 * 设置不带图标的文章列表信息
 * @param state
 * @param noPictureArticleListData
 */
export const setNoPictureArticleListData = (state, noPictureArticleListData) => {
  state.noPictureArticleListData = noPictureArticleListData
};

/**
 * 设置菜单栏
 * @param state
 * @param navList
 */
export const setNavList = (state, navList) => {
  state.navList = navList
};

/**
 * 首页热门卡片
 * @param state
 * @param cardInfo
 */
export const setCardInfo = (state, cardInfo) => {
  state.cardInfo = cardInfo
};

/**
 * 设置文章标签
 * @param state
 * @param tag
 */
export const setArticleTag = (state, tag) => {
  state.articleTag = tag
};

/**
 * 设置轮播图
 * @param state
 * @param carousel
 */
export const setCarousel = (state, carousel) => {
  state.carousel = carousel
};
