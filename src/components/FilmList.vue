<template>
  <div class="listFilm">
   <CardList v-for="(element, index) in secPropsFilm" :key="index" :CardPropsFilm="element"/>
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
.listFilm{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>
