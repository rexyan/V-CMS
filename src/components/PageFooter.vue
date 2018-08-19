<template>
  <Footer class="layout-footer-center">
    <!--底部信息-->
    {{ footerInfo }}
    <!--返回顶部按钮-->
    <BackTop></BackTop>
  </Footer>
</template>

<script>
  export default {
    name: "PageFooter",
    props: ['footerInfo']
  }
</script>

<style scoped>
  .layout-footer-center {
    text-align: center;
    border: 1px solid #CCC;
    min-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
</style>
