<template>
  <v-container fluid>
      <v-layout justify-end>
        <v-btn class="grey--text"
          v-if="step"
          flat
          @click="previousStep">Previous</v-btn>
        <v-spacer v-if="sm"
        ></v-spacer>
        <v-btn color="primary" @click="nextStep">Next</v-btn>
      </v-layout>
  </v-container>
</template>

<script>
import step from '~/assets/step'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    step: step,
    sm: function() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    nextStep: function() {
      this.$router.app.$emit('nextStep')
    },
    previousStep: function() {
      this.$router.app.$emit('previousStep')
    }
  }
}
</script>
