<template>
  <section class="container">
    <div class="Hero-container container">
      <!-- <div class="flex">
        <h1>Avi<span class="header-rotate">v</span></h1>
      </div>
      <div class="flex">
        <h1>Zohar<span class="header-dot">.</span></h1>
      </div> -->
      <!-- <img src="~@/assets/img/port-hero.jpg" alt=""> -->
    </div>
    <div class="sub-container">
      <specialities />
      <portfolio />
      <about />
      <portFooter />
    </div>
    <div
      v-click-outside="onClickOutside"
      class="contact flex"
      :style="{ 'max-width': menuWidth }"
    >
      <h1>Contact Me</h1>
      <div class="flex">
        <p v-clipboard="'avivzo9@gmail.com'" @click.stop="textCopy('E-mail')">
          E-mail: <span>avivzo9@gmail.com</span>
        </p>
        <p v-clipboard="'0525776533'" @click.stop="textCopy('Phone')">
          Phone: <span>0525776533</span>
        </p>
      </div>
      <form @submit.prevent="sendEmail">
        <h4>Send E-mail:</h4>
        <!-- <h4>E-mail</h4>
        <input
          v-model="email.from"
          type="email"
          class="email-form"
          placeholder="name@example.com"
          required
        /> -->
        <h4>Subject</h4>
        <input
          type="text"
          v-model="email.subject"
          class="email-form"
          placeholder="Subject"
          required
        />
        <h4>Message</h4>
        <textarea
          class="email-form p-2"
          placeholder="Message"
          rows="5"
          v-model="email.msg"
          required
        />
        <div class="flex">
          <button class="btn btn-primary m-2 btn-send">Send</button>
        </div>
      </form>
    </div>
    <div :class="menuButtomClass" id="at" name="at">
      <font-awesome-icon
        @click="isOpen = !isOpen"
        class="fa fa-at"
        icon="at"
        id="at"
        name="at"
      />
    </div>
  </section>
</template>

<script>
import about from "../cmps/about.vue";
import portFooter from "../cmps/port-footer.vue";
import portfolio from "../cmps/portfolio.vue";
import specialities from "../cmps/specialities.vue";
import vClickOutside from "v-click-outside";
import { portService } from "../services/portService";
export default {
  name: "home",
  data() {
    return {
      isOpen: false,
      email: {
        from: "avivzo9@gmail.com",
        subject: "",
        msg: "",
      },
    };
  },
  methods: {
    onClickOutside(ev) {
      if (ev.target.id === "at" || ev.target.parentElement.id === "at") return;
      this.isOpen = false;
    },
    sendEmail() {
      portService.sendEmail(this.email);
    },
    textCopy(type) {
      console.log("copied!");
      this.$notify({
        title: "Success!",
        message: `${type} copied to clipboard!`,
        duration: 2000,
      });
    },
  },
  computed: {
    menuWidth() {
      return this.isOpen ? "100vw" : "0";
    },
    menuButtomClass() {
      return this.isOpen
        ? "at-container-open flex"
        : "at-container-closed flex";
    },
  },
  components: { specialities, portfolio, about, portFooter, portService },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>