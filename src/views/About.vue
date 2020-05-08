<template>
  <div>
    {{ msg }}
    <tinymce-editor v-model="msg" :disabled=true @onClick="onClick" ref="editor"></tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled=true">禁用</button>
    <button @click="toObj">导入数据</button>
    <button @click="toObj">导出数据</button>
  </div>
</template> 
<script>
import TinymceEditor from "@/components/TinyMce.vue";
import enData from '@/assets/langs/en.json';
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      disabled: true,
      jsonData: ''
    };
  },
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    //清空内容
    clear() {
      this.$refs.editor.clear();
    },
    toObj(){
      this.jsonData = enData
      this.msg = JSON.stringify(enData)
      console.log('this.msg: ',this.msg);
      
      // this.jsonData = '{"exists":false}'
      // console.log('zhData: ',zhData);
      // console.log('this.jsonData: ',this.jsonData);
      
      // console.log('typeof jsonData: ',typeof this.jsonData);
      
      this.$refs.editor.toObj(this.jsonData)
    },
  },
  mounted() {
    // console.log('init zhdata: ', zhData);
  },
};
</script>
<style scoped>
</style>