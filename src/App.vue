<template>
  <div id="app">
    <v-app>
      <Header />
      <SingleColumnLayout>
        <Dashboard />
      </SingleColumnLayout>
    </v-app>
  </div>
</template>

<script>

import Dashboard from './components/Dashboard.vue';
import Header from './components/Header.vue';
import SingleColumnLayout from './layouts/SingleColumn.vue';

export default {
  name: 'App',
  components: {
    Header,
    SingleColumnLayout,
    Dashboard,
  },
};
</script>
