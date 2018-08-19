<template>
  <Layout>
    <!-- 导航栏 -->
    <PageHeader :navList="getNavList"></PageHeader>

    <!-- 登录主体部分 -->
    <Row>
      <Col span="6" class="mainBody">
        <Form :label-width="80">
          <FormItem label="用户名">
            <Input type="text"></Input>
          </FormItem>
          <FormItem label="密码">
            <Input type="password"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary">确定</Button>
            <Button style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>

    <!-- 底部信息 -->
    <PageFooter class="footerFixed" :footerInfo="getFooterInfo"></PageFooter>
  </Layout>
</template>
<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import PageHeader from "../../components/PageHeader";
  import PageFooter from "../../components/PageFooter";

  export default {
    components: {PageHeader, PageFooter},
    computed: {
      ...mapGetters([
        'getNavList',
        'getFooterInfo'
      ])
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>


<style scoped>
  .mainBody {
    margin: 5% auto auto auto;
    position: absolute;
    top: 0;
    left: -40px;
    right: 0;
    bottom: 0;
  }

  .footerFixed {
    position: fixed;
    bottom: 0;
  }
</style>
