<template>
  <b-navbar type="is-primary" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item>
        <img src="../assets/document.png" alt="docview" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item class="is-size-3">Docview</b-navbar-item>
    </template>
    <template v-if="isLoggedIn" slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a v-on:click="logout" class="button is-warning">
            <strong>Sign Out</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.loggedIn = false;
      this.$session.destroy();
      this.$store.commit("toggleLogIn");
      this.$router.push("/");
    },
  },
};
</script>