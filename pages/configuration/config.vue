<template>
  <v-container>
    <v-layout column>
      <div>Example</div>
      <code>
        <pre>{{ configJSON }}</pre>
      </code>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      config: {
        "host": "localhost",
        "port": "2217",
        "client": "10",
        "user": "user",
        "password": "password",
        "options": {
          "verbose": true
        }
      }
    }
  },
  computed: {
    configJSON: function() {
      return JSON.stringify(this.config, null, 2)
    }
  }
}
</script>
