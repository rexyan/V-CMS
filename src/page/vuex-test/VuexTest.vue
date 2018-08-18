<template>
  <div>
    <h5>msg: {{ msg }} </h5>
    <h5>msg: {{ gettersMsg }} </h5>
    <button @click="changeMsgNoParams"> 获取新的msg </button>
    <hr>
    <h5>name: {{ show_name }} </h5>
    <input v-model="imput_name"/>
    <button @click="changeShowName(imput_name)"> action方式修改名称 </button>
    <button @click="changeShowName2(imput_name)"> mutations方式修改名称 </button>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapState, mapMutations} from 'Vuex';
  export default {
    data() {
      return {
        imput_name:''
      }
    },
    name: "VuexTest",
    computed:{...mapState(['msg', 'show_name']), ...mapGetters(['gettersMsg'])},   // 前者直接获取state中的值， 后者通过get获取值
    methods:{...mapActions(['changeMsgNoParams', 'changeShowName']), ...mapMutations(['changeShowName2'])}
  }
</script>

<style scoped>

</style>
