<template>
  <div class="layout">
    <Layout>

      <!-- 导航栏 -->
      <PageHeader :navList="getNavList"></PageHeader>

      <Content>

        <Card class="mainBody">
          <!--主体内容部分-->
          <Card style="width: 70%;line-height: 30px;margin-bottom: 20px;text-align: center">
            <h3>DIV始终浮动在页面底部</h3>
            <Icon type="ios-eye"/>
            100
            <Icon type="md-time"/>
            <Time style="font-size: 10px;" :time="time1"/>
            <Icon type="md-heart"/>
            200
          </Card>

          <Card style="width: 70%;line-height: 30px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学到封装就会想到访问修饰符，说到访问修饰符，就会想到访问等级，或者说是访问能力的大小。当然也少不了默认的访问类型。
            C# 方法默认访问级别 : private （私有的）
            C# 类默认访问级别 : internal （内部的）
            封装 被定义为"把一个或多个项目封闭在一个物理的或者逻辑的包中"。在面向对象程序设计方法论中，封装是为了防止对实现细节的访问。
            抽象和封装是面向对象程序设计的相关特性。抽象允许相关信息可视化，封装则使开发者实现所需级别的抽象。
            C# 封装根据具体的需要，设置使用者的访问权限，并通过 访问修饰符 来实现。
            一个 访问修饰符 定义了一个类成员的范围和可见性。C# 支持的访问修饰符如下所示：
            public：所有对象都可以访问；（公共的）
            private：对象本身在对象内部可以访问；（私有的）
            protected：只有该类对象及其子类对象可以访问；（受保护的）
            internal：同一个程序集的对象可以访问；（内部的）
            protected internal：访问限于当前程序集或派生自包含类的类型。（内部受保护的）
            对于访问修饰符中 涉及的程序集和命名空间 ：
            程式集：IL+元数
            rivate：对象本身在对象内部可以访问；（私有的）
            private：对象本身在对象内部可以访问；（私有的）
            protected：只有该类对象及其子类对象可以访问；（受保护的）
            internal：同一个程序集的对象可以访问；（内部的）
            protected internal：访问限于当前程序集或派生自包含类的类型。（内部受保护的）<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于访问修饰符中 涉及的程序集和命名空间 ：
            程式集：IL+元数
            rivate：对象本身在对象内部可以访问；（
            protected：只有该类对象及其子类对象可以访问；（受保护的）
            internal：同一个程序集的对象可以访问；（内部的）
            protected internal：访问限于当前程序集或派生自包含类的类型。（内部受保护的）
            对于访问修饰符中
            rivate：对象本身在对象内部可以访问；（私有的）
            private：对象本身在对象内部可以访问；（私有的）
            protected：只有该类对象及其子类对象可以访问；（受保护的）
            internal：同一个程序集的对象可以访问；（内部的）
            protected internal：访问限于当前程序集或派生自包含类的类型。（内部受保护的）
            对于访问修饰符中 涉及的程序集和命名空间 ：
            程式集：IL+元数
            rivate：对象本身在对象内部可以访问；（
            protected：只有该类对象及其子类对象可以访问；（受保护的）
            internal：同一个程序集的对象可以访问；（内部的）
            protected internal：访问限于当前程序集或派生自包含类的类型。（内部受保护的）<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于访问修饰符中
            如果说命名空间是类库的逻辑组织形式，那么程序集
            如果说命名空间是类库的逻辑组织形式，那么程序集就是类库的物理组织形式。只有同时指定类型所在的命名空间及实现该类型的程序集，才能完全限定该类型。（摘抄自《精通.NET核心技术--原来与架构》 电子工业出版社）
            例如我们要用A类，则需要把包含A类的程序集(即*.DLL）引用到该工程中（物理）；而在程序中要声明A类的命名空间(逻辑）。

            <Tag v-for="item in getArticleTag">{{ item }}</Tag>
            <!--广告-->
            <Card style="margin-top: 20px;margin-bottom: 50px;">
              <div style="text-align:center;">
                <img style="height: 70px;width: 400px;" src="https://file.iviewui.com/asd/asd-vuebook.png">
              </div>
            </Card>

            <!--评论-->
            <Divider> 你的评论一针见血</Divider>
            <Form>
              <FormItem label="昵称">
                <Input type="text" placeholder="name">
                <Icon type="ios-person-outline" slot=""></Icon>
                </Input>
              </FormItem>
              <FormItem label="邮箱地址">
                <Input type="text" placeholder="email">
                <Icon type="ios-person-outline" slot=""></Icon>
                </Input>
              </FormItem>
              <FormItem label="评论内容">
                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem>
                <Button type="primary">发表</Button>
              </FormItem>
            </Form>

            <Avatar>Z</Avatar>
            <span> 1#  张三</span>
            <div style="margin-left: 30px;">现在已经没有这种方式了吧，这都是很久以前的方法了</div>
            <Divider/>
            <Avatar>L</Avatar>
            <span> 2#  李四</span>
            <div style="margin-left: 30px;">@张三
              现在还是有很多的，不过在网上还是能找到很多新的方法来解决这个问题，最常见的就是浮动例如我们要用A类，则需要把包含A类的程序集(即*.DLL）引用到该工程中（物理）；而在程序中要声明A类的命名空间(逻辑）
            </div>
            <Divider/>
            <Avatar>W</Avatar>
            <span> 1#  王五</span>
            <div style="margin-left: 30px;">学习了，学习了</div>


          </Card>
          <Card style="width: 28%;margin-left: 850px;position:absolute; z-index:999; top:20px;">
            <HotCard class="hotCard1" :hcardInfo="hotCardTwo"></HotCard>
            <HotCard class="hotCard1" :hcardInfo="hotCardOne"></HotCard>
            <Card style="text-align: left;line-height: 40px;">
              <ul style="list-style:none;">
                <li>区块链核心技术之密码学研究指南</li>
                <li>我的安卓生涯：从6k到25K，都经历了什么</li>
                <li>Android 酷炫自定义 View</li>
                <li>Docker 入门之个人博客搭建教程</li>
                <li>spark2.1.0之源码分析</li>
                <li>通过前端开发的十个任务对比 React 和 Vue</li>
                <li>喜欢网购奢侈品的年轻人越来越多</li>
                <li>深度解析 | 基于DAG的分布式任务调度平台</li>

              </ul>
            </Card>
          </Card>


        </Card>

        <!-- 底部信息 -->
        <PageFooter :footerInfo="getFooterInfo"></PageFooter>
      </Content>
    </Layout>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import ArticleList from '../../components/ArticleList.vue'
  import HotCard from "../../components/HotCard";
  import CarouselFigure from "../../components/CarouselFigure";
  import Advertisement from "../../components/Advertisement"
  import PageHeader from "../../components/PageHeader";
  import PageFooter from "../../components/PageFooter";

  export default {
    name: 'home',
    data: function () {
      return {
        time1: (new Date()).getTime() - 60 * 3 * 1000,
      }
    },
    components: {PageFooter, CarouselFigure, HotCard, ArticleList, Advertisement, PageHeader},
    computed: {
      hotCardOne: function () {
        return this.getCardInfo[0]
      },
      hotCardTwo: function () {
        return this.getCardInfo[1]
      },
      ...mapGetters([
        'getFooterInfo',
        'getArticleData',
        'getNoPictureArticleListData',
        'getNavList',
        'getCardInfo',
        'getArticleTag',
        'getCarousel',
        'getAdvertisement'
      ])
    },
    mounted: function () {
      // console.log(this.getCarousel)
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .hotCard1 {
    margin-left: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    text-align: center
  }

  .mainBody {
    border: 1px solid #CCC;
    max-width: 67%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    z-index: 999;
    margin-top: 20px;
  }

  .mainBody Row {
    min-height: 200px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto
  }

</style>
