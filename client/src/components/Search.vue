<template>
  <section>
    <div class="container">
      <b-field label="Find a document">
        <b-input class="search-bar" v-model="searchTerm" icon="magnify"></b-input>
        <b-button v-on:click="fetchDocuments" class="search-button" type="is-success">Search</b-button>
      </b-field>
      <b-progress v-if="loading" class="progress-bar" type="is-success" size="is-large"></b-progress>
      <Table v-if="loaded" :documents="metaData" />
      <BarChart v-if="loaded" class="bar" :chartData="chartData" :options="options" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Table from "./Table";
import BarChart from "./BarChart";

export default {
  name: "Search",
  components: {
    Table,
    BarChart,
  },
  data: function () {
    return {
      searchTerm: "",
      metaData: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Documents by Publication Year",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      loaded: false,
      loading: false,
    };
  },
  methods: {
    fetchDocuments: async function () {
     
      if (!this.searchTerm) {
        this.$toasted.show("Please enter a term", {
          duration: 3000,
          icon: "exclamation-circle",
          type: "error",
        });
      } else {
		this.loading = true;
        const response = await axios.get(`api/search/${this.searchTerm}`);
        this.metaData = response.data.metaData;
        this.chartData.labels = response.data.chartData.labels;
		this.chartData.datasets[0].data = response.data.chartData.data;
		this.loading = false
        this.loaded = true;
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding-right: 1em;
  padding-left: 20%;
  width: 75%;
}

.bar {
  padding-bottom: 1em;
}

.progress-bar {
  padding-top: 3em;
}
.search-button {
  float: right;
}
</style>