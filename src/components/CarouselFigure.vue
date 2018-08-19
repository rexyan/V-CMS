<template>
  <Carousel autoplay loop class="sowingMap">
    <CarouselItem v-for="item in imageUrlList">
      <div class="demo-carousel">
        <img :src="item">
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: "CarouselFigure",  // 轮播图
    props: ['imageUrlList']
  }
</script>

<style scoped>
  .sowingMap {
    max-width: 67%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
