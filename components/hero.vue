<template>
  <section class="hero  is-medium">
    <div class="hero-background has-background-primary"></div>
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active has-text-white">
                Home
              </a>
              <a class="navbar-item has-text-white">
                Sobre
              </a>
              <a class="navbar-item has-text-white">
                Contato
              </a>
              <span class="navbar-item">
                <a class="button is-warning" href="https://www.sympla.com.br/nerd-experience-belo-horizonte__575732" target="_blank">
                  <span>Garantir meu ingresso</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white is-size-1">
          Nerd Experience BH
        </h1>
        <h2 class="subtitle has-text-white is-size-4">
          Viva essa experiência! <br>
          Tudo o que você ama, reunido em um só lugar
        </h2>
        <a class="button is-warning is-medium" href="https://www.sympla.com.br/nerd-experience-belo-horizonte__575732" target="_blank">
          <span>Garantir meu ingresso</span>
        </a>
      </div>
  </div>
</section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'hero'
})
</script>
<style lang="scss" scoped>
.hero {
  background: url('~assets/images/pablo-heimplatz-party-unsplash.jpg');
  background-size: cover;
  position: relative;
}

.hero-background {
  width: 100%;
  height: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  backdrop-filter: blur(8px);
  opacity: 0.8
}
</style>

