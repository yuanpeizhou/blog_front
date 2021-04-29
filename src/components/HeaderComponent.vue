<template>
  <div class="header">
    <div class="header_title">
      <!-- <h3>周源培的个人博客</h3> -->
    </div>
    <div class="header_menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#444" active-text-color="#3690cf">
        <el-menu-item index="1" @click="menuClick(1)">
          首页
        </el-menu-item>
        <el-menu-item index="2" @click="menuClick(2)">
          文章
        </el-menu-item>
        <el-menu-item index="3">关于我</el-menu-item>
      </el-menu>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
    index: String
  },
  data(){
    return {
      activeIndex: this.index
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    menuClick(index){
      if(index == 1){
        this.$router.push({ name: 'home'})
      }else if(index == 2){
        this.$router.push({ name: 'articleList'})
      }
    }
  },
  mounted(){
    // console.log('当前index',this.index)
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
