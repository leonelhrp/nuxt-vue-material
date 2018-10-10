<template>
  <div>
    <md-card :class="color" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ competition.caption }}</div>
          <div class="md-subhead">{{ competition.year }}</div>
        </md-card-header>
        <md-card-actions>
          <md-button>Equipos</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["competition", "color"]
};
</script>

<style scoped>
</style>
