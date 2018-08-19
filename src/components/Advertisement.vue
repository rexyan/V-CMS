<template>
  <Card class="Notice">
    <img :src="AdInfo.src">
    <h3>{{ AdInfo.content }}</h3>
  </Card>
</template>

<script>
  export default {
    name: "Advertisement",
    props: ['AdInfo']
  }
</script>

<style scoped>
  .Notice {
    width: 260px;
    border: 1px solid #CCC;
    margin-bottom: 20px;
    text-align: center;
    margin-left: 18%;
  }

  .Notice img{
    width: 200px;height: 200px
  }
</style>
