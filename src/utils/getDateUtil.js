export const footerInfoApi = () => {
  let footerInfo = '2011-2016 &copy; OurHome-SH';
  return footerInfo
};

export const articleDataApi = () => {
  let articleData =
    [
      {
        articleTitle: '关于Vue实例的生命周期created和mounted的区别',
        briefDescription: 'Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。',
        thumbsUp: 0,
        imgSrc: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1681391545,4187928589&fm=85&s=0D803C72F2A477157583DA4D0300C0EE'
      },
      {
        articleTitle: '详解字符串的快速匹配算法：KMP',
        briefDescription: '在字符串匹配算法里，有两种较为常见的方式，BF 算法与 KMP 算法。\n' +
        '\n' +
        'BF 算法是指将主串的第 I 个字符与模式串的第1个字符进行比较，如果相等便继续进行比较操作；若不匹配时，回溯到主串的第 I+1 个字符继续与模式串的第1个字符进行比较，直到结果出现。',
        thumbsUp: 0,
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534657103729&di=74490f7baeb5005314bb330cef8e094d&imgtype=0&src=http%3A%2F%2Fwww.jigao616.com%2Fupload%2Fpatent%2F2017%2F11%2F27%2F16827962.gif'
      },
      {
        articleTitle: '50行代码上手 OpenCV：眼球杂质识别',
        briefDescription: '图像处理在理论层面很复杂，但在应用层面却不难入门，笔者是一位土木工程专业毕业生，工作后转行开发，先后做过 VBA、Android、微信小程序、OpenCV 等项目，大部分都是自学，希望能和大家一起用代码探索世界',
        thumbsUp: 0,
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534657209535&di=de2ee1f2bde867acdf76f275f2d2b3f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dd3a8a204b299a9012f38537575fc600e%2F4d086e061d950a7bce9030d400d162d9f2d3c97d.jpg'
      }
    ];
  return articleData
};

export const noPictureArticleListDataApi = () => {
  let noPictureArticleListData = {
    columnsLeft: [
      {
        title: '技术',
        key: 'name'
      },
      {
        title: 'Action',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: '',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  alert(params.index)
                }
              }
            }, '查看')
          ]);
        }
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
      },
      {
        title: 'Action',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: '',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  alert(params.index)
                }
              }
            }, '查看')
          ]);
        }
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
      icoType: 'ios-keypad',
      url: '/register'
    },
    {
      name: '登录',
      icoType: 'ios-analytics',
      url: '/login'
    },
    {
      name: '管理中心',
      icoType: 'ios-paper',
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

export const articleTagApi = () => {
  return ['Nginx', 'Vue', 'Java', 'PHP', 'Lua']
};


export const carouselApi = () => {
  let data = ['http://blog.wdyun.cn/content/uploadfile/201503/7b1a1425208684.png', 'http://ww4.sinaimg.cn/large/991a4176gw1f0prbvc4zmj20ws09qdld.jpg']
  return data
};


export const advertisementApi = () => {
  let data = [
    {
      'content': '新版Mac Pro开售',
      'src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534656776260&di=73ded40d7e96f5f045abcc126823c0ea&imgtype=0&src=http%3A%2F%2Fwww.hztcoa.com%2Fimages%2F201703%2Fsource_img%2F27914_P_1488504452366.jpg'
    },
    {
      'content': '极简马克杯 ¥200',
      'src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534655624521&di=1f8fea17ad4e3452e179a212259ad087&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi2%2F758491896%2FTB22ra6bUhnpuFjSZFpXXcpuXXa_%2521%2521758491896.jpg'
    }
  ];
  return data
};
