<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/search">Search</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('getTracks')
	},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#app p {
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: #2c3e50;
}
#app h3 {
  margin: 0px;
  padding: 0px;
}
a {
  color: #42b983;
  font-weight: 700;
  text-decoration: none;
}
#app a.router-link-exact-active {
  color: #2c3e50;
  text-decoration: underline;
}
#app .artist-name {
  color: #2c3e50;
}
#app .main-container {
  display: flex;
  flex-direction: column;
  margin: 2% 10%;
}
#app .trackContainer {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
	border: solid 1px #42b983;
	padding: 5px;
}
#app .track-img {
  margin-right: 30px;
}
</style>
