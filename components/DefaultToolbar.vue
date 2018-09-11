<template>
  <v-toolbar dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
</template>


<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    title: function() {
      return this.$store.state.title
    }
  }
}
</script>
