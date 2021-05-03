<template>
  <section class="portfolio-container sub-container">
    <h1 id="projects" class="font-header">projects</h1>
    <p class="small-header">My projects</p>
    <ul>
      <li v-for="link in links" :key="link._id">
        <a target="_blank" :href="link.url" class="link">
          <h3>{{ link.name }}</h3>
          <div class="flex">
            <img :src="link.img" alt="" />
          </div>
          <p>{{ link.desc }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { portService } from "../services/portService.js";
export default {
  name: "portfolio",
  computed: {
    links() {
      return portService.getLinks();
    },
  },
};
</script>