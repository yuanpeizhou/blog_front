<template>  
  <div class="article">
    <HeaderComponent index="2"></HeaderComponent>
    <div class="contain">
      <ContainComponent :articles="articles"/>
    </div>
  </div>
</template>
<script>
import ContainComponent from '@/components/ContainComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import {getChapterList} from '../api';
export default {
  name : 'articleList',
  components: {
    ContainComponent,
    HeaderComponent
  },
  data(){
    return {
      articles: {

      }
    }
  },
  mounted(){
    const _this = this
    const params = [

    ]

    getChapterList(params,function(res){
      console.log('123',res)
      _this.articles = res
    })
  }
}
</script>
<style  scoped>
  .contain {
    padding: 1.5rem 12rem;
    /* background: #d42c2c; */
  }
</style>
