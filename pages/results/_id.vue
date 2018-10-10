<template>
    <div>
        <h1>Results for {{ $route.params.id }}</h1>
          <Spinner v-show="loading && !competitionsExist"/>
          <div v-if="err && !competitionsExist">
            <p>{{ errMessage }}</p>
          </div>
        <div v-if="competitionsExist">
          <Card
            v-for="(competition, index) in competitions" :key="competition.id"
            :competition="competition"
            :color="picker(index)"
          />
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Card from "~/components/Card.vue"
import Spinner from '~/components/Spinner.vue'

export default {
  data() {
    return {
      loading: true,
      err: false,
      errMessage: ""
    };
  },
  asyncData({ params }) {
    
    return axios
      .get(`http://api.football-data.org/v1/${params.id}`)
      .then(response => {
        alert('then')
      })
      .catch(err => {
        let data = [
          { caption: "Competencia 1", year: 2017 },
          { caption: "Competencia 2", year: 2018 },
          { caption: "Competencia 3", year: 2017 },
          { caption: "Competencia 4", year: 2018 }
        ]
        return { competitions: data }
      })
  },
  components: {
    Card,
    Spinner
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? "md-primary" : "md-accent"
    }
  },
  middleware: "search",
  computed: {
    competitionsExist() {
      return this.competitions.length > 0
    }
  },
  mounted() {
    this.loading = false
  },
};
</script>
