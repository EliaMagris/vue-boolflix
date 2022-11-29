<template>
  <div >
   <FilmList :secPropsFilm="propsFilm"/>
   <SerieList :secPropsSerie="propsSerie"/>
  </div>
</template>

<script>

import FilmList from './FilmList.vue'
import SerieList from './SerieList.vue'

export default {
  name: 'MainTop',
  components: {
    FilmList,
    SerieList
  },
  props: {
    propsFilm: Array,
    propsSerie: Array
  },

}
//console.log(this.filmsList)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
