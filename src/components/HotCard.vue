<template>
  <Card class="hcard">
    <img :src="hcardInfo.articleSrc">
    <h3>{{ hcardInfo.articleTitle }}</h3>
  </Card>
</template>

<script>
  export default {
    name: "HotCard", // 首页热门卡片
    props: ['hcardInfo']
  }
</script>

<style scoped>
  .hcard {
    width: 49%;
    cursor: pointer;
    text-align: center
  }

  .hcard img {
    height: 180px;
    width:180px;
  }
</style>
