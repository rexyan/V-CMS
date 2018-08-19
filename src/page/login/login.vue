<template>
  <Layout>
    <!-- 导航栏 -->
    <PageHeader :navList="getNavList"></PageHeader>
  </Layout>
</template>
<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  import PageHeader from "../../components/PageHeader";

  export default {
    data() {
      return {}
    },
    components: {PageHeader},
    computed: {
      ...mapGetters([
        'getNavList',
      ])
    },
    methods: {}
  }
</script>
