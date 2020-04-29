<!--
 * @Author: PanFeng
 * @Date: 2020-04-26 16:55:34
 -->
<template>
  <div class="main-container">
    <span class="title">{{ msg }}</span>
    <el-button @click="dark">dark</el-button>
    <div class="container">
      <div class="left">
        <div class="lefthead">
          <el-button class="input button">导入文件</el-button>
        </div>
        <div class="lefttable">
          <el-table></el-table>
        </div>
      </div>
      <div class="line"></div>
      <div class="right">
        <div class="righthead">
          <el-button class="output button">导出文件</el-button>
        </div>
        <div class="righttable">
          <el-table></el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import darken from "darken";

const darkmode = new darken(function(active) {
  if (active) console.log("Dark mode is active");
  else console.log("Dark mode is inactive");
});
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      percentage: 100,
      customColor: "#468234"
    };
  },
  methods: {
    dark() {
      darkmode.toggle();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  text-align: center;
}
.title {
  line-height: 100px;
  font-size: xx-large;
}
.dark{
  margin-left: 20px;
  display: inline;
}
.container {
  overflow: auto;
  position: relative;
}
.left {
  width: 49%;
  float: left;
  /* border-right: 1px solid black; */
}
.line {
  float: left;
  position: absolute;
  width: 4px;
  border-radius: 2px;
  top: 0;
  left: 49%;
  bottom: 0;
  background-color: blanchedalmond;
}
.right {
  float: left;
  width: 49%;
  /* border: 1px solid black; */
}
.el-table {
  position: unset;
}
</style>
