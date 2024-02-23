<template>
  <div class="homepage-logo-margin">
    <svg class="chevrons-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z" /><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z" /></svg>
  </div>
</template>

<script>
/***
* Generates a space that depends on
* @see components/homepage/homepage-header.vue, /assets/logo.png
*/
export default {
  name: 'HomepageLogoMargin',
  data: () => ({
    logo_rect: { width: 1280, height: 560 },
    flag_position: 0.3
  })
}
</script>

<style>
.homepage-logo-margin {
  position: relative;
  text-align: center;
}

.chevrons-down {
  height: 5rem;
}
.chevrons-down>path {
  animation-name: waveDown;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.chevrons-down>path:first-child {
  animation-delay: 0.1s;
}
@keyframes waveDown {
  0% { transform: translateY(0%); }
  15%   { transform: translateY(10%); }
  30% { transform: translateY(0%); }
}

</style>
