<template>
  <step>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <p>Enter a list of users. One per line.</p>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          v-model="users"
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
      label: 'Users',
      input: ''
    }
  },
  computed: {
    users: {
      get() {
        return this.$store.state.userData.users
      },
      set(value) {
        this.$store.commit('userData/updateUsers', value)
      }
    }
  },
  components: {
    Step
  }
}
</script>
