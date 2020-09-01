<template>
  <section>
    <!-- <li v-for="document in documents" :key="document.id">{{ document.name}}</li> -->
  </section>
</template>

<script>
export default {
  name: 'DataVis',
  props: {
    documents: Array,
  },
};
</script>