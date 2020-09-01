<template>
  <section>
    <div class="container">
      <b-table
        :data="documents"
        ref="table"
        paginated
        per-page="5"
        detailed
        detail-key="key"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        :striped="true"
        icon-pack="fa"
      >
        <b-table-column
          field="key"
          label="KEY"
          width="40"
          numeric
          v-slot="props"
        >{{ props.row.key }}</b-table-column>
        <b-table-column
          field="title"
          :centered="true"
          label="TITLE"
          width="100"
          v-slot="props"
        >{{ props.row.title}}</b-table-column>
        <b-table-column
          field="pub_date"
          label="PUB_DATE"
          :centered="true"
          width="60"
          v-slot="props"
        >{{ props.row.pub_date}}</b-table-column>
        <b-table-column
          field="source"
          :centered="true"
          label="SOURCE"
          width="40"
          v-slot="props"
        >{{ props.row.source}}</b-table-column>
        <b-table-column
          field="volume"
          :centered="true"
          label="VOLUME"
          width="40"
          v-slot="props"
        >{{ props.row.volume}}</b-table-column>
        <b-table-column
          field="first_page"
          :centered="true"
          label="FIRST PAGE"
          width="40"
          v-slot="props"
        >{{ props.row.first_page}}</b-table-column>
        <b-table-column
          field="last_page"
          :centered="true"
          label="LAST PAGE"
          width="40"
          v-slot="props"
        >{{ props.row.last_page}}</b-table-column>
        <b-table-column
          field="issue"
          :centered="true"
          label="ISSUE"
          width="40"
          v-slot="props"
        >{{ props.row.issue}}</b-table-column>
        <b-table-column
          field="doi"
          :centered="true"
          label="DOI"
          width="40"
          v-slot="props"
        >{{ props.row.doi}}</b-table-column>

        <template slot="detail" slot-scope="props">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Abstract:</strong>
                  <br />
                  {{ props.row.abstract}}
                </p>
              </div>
            </div>
          </article>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Table",
  props: {
    documents: Array,
  },
};
</script>