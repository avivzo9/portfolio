<template>
  <section class="proj-modal-con">
    <section>
      <ul>
        <li v-for="link in links" :key="link._id">
          <h5>{{ link.name }}</h5>
        </li>
      </ul>
    </section>
    <section>
      <div>
        <img :src="isProjModal.img" :alt="isProjModal.img" />
        <h2>{{ isProjModal.name }}</h2>
        <font-awesome-icon @click="closeProjModal()" icon="times-circle" />
      </div>
      <h4>{{ isProjModal.desc }}</h4>
      <div>
        <video muted autoplay loop preload="metadata" v-if="isProjModal.vid">
          <source :src="isProjModal.vid" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <a target="_blank" :href="isProjModal.url"
          >Go to website <font-awesome-icon icon="external-link-alt"
        /></a>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "projModal",
  props: ["isProjModal", "closeProjModal", "links", "changeProjModalById"],
};
</script>