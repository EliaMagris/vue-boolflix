<template>
  <div class="listSerie">
   <CardSerie v-for="(element, index) in secPropsSerie" :key="index" :CardPropsSerie="element"/>
  </div>
</template>

<script>

import CardSerie from './CardSerie.vue'

export default {
  name: 'SerieList',
  components:{
    CardSerie
  },
  props: {
    secPropsSerie: Array
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listSerie{
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
}
</style>