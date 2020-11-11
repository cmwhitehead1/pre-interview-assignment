<template>
  <div id="app">
    <v-app>
      <Header />
      <Dashboard />
    </v-app>
  </div>
</template>

<script>

import Dashboard from './components/Dashboard.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    Header,
  },
};
</script>
