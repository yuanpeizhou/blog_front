<template>
  <div class="contain_body_list_item_content">
    <div class="contain_body_list_item_image">
      <router-link :to="{ name: 'about', params: { id: article.id } }" class="">
        <img :src="article.cover" class="contain_image" alt='图片加载失败'/>
      </router-link>
    </div>
    <div class="contain_body_list_item_text">
      <div class="contain_body_list_item_describe" :onclick="goToInfo(article.id)">
        <p>{{article.content}}</p>
      </div>
      <div class="contain_body_list_item_tag_list">
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon time"></div>
          <span class="tag_text">{{article.created_at}}</span>
        </div>
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon read"></div>
          <span class="tag_text">{{article.views}}</span>
        </div>
        <div class="contain_body_list_item_tag_list_item">
          <div class="tag_icon heart"></div>
          <span class="tag_text">{{article.praises}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleImageContent',
  components: {
  },
  props: {
    article:{
      default: {
      }
    }
  },
  methods:{
    goToInfo(id){
      console.log('点击',id)
    }
  }
}
</script>

<style scoped>
.contain_body_list_item_content{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.contain_body_list_item_image{
  width: 30%;
  height: 100%;
  overflow: hidden;
}
.contain_image{
  object-fit:cover;
  width: 100%;
  height: 100%;
  margin-right: 3%;
  cursor: pointer;/*手*/
  transition: all 0.6s;
}
.contain_image:hover{
  transform: scale(1.5);
}
.contain_body_list_item_describe{
  text-align: left;
}
.contain_body_list_item_text{
  flex-basis: 67%;
  height: 100%;
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