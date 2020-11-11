<template>
  <div class="header">
    <v-app-bar app>
      <!-- HEADER CONTENT -->
      <span>User Interface Engineer Pre-Interview Assignment</span>
      <!-- <ThemeToggle /> -->
    </v-app-bar>
  </div>
</template>

<script>
// import ThemeToggle from '@/components/ThemeToggle.vue';

export default {
  name: 'Header',
  components: {
    // ThemeToggle,
  },
  data() {
    return {
      links: {},
      useDark: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
}
.v-toolbar__content {
  align-items: center;
  justify-content: center;
}
.nav-links {
  flex-direction: row-reverse;
  padding-right: 20px;
}
</style>
