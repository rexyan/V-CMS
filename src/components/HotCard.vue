<template>
    <Card style="width: 49%;">
      <div style="text-align:center">
        <img style="height: 180px" width="180px;" :src="hcardInfo.articleSrc">
        <h3>{{ hcardInfo.articleTitle }}</h3>
      </div>
    </Card>
</template>

<script>
  export default {
    name: "HotCard", // 首页热门卡片
    props:['hcardInfo']
  }
</script>

<style scoped>

</style>
