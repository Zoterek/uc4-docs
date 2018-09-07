<template>
  <code>
    <pre>{{ codeText }}</pre>
  </code>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    codeText: function() {
      return JSON.stringify(this.code, null, 2)
    }
  },
  props: {
    code: Object
  }
}
</script>
