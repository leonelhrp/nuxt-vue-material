<template>
    <div>
        <h1>Results for {{ $route.params.id }}</h1>
        <div v-if="albumExist">
          <div v-for="(album, index) in albumData" :key="album.collectionId">
            <Card
              :id="album.collectionId"
              :title="album.collectionCensoredName"
              :artistName="album.artistName"
              :imageUrl="album.artworkUrl100"
              :url="album.artistViewUrl"
              :color="picker(index)"
              :year="getYear(album.releaseDate)"
            />
          </div>
        </div>
        <div v-else>
          <h1>Could Not Find Album</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from "~/components/Card.vue";

export default {
  asyncData ({ params }) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
      .then(response => {
        return { albumData: response.data.results }
      });
  },
  components: {
    Card
  },
  middleware: 'search',
  methods: {
    picker (index) {
      return index % 2 == 0 ? 'red' : 'blue';
    },
    getYear (date) {
      return new Date(date).getFullYear();
    }
  },
  computed: {
    albumExist() {
      return this.albumData.length > 0;
    },
  }
}
</script>
