<template>
  <v-container>
    <v-layout column>
      <div>Example</div>
      <code-example :code="config"></code-example>
    </v-layout>
  </v-container>
</template>

<script>
import CodeExample from '@/components/CodeExample'

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
  components: {
    CodeExample
  },
  computed: {
    configJSON: function() {
      return JSON.stringify(this.config, null, 2)
    }
  }
}
</script>
