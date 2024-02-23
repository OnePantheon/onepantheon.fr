<template>
  <header id="homepage-header" class="center">
    <div class="container">
      <span>Envie de ... créer, développer, apprendre ?</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomepageHeader',
  data () {
    return {
    };
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
  }
}
</script>

<style>
#homepage-header {
  height: calc(100vh - 64px - 6rem);
  background-image: linear-gradient(0deg, rgba(149, 215, 242, 0.3), rgba(149, 215, 242, 0.3)),
  url("../../assets/landing-background.jpg");
  background-size: cover, cover;
  background-repeat: no-repeat;
  background-position: center, center;
  background-attachment: fixed;
  position: relative;
}
</style>
