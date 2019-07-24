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
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Sobre
              </a>
              <a class="navbar-item">
                Contato
              </a>
              <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span>Comprar meu Ingresso</span>
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
        <h1 class="title has-text-white">
          Nerd Experience BH
        </h1>
        <h2 class="subtitle has-text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit expedita, repudiandae fuga animi eveniet dolorem pariatur nemo ex dolores quaerat consequatur iusto, dicta voluptates cupiditate? Quam tempore mollitia quos expedita!
        </h2>
        <b-button type="is-primary">Garantir meu ingresso</b-button>
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
  mix-blend-mode: darken;
  opacity: 0.8
}
</style>
