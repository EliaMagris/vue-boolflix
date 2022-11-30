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
                : `fi fi-${CardPropsSerie.original_language}`&& CardPropsSerie.original_language == 'hi'
                ? 'fi fi-in'
                : `fi fi-${CardPropsSerie.original_language}`&& CardPropsSerie.original_language == 'ko'
                ? 'fi fi-kr'
                : `fi fi-${CardPropsSerie.original_language}`
            "
          /><span />
        </p>
        <p><span>Vote: </span>{{ CardPropsSerie.vote_average }}</p>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerCard {
  width: calc(100% / 5);
  height: 100%;
}
</style>
