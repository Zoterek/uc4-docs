<template>
  <v-card>
    <V-card-text>
      <v-btn color="primary" @click="generate(inputObj, 'uc4.input.json')">Download</v-btn>
    </V-card-text>
  </v-card>
</template>


<script>
// When refreshing on download page - no previous button
export default {
  data() {
    return {

    }
  },
  // Suggestion: move next/previous button functionality to one place
  mounted() {
    this.$router.app.$on('previousStep', this.back)
  },
  destroyed() {
    this.$router.app.$off('previousStep')
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    },
    generate: function(obj, filename) {
      var jsonInput = JSON.stringify(obj, null, 2)
      var url = document.createElement('a')
      url.download = filename
      var blob = new Blob([jsonInput], {type: 'text/plain'})
      url.href = window.URL.createObjectURL(blob)
      url.click()
    }
  },
  computed: {
    inputObj: function() {
      return this.$store.getters['userData/input']
    }
  }
}
</script>
