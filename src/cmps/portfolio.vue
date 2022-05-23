<template>
  <section class="portfolio-container sub-container">
    <h1 id="projects" class="font-header">top projects</h1>
    <p class="small-header">My projects</p>
    <div class="proj-details-con">
      <cardPreview v-for="link in links" :key="link._id" :link="link" />
    </div>
  </section>
</template>

<script>
import { portService } from "../services/portService.js";
import vClickOutside from "v-click-outside";
import cardPreview from "./card-preview.vue";
export default {
  name: "portfolio",
  data() {
    return {
      links: null,
      currProj: null,
      show: false,
    };
  },
  created() {
    this.links = portService.getLinks();
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    cardPreview,
  },
};
</script>