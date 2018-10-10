<template>
  <div>
    <h1>Campeonatos de futbol</h1>
    <br>
    <Card
      v-for="competition in competitions"
      :competition="competition"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Card from "~/components/Card.vue";

export default {
  data() {
    return {
      search: '',
      competitions: []
    }
  },
  components: {
    Card
  },
  mounted() {
    axios.get(`http://api.football-data.org/v1/competitions`)
      .then(response => {
        this.competitions = response.data
      })
  },
}
</script>

<style scope>

* {
  text-align: center;
}

h1 {
  padding: 20px;
}

</style>
