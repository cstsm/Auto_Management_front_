<template>
  <div id="app">
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage'

export default {
  name: 'App',
  components: {
    MainPage
  },
  data(){
    return {
      //登录状态
      isLogin: false,
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>