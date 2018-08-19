<template>
  <div class="layout">
    <Layout>

      <!-- 导航栏 -->
      <PageHeader :navList="getNavList"></PageHeader>

      <Content>

        <!-- 幻灯片 -->
        <CarouselFigure :imageUrlList="getCarousel"></CarouselFigure>

        <Card class="mainBody">
          <!--主体内容部分-->
          <Row>
            <Col :xs="17" :sm="17" :md="17" :lg="17">
              <!--文章列表部分-->
              <HotCard :hcardInfo="hotCardOne"></HotCard>
              <HotCard class="hotCardRight" :hcardInfo="hotCardTwo"></HotCard>
              <ArticleList :articleData="item" v-for="item in getArticleData"></ArticleList>
            </Col>
            <Col :xs="1" :sm="1" :md="1" :lg="1">

            </Col>
            <Col :xs="6" :sm="6" :md="6" :lg="6">

              <!--右边栏模块-->
              <Advertisement :AdInfo="item" v-for="item in getAdvertisement"></Advertisement>
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

  .hotCardRight {
    margin-left: 430px;
    margin-top: -29%;
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

  .Tag {
    width: 260px;
    border: 1px solid #CCC;
    margin-left: 18%;
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
