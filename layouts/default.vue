<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8>
              <nuxt />
            </v-flex>
          </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      title: 'Automic App Docs'
    }
  },
  name: 'App',
  components: {
  }
}
</script>
