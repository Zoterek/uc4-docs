<template>
  <v-container fluid>
    <v-layout align-center row fill-height>
      <v-flex xs6>
        <v-select
          v-model="app"
          :items="appNames"
          label="Select App"
          dense
          required
          :error="error"
          :rules="appRules"></v-select>
      </v-flex>
      <transition name="fade">
        <v-flex xs6 class="text-xs-right"
          v-if="app">
          <v-tooltip
            top
            v-for="external in selectedApp.external"
            :key="external.name">
            <v-btn class="grey--text"
              icon
              slot="activator"
              :href="external.url">
              <v-icon :class="external.icon"
                ></v-icon>
            </v-btn>
            <span>{{ external.tooltip }}</span>
          </v-tooltip>
        </v-flex>
      </transition>
    </v-layout>
    <v-layout class="description" row>
      <v-slide-y-transition>
        <v-flex
          v-if="app">
          <component :is="selectedApp.description"></component>
        </v-flex>
      </v-slide-y-transition>
    </v-layout>
  </v-container>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.description {
  min-height: 100px;
}
</style>


<script>
import appList from '~/assets/app-list'

export default {
  data() {
    return {
      title: 'Automic App Docs',
      appRules: [
        e => !!e || 'App is required'
      ],
      apps: appList,
      error: false
    }
  },
  created() {
    this.$store.commit('updateTitle', this.title)
    this.$router.app.$on('nextStep', this.validate)
    
    this.$store.commit('updateStep', 0)
  },
  destroyed() {
    this.$router.app.$off('nextStep')
  },
  computed: {
    app: {
      get: function() {
        return this.$store.state.app
      },
      set: function(value) {
        this.$store.commit('updateApp', value)
      }
    },
    appNames: function() {
      return this.apps.map(e => e.name)
    },
    selectedApp: function() {
      if(this.app) {
        this.error = false
        return this.apps.filter(e => e.name == this.app)[0]
      }

      return null
    }
  },
  methods: {
    validate: function() {
      if(this.selectedApp) {
        this.$router.push(this.selectedApp.to)
      } else {
        this.error = true
      }
    }
  }
}
</script>
