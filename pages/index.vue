<template>
  <div class="homepage">
    <HomepageHeader />
    <section class="container flow-text">
      <HomepageLogoMargin />

      <h1 style="display: none /* seo >>*/">
        L'association informatique de l'EFREI
      </h1>
      <blockquote class="i">
        TODO Quote
      </blockquote>
      <p>
        Cette année, nous sommes <NuxtLink to="/team">
          TODO étudiants
        </NuxtLink> à TODO
      </p>
    </section>

    <section class="container">
      <h2>Notre blog</h2>
      <p class="flow-text">
        Voici les derniers articles postés sur notre blog :
      </p>
      <article-last />
    </section>

    <section id="contact" class="container flow-text">
      <h2>Contactez-nous !</h2>
      <p class="">
        XXX
      </p>
      <div class="row">
        <ul class="collection with-header col s12 m10 l8 offset-m1 offset-l2">
          <li class="collection-header center">
            <h4>Notre carte de visite</h4>
          </li>
          <li class="collection-item avatar">
            <img alt="instagram logo" src="@/assets/instagram_icon.webp" class="circle" style="border-radius: 0"> TODO <a href="https://www.instagram.com/one_pantheon/">notre Instagram</a>
          </li>
          <li class="collection-item avatar">
            <img alt="e-mail logo" src="@/assets/email_icon.svg" class="circle" style="transform: scale(1.15)"> Pour les plus sérieux, nous avons un également un mail : &lt;contact@onepantheon.fr&gt;
          </li>
          <li class="collection-item avatar">
            <img alt="discord logo" src="@/assets/discord_icon.svg" class="circle" style="border-radius: 0"> TODO Discord
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style>
.i {
  font-style: italic;
}
.collection-item {
  font-size: 0.8em;
}
</style>
