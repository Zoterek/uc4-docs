<template>
  <v-container>
    <v-layout column>
      <div>Example</div>
      <code-example :code="filter"></code-example>
    </v-layout>
  </v-container>
</template>

<script>
import CodeExample from '@/components/CodeExample'

export default {
  data() {
    return {
      filter: {
      "name": "*REGEX_REPLACE*",
      "textSearch": {
        "process": true,
        "text": "PREP_PROCESS"
      },
      "replace": {
        "pattern": "^(:.*)U(\\d{8})(?!\\d{1})(.*)",
        "replacement": "$1U0$2$3"
      }
    }
    }
  },
  components: {
    CodeExample
  },
  //TODO move to component and use that component within filter.vue and config.vue
  computed: {
    configuration: function() {
      return JSON.stringify(this.filter, null, 2)
    }
  }
}
</script>
