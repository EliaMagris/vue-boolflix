<template>
  <div class="mainContainer">
    <h1 class="text-white px-5">Film</h1>
    <div class="listFilm">
      <CardList v-for="(element, index) in secPropsFilm" :key="index" :CardPropsFilm="element"/>
    </div>
   
  </div>
</template>

<script>

import CardList from './CardList.vue'

export default {
  name: 'FilmList',
  components:{
    CardList
  },
  props: {
    secPropsFilm: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainContainer {
  margin-top: 50px;

  .listFilm {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
