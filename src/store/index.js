import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks: [],
    artist: ''
  },
  mutations: {
    GET_TRACKS(state, payload) {
      state.tracks = payload
    },
    GET_ARTIST(state, payload) {
      state.artist = payload
    }
  },
  actions: {
    async getTracks(context) {
      await axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6aae96ef20bd1151bdc54b5b816bd0a7&format=json')
      .then(res => {
        context.commit('GET_TRACKS', res.data.tracks.track)
      })
      .catch(e => {
        context.commit('GET_TRACKS', e)
      }) 
    },
    async getArtist(context, payload) {
      await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${payload.id}&api_key=6aae96ef20bd1151bdc54b5b816bd0a7&format=json`)
      .then(res => {
        context.commit('GET_ARTIST', res.data.artist)
      })
      .catch(e => {
        context.commit('GET_ARTIST', e)
      }) 
    }
  },
  modules: {
  }
})
