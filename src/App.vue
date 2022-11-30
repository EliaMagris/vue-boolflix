<template>
  <div id="app">
    <HeaderTop @search="GetFilm" />
    <MainTop :propsFilm="infoFilm" :propsSerie="infoSerie" />
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import MainTop from './components/MainTop.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderTop,
    MainTop,
  },

  data() {
    return {
      apik: 'addbad31125e726712d0ec50b36ead4e',
      infoFilm: [],
      infoSerie: [],
    };
  },

  mounted() {
    this.GetFilm();
  },
  methods: {
    GetFilm(value) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apik}&query=${value}`)

        .then((response) => {
          this.infoFilm = response.data.results;
        });

      axios
        .get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apik}&query=${value}`)

        .then((response) => {
          this.infoSerie = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e50914;
  height: 100%;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  // overflow-y: hidden;
  // white-space: nowrap;
}
</style>
