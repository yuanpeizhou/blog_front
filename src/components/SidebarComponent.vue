<template>
  <div class="sidebar">
    <div class='recommend_list'>
      <h3 class="recommend_list_title">点击排行</h3>
      <div class="recommend_list_item">
        <i class="recommend_list_item_icon top">1</i>
        xxxx标题
      </div>

      <div class="recommend_list_item">
        <i class="recommend_list_item_icon top">1</i>
        xxxx标题
      </div>

      <div class="recommend_list_item">
        <i class="recommend_list_item_icon top">1</i>
        xxxx标题
      </div>
    </div>
    <div class='friendship_link_list'>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  flex-basis: 24%;
}
.recommend_list{
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  background: #ffffff;
}
.recommend_list_title{
  margin: 0;
  padding: 1rem;
}

.recommend_list_title::after{
  content:"";
  display: inline-block;
  width: 100%;
  height:2px;
  background:#d3d3d3;
}

.recommend_list_item{
  text-align: left;
  margin: 0.5rem 1rem;
  padding: 0.5rem;
}

.recommend_list_item:nth-child(odd) {
  background: #f6f6f6;
}

.recommend_list_item_icon{
  font-style: normal;
  display: inline-block;
  margin-right:0.5rem;
  width: 1rem;
  height: 1rem;
  text-align: center;
  align-items: center;
  color: #ffffff;
}

.top{
  background: #FF6600;
}

.normal{
  background: #B1B1B1;
}

</style>
