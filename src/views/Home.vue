<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderComponent title="test"/>
    <div class="contain"> 
      <BannerComponent title="test"/>
      <ContainComponent :articles="articles"/>
      
    </div>
    <!-- <FooterComponent/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import ContainComponent from '@/components/ContainComponent.vue'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    BannerComponent,
    ContainComponent

  },
  data(){
    return {
      articles: [
        {
          id: 1,
          title: '测试标题1',
          content: '复活卡后方可好看发款到发货卡的很疯狂发快递好看',
          image_url: 'http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg',
          time: '2019-12-21',
          read: 23,
          heart: 15
        },
        {
          id: 2,
          title: '测试标题2',
          content: '复活卡后方可好看发款到发货卡的很疯狂发快递好看',
          image_url: '',
          time: '2019-12-22',
          read: 27,
          heart: 15
        },
        {
          id: 3,
          title: '测试标题3',
          content: '复活卡后方可好看发款到发货卡的很疯狂发快递好看',
          image_url: 'http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg',
          time: '2019-12-22',
          read: 27,
          heart: 15
        }
      ]
    }
  },
  mounted(){
    // this.axios.get('/api/getAccessToken').then((response) => {
    //   console.log(response.data)
    // })
  }
}
</script>
<style scoped>
.contain {
  padding: 1.5rem 12rem;
  /* background: #d42c2c; */
}
</style>
