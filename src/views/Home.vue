<!--
 * @Author: PanFeng
 * @Date: 2020-04-29 09:58:33
 -->
<template>
  <div class="home">
    <HelloWorld msg="Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
