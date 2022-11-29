<template>
  <div class="containerCard">
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${CardProps.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{CardProps.title}}</h5>
        <p class="card-text">
          
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    CardProps: Object
  }
  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerCard{
  width: calc(100% / 5);
  height: 100%;
}
</style>
