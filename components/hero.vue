<template>
  <section class="hero  is-medium">
    <div class="hero-background has-background-primary"></div>
    <div class="hero-head">
      <nav class="navbar">
        <div class="container is-flex justify-small">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="~/assets/images/logo/nxp-color.png" alt="Nerd Experience">
            </a>
          </div>
          <div class="navbar-end is-flex align-middle">
            <a href="#" class="navbar-item is-active has-text-white">
              Home
            </a>
            <a href="#about" class="navbar-item has-text-white">
              Sobre
            </a>
            <a href="#contact" class="navbar-item has-text-white">
              Contato
            </a>
            <span class="navbar-item navbar-buy-button">
              <a class="button is-warning" href="https://www.sympla.com.br/nerd-experience-belo-horizonte__575732" target="_blank">
                <span>Garantir meu ingresso</span>
              </a>
            </span>
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

.justify-small {
  @media (max-width: 1280px) {
    justify-content: space-between;
  }
}

.navbar-item {
  background: none !important;
  &:hover {
    color: #ffdd57 !important
  }
}

.navbar-buy-button {
  @media(max-width: 768px) {
    display: none;
  }
}

.navbar-item img {
  min-height: 80px;
  min-width: 50px;
}

.align-middle {
  align-items: center
}
</style>

