<template>
  <Card class="article_content">
    <div class="img_div">
      <img style="width: 110px" height="110px" class="article_img" :src="articleData.imgSrc">
    </div>
    <div class="thumbs_up">
      <Icon @click="thumbs_up_click" type="md-thumbs-up" size="20"/> &nbsp; <span style="font-size: 14px;">{{ thumbs_up_number }}</span>
      &nbsp;
      <Icon @click="thumbs_down_click" type="md-thumbs-down" size="20"/>
    </div>
    <div class="article_title">
      <span>{{ articleData.articleTitle }}</span>
      <div>
        <Icon type="ios-eye"/>
        100
        <Icon type="md-time"/>
        <Time style="font-size: 10px;" :time="time1"/>
      </div>
    </div>
    <div class="brief_description">
      {{ articleData.briefDescription }}
    </div>
  </Card>
</template>

<script>
  export default {
    name: "ArticleList",
    props: {
      articleData: {
        type: Object
      }
    },
    data: function () {
      return {
        thumbs_up_number: this.articleData.thumbsUp,
        time1: (new Date()).getTime() - 60 * 3 * 1000,
      }
    },
    methods: {
      thumbs_up_click: function () {
        this.thumbs_up_number += 1;
      },
      thumbs_down_click: function () {
        this.thumbs_up_number -= 1;
      }
    }
  }
</script>

<style scoped>
  .article_content {
    border: 1px solid #CCC;
    min-height: 160px;
    margin-bottom: 20px;
  }

  .img_div {
    width: 140px;
    margin-left: 30px;
    max-height: 140px;
    cursor: pointer;
  }

  .article_img {
    max-height: 110px;
    width: 110px;
  }

  .thumbs_up {
    cursor: pointer;
    width: 90px;
    margin-left: 42px;
  }

  .article_title {
    margin-left: 190px;
    margin-top: -140px;
    cursor: pointer;
  }

  .article_title span {
    font-weight: bold;
    font-size: 20px;
  }

  .brief_description {
    margin-left: 190px;
    max-height: 200px;
    max-width: 80%;
  }
</style>
