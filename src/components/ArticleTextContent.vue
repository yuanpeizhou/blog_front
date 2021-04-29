<template>
  <div class="contain_body_list_item_content">
    <div class="contain_body_list_item_text">
      <div class="contain_body_list_item_describe">
        <p>{{article.article_content}}</p>
      </div>
      <div class="contain_body_list_item_tag_list">
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon time"></div>
          <span class="tag_text">{{article.created_at}}</span>
        </div>
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon read"></div>
          <span class="tag_text">{{article.article_browse}}</span>
        </div>
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon heart"></div>
          <span class="tag_text">{{article.article_praise}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleTextContent',
  components: {
  },
  props: {
    article:{
      default: [
        
      ]
    }
  },
}
</script>

<style scoped>
.contain_body_list_item_describe{
  text-align: left;
}

.contain_body_list_item_content{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.contain_body_list_item_text{
  width: 100%;
  height: 100%;  
}

.contain_body_list_item_describe p{
  margin: 0 1rem 1rem 0;
}

.contain_body_list_item_tag_list{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
}
.contain_body_list_item_tag_list_item{
  align-items: center;
  display: flex;
  margin-right: 1.2rem;
}
.tag_icon{
  width: 1rem;
  height: 1rem;
  background-size: cover;
  display: inline-block;
  margin-right: 0.3rem;
}
.tag_text{
  line-height: 1rem;
  font-size: 0.95rem;
}
.time{
  background-image: url('../assets/icon/time.png');
}
.read{
  background-image: url('../assets/icon/read.png');
}
.heart{
  background-image: url('../assets/icon/heart.png');
}
</style>