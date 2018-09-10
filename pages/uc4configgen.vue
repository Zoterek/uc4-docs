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
      <v-stepper-items>
        <!-- STEP 1 -->
        <v-stepper-content step="1">
          
          <v-container>
            <v-select
              dense
              :items="programs"
              label="Select application"
            ></v-select>
          </v-container>
          <v-layout row justify-end>
            <v-btn
              color="primary"
              @click="action++">
              Next
            </v-btn>
          </v-layout>
        </v-stepper-content>
        <!-- STEP 2 -->
        <v-stepper-content step="2">
          <v-container>
            <v-text-field
              v-model="input.client"
              label="Client"
            ></v-text-field>
          </v-container>
          <v-layout row justify-space-between>
            <v-btn
              flat
              @click="action--">
              Previous
            </v-btn>
            <v-btn
              color="primary"
              @click="action++">
              Next
            </v-btn>
          </v-layout>
        </v-stepper-content>
        <!-- STEP 3 -->
        <v-stepper-content step="3">
          <v-container>
            <v-textarea
              v-model="input.users"
              label="Users"
            ></v-textarea>
          </v-container>
          <v-layout row justify-space-between>
            <v-btn
              flat
              @click="action--">
              Previous
            </v-btn>
            <v-btn
              color="primary"
              @click="action++">
              Next
            </v-btn>
          </v-layout>
        </v-stepper-content>
        <!-- STEP 4 -->
        <v-stepper-content step="4">
          <v-container>
            <v-textarea
              v-model="input.groups"
              label="Groups"
            ></v-textarea>
          </v-container>
          <v-layout row justify-space-between>
            <v-btn
              flat
              @click="action--">
              Previous
            </v-btn>
            <v-btn
              color="primary"
              @click="generate">
              Complete
            </v-btn>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
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
      ],
      input: {
        client: 0,
        users: "",
        groups: ""
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    userInput: function() {
      var result = this.input

      result.client = +result.client
      result.users = result.users.split(/\n/).map(e => e.trim()).filter(function(e){return e})
      result.groups = result.groups.split(/\n/).map(e => e.trim()).filter(function(e){return e})
      return result;
    }
  },
  methods: {
    generate: function() {
      var jsonInput = JSON.stringify(this.userInput, null, 2)
      var url = document.createElement('a')
      url.download = 'uc4.input.json'
      var blob = new Blob([jsonInput], {type: 'text/plain'})
      url.href = window.URL.createObjectURL(blob)
      url.click()
    }
  }
}
</script>
