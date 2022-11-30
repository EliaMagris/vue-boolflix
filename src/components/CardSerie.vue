<template>
  <div class="containerCard">
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${CardPropsSerie.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ CardPropsSerie.name }}</h5>
        <p class="card-text text-uppercase">
          <span
            :class="
              CardPropsSerie.original_language == 'en'
                ? 'fi fi-us'
                : `fi fi-${CardPropsSerie.original_language}` && CardPropsSerie.original_language == 'ja'
                ? 'fi fi-jp'
                : `fi fi-${CardPropsSerie.original_language}` && CardPropsSerie.original_language == 'hi'
                ? 'fi fi-in'
                : `fi fi-${CardPropsSerie.original_language}` && CardPropsSerie.original_language == 'ko'
                ? 'fi fi-kr'
                : `fi fi-${CardPropsSerie.original_language}`
            "
          /><span />
        </p>
        <p class="card-text">Voto:
              <font-awesome-icon icon="fa-solid fa-star" class="text-warning" v-for="(index) in this.vote" :key='index' />
              <font-awesome-icon icon="fa-regular fa-star" v-for="(index) in 5 - this.vote" :key='index' />
            </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSerie',
  props: {
    CardPropsSerie: Object,
  },
  data(){
    return{
        vote: Math.ceil((this.CardPropsSerie.vote_average / 2))
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerCard {
  width: calc(100% / 5);
  height: 100%;
}
</style>
