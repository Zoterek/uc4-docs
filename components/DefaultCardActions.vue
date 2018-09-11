<template>
  <v-card-actions>
      <v-btn class="grey--text" 
        v-if="step"
        flat
        @click="previousStep">Previous</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="nextStep">Next</v-btn>
  </v-card-actions>
</template>

<script>
import step from '~/assets/step'

export default {
  data() {
    return {

    }
  },
  computed: {
    step: step
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
