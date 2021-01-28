<template>
  <div class="search main-container">
    <input type="text" class="search-input" placeholder="Enter track" v-model="inputText">
		<div class="wrapper" v-if="tracks">
			<div v-for="(track, i) in filteredList" :key="i" class="trackContainer">
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
  data() {
		return {
			inputText: '',
			filteredList: ''
		}
	},
  computed: {
		...mapState({
			tracks: state => state.tracks,
		}),
	},
	mounted() {
		this.filteredList = this.tracks
	},
	beforeUpdate() {
		this.filteredList = this.tracks.filter(item => {
			return item.name.toLowerCase().includes(this.inputText)
		})
	},
}
</script>

<style scoped>
#app .search-input {
  width: 100%;
  height: 50px;
  font-size: 25px;
  color: #000000;
	margin-bottom: 30px;
}
#app .wrapper {
	display: flex;
	flex-direction: column;
}
#app .about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
</style>