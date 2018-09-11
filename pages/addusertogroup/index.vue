<template>
  <v-stepper class="elevation-0"
    v-model="active">
    <v-stepper-header>
      <template
        v-for="(step, index) in steps">
        <v-stepper-step
          :key="step.name"
          :complete="active > index + 1"
          :step="index + 1">{{ step.name }}</v-stepper-step>
        <v-divider 
          :key="step.name + 'divider'"
          v-if="index != steps.length - 1"/>
      </template>
    </v-stepper-header>
    <v-stepper-items
      v-for="(step, index) in steps"
      :key="step.name">
      <v-stepper-content :step="index + 1">
        <component :is="step.template"></component>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import stepList from '~/assets/addusertogroup/step-list'

export default {
  data() {
    return {
      title: 'App - Add User To Group',
      active: 1,
      steps: stepList
    }
  },
  created() {
    this.$store.commit('updateTitle', this.title)
    this.$store.commit('updateStep', 1)
    
    this.$router.app.$on('nextStep', this.incrementStep)
    this.$router.app.$on('previousStep', this.decrementStep)
  },
  destroyed() {
    this.$router.app.$off('nextStep')
    this.$router.app.$off('previousStep')
  },
  methods: {
    incrementStep: function() {
      if(this.active < this.steps.length) {
        this.active++
      }
    },
    decrementStep: function() {
      if(this.active > 1) {
        this.active--
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
