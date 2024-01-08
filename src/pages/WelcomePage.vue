<template>
  <q-page class="flex justify-center background-gradient">
    <div class="row">
      <div class="col">
        <div class="text-h3">Welcome to my portfolio</div>
        <q-avatar size="200px">
          <q-img src="images/headshot.jpg" />
        </q-avatar>
      </div>
    </div>
    <div class="row"></div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomePage",
});
</script>
<style scoped>
.background-gradient {
  background: linear-gradient(to bottom, #1976d2, #ffffff);
}
</style>
