<template>
  <div class="mainContainer">
    <h1 class="text-white px-5">Series tv</h1>
    <div class="listSerie">
      <CardSerie v-for="(element, index) in secPropsSerie" :key="index" :CardPropsSerie="element" />
    </div>
  </div>
</template>

<script>
import CardSerie from './CardSerie.vue';

export default {
  name: 'SerieList',
  components: {
    CardSerie,
  },
  props: {
    secPropsSerie: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainContainer {
  margin-top: 200px;

  .listSerie {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
