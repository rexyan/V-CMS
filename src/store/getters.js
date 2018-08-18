/**
 * vuex 测试
 * @param state
 * @returns {string}
 */
export const gettersMsg = state => state.msg;


export const getBasicInfo = state => {
  return {
    footer_info:state.footer_info,


  }};
