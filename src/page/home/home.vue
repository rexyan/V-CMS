<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--Logo-->
          <div class="layout-logo"></div>

          <!--导航栏信息-->
          <div class="layout-nav">
            <MenuItem name='item.name' v-for="item in getNavList">
              <Icon type="ios-navigate"></Icon>
              <router-link :to="item.url">{{ item.name }}</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content>
        <Content>
          <Carousel autoplay loop class="sowingMap">
            <Carousel :imageUrl="item" v-for="item in getCarousel"></Carousel>
          </Carousel>
        </Content>
        <Card class="mainBody">
          <!--主体内容部分-->
          <Row>
            <Col :xs="17" :sm="17" :md="17" :lg="17">
              <!--文章列表部分-->
              <HotCard :hcardInfo="hotCardOne"></HotCard>
              <HotCard class="hotCardRight" :hcardInfo="hotCardTwo"></HotCard>
              <ArticleList :articleData="item" v-for="item in getArticleData"></ArticleList>
            </Col>
            <Col :xs="1" :sm="1" :md="1" :lg="1">&nbsp;</Col>
            <Col :xs="6" :sm="6" :md="6" :lg="6">
              <!--右边栏模块-->
              <Card class="Notice">
                <img src="">
                <h3>信息：今日第 1765 位来客.</h3>
              </Card>
              <Card class="Tag">
                <Tag v-for="item in getArticleTag">{{ item }}</Tag>
              </Card>
            </Col>
          </Row>
          <Card class="NoPictureArticleLeft">
            <Table :columns="getNoPictureArticleListData.columnsLeft" :data="getNoPictureArticleListData.dataLeft">
            </Table>
          </Card>
          <Card class="NoPictureArticleRight">
            <Table :columns="getNoPictureArticleListData.columnsRight" :data="getNoPictureArticleListData.dataRight">
            </Table>
          </Card>

          <!--分页信息-->
          <Page class="Page" :total="40" size="small" show-elevator show-sizer/>
        </Card>
      </Content>

      <Footer class="layout-footer-center">
        <!--底部信息-->
        {{ getFooterInfo }}
        <!--返回顶部按钮-->
        <BackTop></BackTop>
      </Footer>
    </Layout>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import ArticleList from '../../components/ArticleList.vue'
  import HotCard from "../../components/HotCard";
  import Carousel from "../../components/Carousel";

  export default {
    name: 'home',
    components: {Carousel, HotCard, ArticleList},
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
        'getCarousel'
      ])
    },
    mounted: function () {
      console.log(this.getCarousel)
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
    border: 1px solid #CCC;
    min-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .hotCardRight {
    margin-left: 430px;
    margin-top: -29%;
    margin-bottom: 20px;
  }

  .sowingMap {
    max-width: 67%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .mainBody {
    border: 1px solid #CCC;
    max-width: 67%;
    margin-left: auto;
    margin-right: auto
  }

  .mainBody Row {
    min-height: 200px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto
  }

  .Notice {
    width: 260px;
    border: 1px solid #CCC;
    margin-bottom: 20px;
    text-align: center
  }

  .Tag {
    width: 260px;
    border: 1px solid #CCC;
  }

  .NoPictureArticleLeft {
    width: 49%;
    border: 1px solid #CCC;
  }

  .NoPictureArticleRight {
    width: 49%;
    border: 1px solid #CCC;
    float: right;
    margin-top: -265px;
    margin-bottom: 40px;
  }

  .Page {
    margin-top: 20px;
  }
</style>
