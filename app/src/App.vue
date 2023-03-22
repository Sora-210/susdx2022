<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>DocumentFormater</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      rail
      app
    >
      <v-list >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} デジタル田園都市の民</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(true)
const items = ref([
  {
    icon: 'folder',
    title: 'Folder',
    to: '/'
  }
])
</script>
  