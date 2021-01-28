<template>
	<div class="artist-page">
		<img v-if="artist" :src="artist.image[4]['#text']" alt="Artist photo" class="artist-photo">
		<div class="biography">
			<h3 class="artist-name">{{ artist.name }}</h3>
			<p class="biography-text">
				{{ artist.bio.content }}
			</p>
			<div class="tag-wrapper">
				<span v-for="(t, i) in artist.tags.tag" :key="i">{{ `#${t.name}` }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Artist',
	computed: {
		...mapState({
			artist: state => state.artist
		})
	},
	async mounted() {
		await this.$store.dispatch('getArtist', this.$route.params)
		console.log(this.artist)
	}
}
</script>

<style scoped>
#app .artist-page {
	width: 100%;
	display: flex;
}
#app .artist-name {
	text-align: left;
	margin-bottom: 20px;
	padding: 0px;
}
#app .artist-photo {
	max-width: 300px;
	max-height: 300px;
}
#app .biography {
	padding: 0px 20px;
	display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
}
#app .biography-text {
	text-align: justify;
	margin-bottom: 20px;
}
#app .tag-wrapper {
	align-items: left;
}
#app span {
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: #2885e2;
  text-align: left;
}
</style>