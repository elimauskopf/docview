<template>
  <div id="app">
	<Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: "App",
    components: {
    Header
    },
  beforeCreate: function () {
	if (this.$session.get("isLoggedIn") == true && this.$store.state.isLoggedIn == false) {
		this.$store.commit('toggleLogIn')
	}
    if (this.$session.get("isLoggedIn") == true && this.$router.currentRoute.path !== "/search") {
      this.$router.push("/search");
    } 
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
