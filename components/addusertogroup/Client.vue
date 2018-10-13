<template>
  <step>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <p>Select on which client to perform the modifications. Set it to 0 to make changes on all clients.</p>
      </v-flex>
      <v-flex xs2>
        <v-text-field
          v-model="client"
          :label="label"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </step>
</template>


<script>
import Step from '~/components/addusertogroup/Step'

export default {
  data() {
    return {
      label: 'Client'
    }
  },
  computed: {
    client: {
      get() {
        return this.$store.state.userData.client
      },
      set(value) {
        this.$store.commit('userData/updateClient', value)
      }
    }
  },
  components: {
    Step
  }
}
</script>
