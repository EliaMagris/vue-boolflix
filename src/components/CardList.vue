<template>
  <div class="containerCard">
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${CardPropsFilm.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ CardPropsFilm.title }}</h5>
        <h5>{{ CardPropsFilm.original_name }}</h5>
        <p class="card-text text-uppercase">
          <span
            :class="
              CardPropsFilm.original_language == 'en'
                ? 'fi fi-us'
                : `fi fi-${CardPropsFilm.original_language}` && (CardPropsFilm.original_language == 'ja')
                ? 'fi fi-jp'
                : `fi fi-${CardPropsFilm.original_language}`&& CardPropsFilm.original_language == 'hi'
                ? 'fi fi-in'
                : `fi fi-${CardPropsFilm.original_language}`&& CardPropsFilm.original_language == 'ko'
                ? 'fi fi-kr'
                : `fi fi-${CardPropsFilm.original_language}`
            "
          /><span />
        </p>
        <p><span>Vote: </span>{{ CardPropsFilm.vote_average }}</p>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerCard {
  width: calc(100% / 5);
  height: 100%;
}
</style>
