<template>
  <div class="contain_body">
    <div class="contain_body_list">
      <div class="contain_body_list_item" v-for="item in articles" :key="item.id">
        <h3 class="contain_body_list_item_title">
          <router-link :to="{ name: 'about', params: { id: item.id } }" class="">{{item.title}}</router-link>
        </h3>
        <ArticleImageContent v-if="item.image_url" :article="item"></ArticleImageContent>
        <ArticleTextContent v-if="!item.image_url" :article="item"></ArticleTextContent>
      </div>
    </div>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
import ArticleImageContent from '@/components/ArticleImageContent'
import ArticleTextContent from '@/components/ArticleTextContent'
export default {
  name: 'BannerComponent',
  components: {
    SidebarComponent,
    ArticleImageContent,
    ArticleTextContent
  },
  props: {
    articles:{
      default: []
    }
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain_body {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.contain_body_list{
  flex-basis: 75%;
}
.contain_body_list_item{
  padding: 1rem;
  background: #ffffff;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
}
.contain_body_list_item:before {
  position:relative;
  content: "";
  width: 50px;
  height: 26px;
  background: #3690cf;
  left: 0;
  top: 20px;
}
.contain_body_list_item_title{
  text-align: left;
  font-size: 1.2rem;
  margin: 0 0 0.8rem 0;
}

/* .contain_body_list_item_tag{
  display: flex;
} */

</style>
