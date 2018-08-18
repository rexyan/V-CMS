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

