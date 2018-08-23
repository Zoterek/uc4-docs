<template>
  <v-app>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      fixed>
      <drawer-list
        :items="items">
      </drawer-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      fixed>
      <v-toolbar-title>
        <span>Docs</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
        <nuxt></nuxt>
    </v-content>
  </v-app>
</template>

<script>
import DrawerList from '@/components/DrawerList'

export default {
  data () {
    return {
      items: [
        { text: "Getting Started", to: "/" },
        { text: "Configuration",
          children: [
            { text: "config.json", to: "/configuration/config" },
            { text: "filter.json", to: "/configuration/filter" }
          ] },
        { text: "Tools",
          children: [
            { text: "uc4_search" },
            { text: "uc4_regex_replace" }
          ]
        }
      ],
      c: function() {

      }
    }
  },
  name: 'App',
  components: {
    DrawerList
  }
}
</script>
