export const footerInfoApi = () => {
  let footerInfo = '2011-2016 &copy; OurHome-SH';
  return footerInfo
};

export const articleDataApi = () => {
  let articleData = [{
    articleTitle: '关于Vue实例的生命周期created和mounted的区别',
    briefDescription: 'Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。',
    thumbsUp: 0,
    imgSrc: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1681391545,4187928589&fm=85&s=0D803C72F2A477157583DA4D0300C0EE'
  }];
  return articleData
};

export const noPictureArticleListDataApi = () => {
  let noPictureArticleListData = {
    columnsLeft: [
      {
        title: '技术',
        key: 'name'
      }
    ],
    dataLeft: [
      {
        name: 'Docker从入门到放弃'
      },
      {
        name: '深入理解Vuex'
      },
      {
        name: 'Vuex全家桶构建轻型内容管理系统'
      },
      {
        name: 'Python反射在实际场景中的应用'
      },
    ],
    columnsRight: [
      {
        title: '互联网',
        key: 'name'
      }
    ],
    dataRight: [
      {
        name: '谷歌有望回归中国'
      },
      {
        name: '小黄车可能要和你说再见了'
      },
      {
        name: '支付宝发现史上最大漏洞'
      },
      {
        name: 'CSDN封禁大量支付相关文章账号'
      }
    ],
  };
  return noPictureArticleListData
};

export const navListApi = () => {
  let data = [
    {
      name: '注册',
      type: 'ios-keypad',
      url: '/register'
    },
    {
      name: '登录',
      type: 'ios-analytics',
      url: '/login'
    },
    {
      name: '管理中心',
      type: 'ios-paper',
      url: '/admin'
    }
  ];
  return data
};


export const cardInfoApi = () => {
  let cardInfo = [
    {
      articleTitle: '高质量代码炼成术',
      articleSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3104374633,2813465514&fm=27&gp=0.jpg'
    },
    {
      articleTitle: 'k8s从入门到放弃',
      articleSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534590290591&di=4a4f8a230ee5ef501329a42856ba4168&imgtype=0&src=http%3A%2F%2Fwww.kokojia.com%2FPublic%2Fimages%2Fupload%2Farticle%2F2017-04%2F58ea28196c442.jpg'
    }
  ];
  return cardInfo
};

export const articleTagApi = () =>{
  return ['Nginx', 'Vue', 'Java', 'PHP', 'Lua']
};



