<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8>
              <v-card class="elevation-8">
                <default-toolbar></default-toolbar>
                <nuxt />
                <default-card-actions></default-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import DefaultToolbar from '~/components/DefaultToolbar'
import DefaultCardActions from '~/components/DefaultCardActions'

export default {
  data () {
    return {
      title: 'Automic App Docs'
    }
  },
  name: 'App',
  components: {
    DefaultToolbar,
    DefaultCardActions
  }
}
</script>
