<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> My Portfolio </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <app-navigation :routes="routes" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import AppNavigation from "src/components/AppNavigation.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    AppNavigation,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const routes = [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Projects",
        to: "projects",
      },
      {
        title: "Resume",
        to: "resume",
      },
      {
        title: "Contact Micah",
        to: "contact-me",
      },
    ];
    return {
      routes,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
