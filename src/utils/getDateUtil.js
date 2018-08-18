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


