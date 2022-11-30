<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-black w-100">
      <div class="container-fluid d-flex align-items-center">
        <img class="img" src="../assets/Netflix_2015_logo.svg.png">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li class="nav-item">
              <a class="nav-link active text-danger" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item d-flex">
              <a class="nav-link text-white" href="#">Serie TV</a>
              <a class="nav-link text-white" href="#">Film</a>
              <a class="nav-link text-white" href="#">Originali</a>
              <a class="nav-link text-white" href="#">Aggiunti di recente</a>
              <a class="nav-link text-white" href="#">La mia lista</a>
            </li>
          </ul>
          <div class="input-group mb-3 mt-3 w-25">
            <input type="text" class="form-control" v-model="select" @keyup.enter="$emit('search', select)"
              placeholder="Search" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <button class="btn text-white btn-outline-secondary" @click="$emit('search', select)" type="button"
              id="button-addon1">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- <div>
      <input type="text" v-model="select" @keyup.enter="$emit('search', select)">
   <button>search</button>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    
  },
   data() {
    return {
      select: ''
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  width: 10%;
}
</style>
