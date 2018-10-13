<template>
  <step>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <p>Enter a list of groups. One per line.</p>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          v-model="groups"
          :label="label"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </step>
</template>


<script>
import Step from '~/components/addusertogroup/Step'

export default {
  data() {
    return {
      label: 'Groups',
      input: ''
    }
  },
  computed: {
    groups: {
      get() {
        return this.$store.state.userData.groups
      },
      set(value) {
        this.$store.commit('userData/updateGroups', value)
      }
    }
  },
  components: {
    Step
  }
}
</script>
