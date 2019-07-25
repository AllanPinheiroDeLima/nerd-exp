<template>
  <nav class="hero-head" v-if="showNavbar">
    <nav class="navbar">
      <div class="container is-flex justify-small">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="~/assets/images/logo/nxp-color.png" alt="Nerd Experience">
          </a>
        </div>
        <div class="navbar-end is-flex">
          <span class="navbar-item navbar-buy-button">
            <a class="button is-warning" href="https://www.sympla.com.br/nerd-experience-belo-horizonte__575732" target="_blank">
              <span>Garantir meu ingresso</span>
            </a>
          </span>
        </div>
      </div>
    </nav>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      showNavbar: false,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      console.log('scrolling', this.lastScrollPosition)

      if (currentScrollPosition > 50) {
        this.showNavbar = true
      } else {
        this.showNavbar = false
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }

      this.lastScrollPosition = currentScrollPosition
    }
  }
})
</script>
<style lang="scss" scoped>

.hero-head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;

  .navbar {
    background: rgba(240,240,240,.4) !important;
    backdrop-filter: blur(5px)
  }
}



.navbar-item img {
  min-height: 50px;
  min-width: 30px;
}
</style>
