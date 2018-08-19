<template>
  <Layout>
    <!-- 导航栏 -->
    <PageHeader :navList="getNavList"></PageHeader>

    <!-- 底部信息 -->
    <PageFooter :footerInfo="getFooterInfo"></PageFooter>
  </Layout>
</template>
<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import PageHeader from "../../components/PageHeader";
  import PageFooter from "../../components/PageFooter";

  export default {
    data() {
      return {}
    },
    components: {PageHeader, PageFooter},
    computed: {
      ...mapGetters([
        'getNavList',
        'getFooterInfo'
      ])
    },
    methods: {}
  }
</script>
