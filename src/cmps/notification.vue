<template>
  <el-button plain @click="open1"> Top Right </el-button>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$notify({
        title: "Custom Position",
        message: "I'm at the top right corner",
      });
    },
  },
};
</script>