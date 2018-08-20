<template>
  <Layout>
    <!-- 导航栏 -->
    <PageHeader :navList="getNavList"></PageHeader>

    <!-- 登录主体部分 -->
    <Card class="maxBody">
      <Card span="6" class="mainBody">
        <h2 class="loginPageTitle">注册</h2>
        <Form :label-width="80">
          <FormItem label="邮箱地址">
            <Input type="text"></Input>
          </FormItem>
          <FormItem label="密码">
            <Input type="password"></Input>
          </FormItem>
          <FormItem>
            <div class="formButton">
              <Button type="primary">确定</Button>
              <Button style="margin-left: 8px">取消</Button>
            </div>
          </FormItem>
        </Form>
        <Card>
          <div style="text-align:center;">
            <img style="height: 70px;width: 400px;" src="https://file.iviewui.com/asd/asd-vuebook.png">
          </div>
        </Card>
      </Card>
    </Card>

    <!-- 底部信息 -->
    <PageFooter class="footerFixed" :footerInfo="getFooterInfo"></PageFooter>
  </Layout>
</template>
<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import PageHeader from "../../components/PageHeader";
  import PageFooter from "../../components/PageFooter";
  import Advertisement from "../../components/Advertisement";

  export default {
    components: {PageHeader, PageFooter, Advertisement},
    computed: {
      ...mapGetters([
        'getNavList',
        'getFooterInfo',
        'getAdvertisement'
      ])
    },
    data() {
      return {}
    },
    methods: {},
    mounted: function () {
    }
  }
</script>


<style scoped>
  .maxBody {
    width: 67%;
    height: 800px;
    margin: 1% auto 5% auto;
  }

  .mainBody {
    margin: 10% auto auto auto;
    position: absolute;
    top: 0;
    left: -40px;
    right: 0;
    bottom: 0;
    width: 40%;
    height: 45%;
  }

  .footerFixed {
    position: fixed;
    bottom: 0;
  }

  .loginPageTitle {
    margin-left: 48%;
    margin-bottom: 1%;
    width: 10%;
  }

  .formButton {
    margin-left: 25%;
    width: 35%;
    margin-bottom: 2%;
  }

</style>
