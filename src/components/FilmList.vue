<template>
  <div class="listFilm">
   <CardList v-for="(element, index) in secPropsFilm" :key="index" :CardProps="element"/>
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
}
</style>
