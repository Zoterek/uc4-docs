<template>
  <v-container>
    <v-layout column>
      <div>Example</div>
      <code-example :code="UC4Config"></code-example>
    </v-layout>
  </v-container>
</template>

<script>
import CodeExample from '@/components/CodeExample'
import UC4ConfigExample from '@/assets/uc4.config'


export default {
  data() {
    return {
      UC4Config: UC4ConfigExample
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
