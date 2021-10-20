<template>
    <div style="width:100%;">
        <div class="article_info_contain">
            <div class="article_info_title">
                <h3>{{article.title}}</h3>
            </div>
            <p class="article_info_time">{{article.created_at}}</p>
            <div class="article_info_content">{{article.content}}</div>
        </div>
    </div>

</template>

<script>
import {getArticleInfo} from '../api';
export default {
  name : 'articleInfo',
  data(){
    return {
      article: {}
    }
  },
  mounted(){
    const _this = this
    const params = {}

    getArticleInfo(this.$route.params.id,params,function(res){
      _this.article = res
    })
  }
}

</script>
<style>
.article_info_contain{
    width: 80%;
    height: 300px;
    margin: 20px auto;
    padding: 30px;
    background: #ffffff;
}

.article_info_title{
    margin-bottom: 15px;
}
.article_info_time{
    /* text-align: right; */
}

.article_info_content{
    text-align: left;
}
</style>

