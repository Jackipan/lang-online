<!--
 * @Author: PanFeng
 * @Date: 2020-04-26 16:55:34
 -->
<template>
  <div id="app">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Language Online'
    }
  },
}
</script>
<style>
  #app{
    position: relative;
    width: 100%;
  }
</style>
