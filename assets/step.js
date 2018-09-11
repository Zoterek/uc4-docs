export default {
  get: function() {
    return this.$store.state.step
  },
  set: function(value) {
    this.$store.commit('updateStep', value)
  }
}