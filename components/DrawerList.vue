<template>
  <v-list dense>
    <template
      v-for="item in items"
      :item="item">
    <v-list-group
      v-if="item.children"
      :key="item.text">
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="child in item.children"
        :to="child.to"
        :key="child.text"
        @click="click()">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ child.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
    <v-list-tile
      v-else
      :to="item.to"
      :key="item.text"
      @click="click()">
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      click: function() {

      }
    }
  },
  props: {
    items: Array
  }
}
</script>
