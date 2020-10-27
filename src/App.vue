<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/pages/home'

export default {
  name: 'App',

  components: {
    'home': Home,
  },

  data: () => ({
    //
  }),
};
</script>
