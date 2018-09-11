<template>
  <step>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <p>Select on which client to perform the modifications.</p>
      </v-flex>
      <v-flex xs2>
        <v-text-field
          v-model="client"
          :label="label"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 wrap offset-xs1
        v-if="client == 0">
        <p class="grey--text">will make changes on all clients if 0 selected</p>
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
        return this.$store.state.userInput.client
      },
      set(value) {
        this.$store.commit('updateClient', value)
      }
    }
  },
  components: {
    Step
  }
}
</script>
