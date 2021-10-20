<template>
  <div class="banner">
    <div class="carousel">
      <el-carousel trigger="click" height="242px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img src="https://fs.img4399.com/news/2021/09/02/7f8da74e937f0fd1123afb84b14452c0~s550"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="article_box">
      <div class="article_box_title" v-for="item in article_data" :key="item.id"> 
        <h3>123</h3>
      </div>
    </div>
    <div class="user_info">
      <div class="user_info_title">个人信息</div>
      <div>
        <p>姓名：周源培</p>
        <p>职业：后端工程师(PHP)</p>
        <p>邮箱：1181588051@qq.com</p>
        <p>公司：成都青瓷科技</p>
      </div>
    </div> -->

  </div>
  
</template>

<script>
export default {
  name: 'BannerComponent',
  props: {
    title: String,
  },
  data(){
    return {
      article_data : [
        {
          id : 1,
          title : 'test',
          image_url : ''
        },
        {
          id : 2,
          title : 'test',
          image_url : ''
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    display: flex;
    height: 15rem;
    flex-wrap: wrap;
    justify-content: space-between;
}
.carousel{
  height: 100%;
  flex-basis: 50%;
}
.article_box{
  height: 100%;
  flex-basis: 24%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.article_box_title{
  flex-basis: 48%;
  background: #40c323;
}
.user_info{
  height: 100%;
  /* background: #9f37d6; */
  background: #ffffff;
  flex-basis: 24%;
  padding: 1rem;
  box-sizing: border-box;
  text-align: left;
}
.user_info_title{
  font-size: 1.2rem;
  text-align: center;
}
</style>
