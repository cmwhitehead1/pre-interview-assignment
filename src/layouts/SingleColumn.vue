<template>
  <v-container fluid class="single-column">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <slot>(Single Column Layout)</slot>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SingleColumnLayout',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-column {
  margin-top: 65px;
}

.v-card {
  background-color: #9bc6e2 !important;
}
</style>
