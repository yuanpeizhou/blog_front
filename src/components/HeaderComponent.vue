<template>
  <div class="header">
    <div class="header_title">
      <!-- <h3>周源培的个人博客</h3> -->
    </div>
    <div class="header_menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#444" active-text-color="#3690cf">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">学习笔记</el-menu-item>
        <el-menu-item index="3">随笔</el-menu-item>
        <el-menu-item index="4">关于我</el-menu-item>
      </el-menu>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String
  },
  data(){
    return {
      activeIndex: '1'
    }
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 5rem;
}
.header_menu{
  margin-left: 10rem;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
