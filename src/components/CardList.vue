<template>
  <div class="containerCard">
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${CardPropsFilm.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ CardPropsFilm.title }}</h5>
        <p class="card-text text-uppercase">
          <span
            :class="
              CardPropsFilm.original_language == 'en'
                ? 'fi fi-us'
                : `fi fi-${CardPropsFilm.original_language}` && CardPropsFilm.original_language == 'ja'
                ? 'fi fi-jp'
                : `fi fi-${CardPropsFilm.original_language}` && CardPropsFilm.original_language == 'hi'
                ? 'fi fi-in'
                : `fi fi-${CardPropsFilm.original_language}` && CardPropsFilm.original_language == 'ko'
                ? 'fi fi-kr'
                : `fi fi-${CardPropsFilm.original_language}`
            "
          /><span />
        </p>
        <p class="card-text">
          Voto:
          <font-awesome-icon icon="fa-solid fa-star" class="text-warning" v-for="index in this.vote" :key="index" />
          <font-awesome-icon icon="fa-regular fa-star" v-for="index in 5 - this.vote" :key="index" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    CardPropsFilm: Object,
  },
  data() {
    return {
      vote: Math.ceil(this.CardPropsFilm.vote_average / 2),
    };
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
