<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <h1>{{ title }}</h1>
      <h3>{{ createdBy }}</h3>
      <input type="text" v-model="title">
      <br><br>
      <md-button class="md-raised" v-on:click="goToCompetitions">Ver Campeonatos</md-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Campeonatos de futbol',
      name: "Leonel",
      lastname: "Rojas",
      search: '',
    }
  },
  methods: {
    goToCompetitions(ev){
      this.$router.push(`results/competitions`);
    }
  },
  computed: {
    createdBy () {
      return `Creado por: ${this.name} ${this.lastname}`;
    },    
  }
}
</script>

<style scope>

* {
  text-align: center;
}

h1 {
  padding: 20px;
}

.md-layout-item {
  height: 40px;
}

.md-layout-item:after {
  width: 100%;
  height: 100%;
  display: block;
  background: md-get-palette-color(red, 200);
  content: " ";
}

</style>
