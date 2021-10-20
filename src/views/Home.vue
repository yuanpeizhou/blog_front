<template>
  <div class="home">
    <!-- <HeaderComponent index="1"></HeaderComponent> -->
    <div class="contain"> 
      <!-- <BannerComponent title="test"/> -->
      <ContainComponent/>
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
