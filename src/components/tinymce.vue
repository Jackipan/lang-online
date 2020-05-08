<!--
 * @Author: PanFeng
 * @Date: 2020-04-26 19:19:43
 -->
<template>
  <editor id="tinymce" v-model="myValue" :init="init"></editor>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme";
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
export default {
  components: {
    editor: Editor
  },
  props: {
    //传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: true
    },
    jsonData: {
      type: String,
      default: "",
      required: false
    },
    plugins: {
      type: [String, Array],
      default: "lists image media table wordcount"
    },
    toolbar: {
      type: [String, Array],
      default:
        "undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat"
    }
  },
  data() {
    return {
      //初始化配置
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        height: 300,
        skin_url: "/tinymce/skins/ui/oxide",
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        disabled: true,
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
          failure("image upload error!");
        }
      },
      myValue: this.value
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
    toObj(val) {
      console.log("children :", val, "typeof: ", typeof val);
      // let obj = tinymce.util.JSON.parse(val);
      console.log("obj--------：", val);
      // return obj
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
<style>
</style>