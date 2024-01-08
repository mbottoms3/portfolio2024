<template>
  <q-page>
    <div class="text-h6">View some of my projects</div>
    <div class="row">
      <div v-for="project in projects" :key="project" class="col-lg-3 q-ma-md">
        <q-card class="card-style">
          <q-img :src="`images/${project.previewImage}`">
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ project.title }}
            </div>
          </q-img>
          <!-- <q-card-section class="flex justify-center">
            <q-toolbar class="bg-primary">
              <q-toolbar-title>
                {{ project.title }}
              </q-toolbar-title>
            </q-toolbar>
          </q-card-section> -->
          <q-card-section>
            <div class="text-body">{{ project.description }}</div>
            <q-btn no-caps label="View" :href="project.github" target="_none" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ProjectsPage",
  setup() {
    const projects = reactive([
      {
        title: "Trip Split",
        github: "https://github.com/mbottoms3/trip_split",
        previewImage: "tripSplit.png",
        description: "Here is the description",
      },
      {
        title: "Kiss the Cook",
        github: "https://github.com/madrodgerflynn/Kiss_The_Cook",
        previewImage: "kissTheCook.jpg",
        description: "Here is the description",
      },
      {
        title: "Third Title",
        github: "",
        previewImage: "",
        description: "Here is the description",
      },
    ]);
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.card-style {
  width: 100%;
  max-width: 250px;
  height: 280px;
}
</style>
