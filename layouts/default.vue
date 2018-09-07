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
        { text: "Configuration Generator", to: "/uc4configgen" },
        { text: "Configuration",
          children: [
            { text: "uc4.config", to: "/configuration/uc4config" },
            { text: "config.json (deprecated)", to: "/configuration/config_deprecated" },
            { text: "filter.json (deprecated)", to: "/configuration/filter_deprecated" }
          ] },
        { text: "Tools",
          children: [
            { text: "uc4_addUserToGroup" },
            { text: "uc4_search" },
            { text: "uc4_regexReplace" }
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
