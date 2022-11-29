<template>
  <div >
   <input type="text" v-model="select" @keyup.enter="$emit('search', select)">
   <button>search</button>
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

</style>
