<template>
  <section class="portfolio-container sub-container">
    <h1 id="projects" class="font-header">projects</h1>
    <p class="small-header">My projects</p>
    <div class="proj-details-con">
      <cardPreview v-for="link in links" :key="link._id" :link="link" />
    </div>
    <!-- <div class="proj-details-con">
      <ul>
        <li v-for="link in links" :key="link._id" @click="currProj = link">
          <div class="link">
            <h3 :style="{ color: setProjColor(link._id) }">{{ link.name }}</h3>
          </div>
        </li>
      </ul>
      <div>
        <div>
          <h2>{{ currProj.name }}</h2>
          <h4>{{ currProj.desc }}</h4>
          <h4 v-if="currProj.basedOn">Based on: {{ currProj.basedOn }}.</h4>
        </div>
        <div>
          <button @click="nextProj(-1)">
            <font-awesome-icon icon="chevron-left" />
          </button>
          <img :src="currProj.gif" :alt="currProj.gif" />
          <button @click="nextProj(1)">
            <font-awesome-icon icon="chevron-right" />
          </button>
        </div>
        <div>
          <h4>{{ currProj.tech }}</h4>
          <a target="_blank" :href="currProj.url"
            >Go to website <font-awesome-icon icon="external-link-alt"
          /></a>
        </div>
      </div>
    </div> -->
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
  methods: {
    setProjColor(projId) {
      return projId === this.currProj._id ? "#fc5957" : "";
    },
    nextProj(num) {
      var projIdx = this.links.findIndex((p) => p._id === this.currProj._id);
      const nextProjIdx = projIdx + num;
      if (nextProjIdx < 0) this.currProj = this.links[this.links.length - 1];
      else if (nextProjIdx > this.links.length - 1)
        this.currProj = this.links[0];
      else this.currProj = this.links[nextProjIdx];
    },
  },
  created() {
    this.links = portService.getLinks();
    this.currProj = this.links[0];
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    cardPreview,
  },
};
</script>