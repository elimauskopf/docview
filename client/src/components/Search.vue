<template>
  <section>
    <b-field label="Find a document">
      <b-input class="search-bar" v-model="searchTerm" icon="magnify"></b-input>
      <b-button v-on:click="fetchDocuments" class="search-button" type="is-success">Search</b-button>
    </b-field>
    <DataVis v-bind:documents="items" />
  </section>
</template>

<script>
import axios from "axios";
import DataVis from "./DataVis";

export default {
  name: "Search",
  components: {
    DataVis
  },
  data: function () {
    return {
      searchTerm: "",
      items: [],
    };
  },
  methods: {
    fetchDocuments: function () {
      if (!this.searchTerm) {
        this.$toasted.show("Please enter a term", {
          duration: 3000,
          icon: "exclamation-circle",
          type: "error",
        });
      } else {
        axios.get(`api/search/${this.searchterm}`).then((response) => {
          this.items = response.data
        });
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding-right: 1em;
  padding-left: 10%;
  width: 75%;
}

.search-button {
  float: right;
}
</style>