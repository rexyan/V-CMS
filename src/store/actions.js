export const changeMsgNoParams = ({commit}) => {
  commit({
    type:'mutationMsg',
    msg:'修改值为默认值'
  })
};

export const changeShowName = ({commit}, new_name) => {
  commit({
    type:'changeShowName',
    show_name:new_name
  })
};
