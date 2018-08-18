<template>
  <CarouselItem>
    <div class="demo-carousel">
      <img :src="imageUrl">
    </div>
  </CarouselItem>
</template>

<script>
  export default {
    name: "Carousel",  // 轮播图
    props: ['imageUrl']
  }
</script>

<style scoped>

</style>
