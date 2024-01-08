<template>
  <q-list>
    <!-- <q-item-label header> Navigation </q-item-label> -->

    <div v-for="route in routes" :key="route.title">
      <q-item clickable color="white" text-color="black" :to="route.to">{{
        route.title
      }}</q-item>
    </div>
  </q-list>
</template>
<script>
export default {
  name: "AppNavigation",
  props: {
    routes: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
  },
};
</script>
