<template>
  <div class="home main-container">
    <div :to="`/artist/${track.artist.name}`" v-for="(track, i) in tracks" :key="i">
      <div class="trackContainer">
        <img :src="track.image[1]['#text']" alt="Track image" class="track-img">
        <div class="about">
          <p class="track-name">Track: {{ track.name }}</p>
          <router-link :to="`/artist/${track.artist.name}`" class="artist-name">Artist: {{ track.artist.name }}</router-link>
          <a :href="track.artist.url" target="blanc">See this artist on Last.fm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: mapState({
    tracks: state => state.tracks
  }),
}
</script>

<style scoped>
#app .about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

</style>