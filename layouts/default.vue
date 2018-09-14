<template>
  <v-app>
    <default-toolbar app></default-toolbar>
    <v-content app class="white">
        <v-layout row wrap fill-height align-content-space-between color="primary">
          <v-flex xs12>
            <nuxt />
          </v-flex>
          <v-flex xs12>
            <default-actions></default-actions>
          </v-flex>
        </v-layout>
    </v-content>
  </v-app>
</template>

<style>
html {
  overflow-y: auto;
}
</style>


<script>
import DefaultToolbar from '~/components/DefaultToolbar'
import DefaultActions from '~/components/DefaultActions'

export default {
  data () {
    return {
      title: 'Automic App Docs'
    }
  },
  name: 'App',
  components: {
    DefaultToolbar,
    DefaultActions
  }
}
</script>
