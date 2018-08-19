<template>
  <Header>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <!--Logo-->
    <div class="layout-logo">

    </div>
    <!--导航栏信息-->
    <div class="layout-nav">
      <MenuItem name='item.name' v-for="item in navList">
        <Icon :type="item.icoType"></Icon>
        <router-link style="color: white" :to="item.url">{{ item.name }}</router-link>
      </MenuItem>
    </div>
  </Menu>
    </Header>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      'navList': {
        type:Array
      }
    }
  }
</script>

<style scoped>
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

</style>
