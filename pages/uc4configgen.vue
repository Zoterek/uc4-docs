<template>
  <v-container>
    <v-stepper v-model="action">
      <v-stepper-header>
        <v-stepper-step :complete="action > 1" step="1">Application</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="action > 2" step="2">Client</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="action > 3 " step="3">Users</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Groups</v-stepper-step>
      </v-stepper-header>
      <v-stepper-content step="1">
        <v-card color="secondary" class="mb-5" height="200px"></v-card>
        <!--v-container-fluid>
          <v-select
            dense
            :items="programs"
            label="Select application">

          </v-select>
        </v-container-fluid-->
        <v-btn
          color="primary"
          @click="action++">
          Next
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="secondary" class="mb-5" height="200px"></v-card>
        <v-btn
          color="primary"
          @click="action++">
          Next
        </v-btn>
        <v-btn
          flat
          @click="action--">
          Previous
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="secondary" class="mb-5" height="200px"></v-card>
        <v-btn
          color="primary"
          @click="action++">
          Next
        </v-btn>
        <v-btn
          flat
          @click="action--">
          Previous
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-btn
          color="primary"
          @click="log('complete')">
          Complete
        </v-btn>
        <v-btn
          flat
          @click="action--">
          Previous
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<style>

</style>


<script>
export default {
  data() {
    return {
      action: 1,
      title: 'UC4 Configuration Generator',
      programs: [
        "uc4_addUserToGroup"
      ]
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    log: function(text) {
      console.log(text)
    }
  }
}
</script>
