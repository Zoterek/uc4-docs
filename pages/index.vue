<template>
  <v-card class="elevation-8">
    <v-toolbar dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container fluid>
        <v-layout align-center row>
          <v-flex xs6>
            <v-select
              v-model="select"
              :items="appNames"
              label="Select App"
            ></v-select>
          </v-flex>
          <transition name="fade">
            <v-flex xs6 class="text-xs-right"
              v-if="select">
              <v-tooltip
                top
                v-for="external in selectedApp.external"
                :key="external.name">
                <v-btn class="grey--text"
                  icon
                  slot="activator">
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
              v-if="select">
              <component :is="selectedApp.description"></component>
            </v-flex>
          </v-slide-y-transition>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="select = ''">Next</v-btn>
    </v-card-actions>
  </v-card>
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
      select: '',
      apps: []
    }
  },
  created: function() {
    this.apps = appList
  },
  computed: {
    appNames: function() {
      return this.apps.map(e => e.name)
    },
    selectedApp: function() {
      return this.select ? this.apps.filter(e => e.name == this.select)[0] : {}
    }
  }
}
</script>
