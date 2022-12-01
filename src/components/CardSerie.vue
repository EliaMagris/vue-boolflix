<template>
  <div class="containerCard">
    <div class="container-fluid contenedor">
      <div class="container text-left">
        <div class="container_foto">
          <div class="ver_mas text-center">
            <span class="lnr lnr-eye">
              <div class="dropdown">
                <button
                  class="btn btn-black dropdown-toggle border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon icon="fa-solid fa-eye" />
                </button>
                <ul class="dropdown-menu bg-black">
                  <li>
                    <a class="dropdown-item text-light index" href="#">{{
                      CardPropsSerie.overview
                    }}</a>
                  </li>
                </ul>
              </div>
            </span>
          </div>

          <article class="text-left">
            <h5>{{ CardPropsSerie.name }}</h5>
            <div
              :class="
                CardPropsSerie.original_language == 'en'
                  ? 'fi fi-us'
                  : `fi fi-${CardPropsSerie.original_language}` &&
                    CardPropsSerie.original_language == 'ja'
                  ? 'fi fi-jp'
                  : `fi fi-${CardPropsSerie.original_language}` &&
                    CardPropsSerie.original_language == 'hi'
                  ? 'fi fi-in'
                  : `fi fi-${CardPropsSerie.original_language}` &&
                    CardPropsSerie.original_language == 'ko'
                  ? 'fi fi-kr'
                  : `fi fi-${CardPropsSerie.original_language}`
              "
            />
            <div />
            <p class="card-text text-white">
              Voto:
              <font-awesome-icon
                icon="fa-solid fa-star"
                class="text-warning"
                v-for="index in this.vote"
                :key="index"
              />
              <font-awesome-icon
                icon="fa-regular fa-star"
                v-for="index in 5 - this.vote"
                :key="index"
              />
            </p>
            <!-- <div><p>{{CardPropsSerie.overview}}</p></div>  -->
          </article>
          <img
            :src="`http://image.tmdb.org/t/p/w342/${CardPropsSerie.backdrop_path}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSerie",
  props: {
    CardPropsSerie: Object,
  },
  data() {
    return {
      vote: Math.ceil(this.CardPropsSerie.vote_average / 2),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropdown-menu {
  overflow: auto;
  word-break: keep-all;
  word-wrap: break-word;
  width: 100%;

  .dropdown-item:hover {
    background-color: black !important;
  }
}
.containerCard {
  width: calc(100% / 4);
}

.container_foto {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0;
  overflow: hidden;
  margin: 5px;
  position: relative;
  height: 200px;
}

.container_foto article {
  padding: 5%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.container_foto h5 {
  color: #fff;
  font-weight: bold;
  font-size: 15px;
}

.container_foto h4 {
  font-weight: 300;
  color: #fff;
  font-size: 16px;
}

.container_foto img {
  width: 100%;
  top: 0;
  left: 0;
  -webkit-transition: all 4s ease;
  -moz-transition: all 4s ease;
  -o-transition: all 4s ease;
  -ms-transition: all 4s ease;
  transition: all 4s ease;
}

.ver_mas {
  background-color: rgb(165, 243, 21);
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  transform: translate(0px, 70px);
  -webkit-transform: translate(0px, 70px);
  -moz-transform: translate(0px, 70px);
  -o-transform: translate(0px, 70px);
  -ms-transform: translate(0px, 70px);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.ver_mas span {
  font-size: 20px;
  color: rgb(0, 0, 0);
  position: relative;
  margin: 0 auto;
  width: 100%;
  top: -6px;
}

/*hovers*/

.container_foto:hover {
  cursor: pointer;
}

.container_foto:hover img {
  opacity: 0.1;
  transform: scale(1.5);
}

.container_foto:hover article {
  transform: translate(2px, -69px);
  -webkit-transform: translate(2px, -69px);
  -moz-transform: translate(2px, -69px);
  -o-transform: translate(2px, -69px);
  -ms-transform: translate(2px, -69px);
}

.container_foto:hover .ver_mas {
  transform: translate(0px, 0px);
  -webkit-transform: translate(0px, 0px);
  -moz-transform: translate(0px, 0px);
  -o-transform: translate(0px, 0px);
  -ms-transform: translate(0px, 0px);
  opacity: 1;
}
</style>
