
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--Logo-->
          <div class="layout-logo"></div>
          <!--导航栏信息-->
          <div class="layout-nav">
            <MenuItem name='item.name' v-for="item in nav_list">
              <Icon type="ios-navigate"></Icon>
              <router-link :to="item.url">{{ item.name }}</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Content>
          <div style="max-width: 67%;margin-right: auto;margin-left: auto;margin-top: 20px;margin-bottom: 20px;">
            <Carousel autoplay loop>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://ww4.sinaimg.cn/large/991a4176gw1f0prbvc4zmj20ws09qdld.jpg">
                </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://blog.wdyun.cn/content/uploadfile/201503/7b1a1425208684.png">
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </Content>
        <Card style="border: 1px solid #CCC;max-width: 67%;margin-left: auto;margin-right: auto">
          <div style="min-height: 200px;max-width: 100%;margin-left: auto;margin-right: auto">
            <!--主体内容部分-->
            <Row>
              <Col :xs="17" :sm="17" :md="17" :lg="17">
                <!--文章列表部分-->

                <Card style="width:390px;border: 1px solid #CCC;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img style="height: 180px" width="180px;" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3104374633,2813465514&fm=27&gp=0.jpg">
                    <h3>高质量代码炼成术</h3>
                  </div>
                </Card>

                <Card
                  style="width:390px;border: 1px solid #CCC;margin-left: 410px;margin-top: -264px;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img style="height: 180px" width="180px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534590290591&di=4a4f8a230ee5ef501329a42856ba4168&imgtype=0&src=http%3A%2F%2Fwww.kokojia.com%2FPublic%2Fimages%2Fupload%2Farticle%2F2017-04%2F58ea28196c442.jpg">
                    <h3>k8s从入门到放弃</h3>
                  </div>
                </Card>
                <!--文章列表-->
                <ArticleList :articleData="item" v-for="item in getArticleData"></ArticleList>
              </Col>
              <Col :xs="1" :sm="1" :md="1" :lg="1">&nbsp;</Col>
              <Col :xs="6" :sm="6" :md="6" :lg="6">
                <!--右边栏模块-->
                <Card style="width:260px;border: 1px solid #CCC;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img src="">
                    <h3>信息：今日第 1765 位来客.</h3>
                  </div>
                </Card>

                <Card style="width:260px;border: 1px solid #CCC;">
                  <Tag>Nginx + lua</Tag>
                  <Tag>日语</Tag>
                  <Tag>Docker</Tag>
                  <Tag>算法</Tag>
                  <Tag>Java</Tag>
                  <Tag>Vue</Tag>
                </Card>

              </Col>
            </Row>

            <div>
              <Card style="width:49%;border: 1px solid #CCC;">
                <Table :columns="getNoPictureArticleListData.columnsLeft" :data="getNoPictureArticleListData.dataLeft"></Table>
              </Card>
              <Card style="width:49%;border: 1px solid #CCC;float: right;margin-top: -265px;">
                <Table :columns="getNoPictureArticleListData.columnsRight" :data="getNoPictureArticleListData.dataRight"></Table>
              </Card>
            </div>
            <!--分页信息-->
            <Page :total="40" size="small" show-elevator show-sizer style="margin-top: 20px;"/>
          </div>
        </Card>
      </Content>
      <Footer style="border: 1px solid #CCC;min-width: 64%;margin-left: auto;margin-right: auto;margin-top: 20px;"
              class="layout-footer-center">
        <!--底部信息-->
        {{ getFooterInfo }}
        <!--返回顶部按钮-->
        <BackTop></BackTop>
      </Footer>
    </Layout>
  </div>
</template>


<script>
  import ArticleList from '@/components/ArticleList.vue'
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  export default {
    name: 'home',
    components: {ArticleList},
    data() {
      return {}
    },
    computed: {
      nav_list: function () {
        return [
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
        ]
      },
      ...mapGetters(['getFooterInfo', 'getArticleData', 'getNoPictureArticleListData'])
    },
    mounted: function () {
      console.log(this.getNoPictureArticleListData)
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

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }


</style>
