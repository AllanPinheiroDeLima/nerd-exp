<template>
  <section class="section is-relative" id="about">
    <div class="container is-flex is-clipped" >
      <div class="background"></div>
      <div class="has-text-centered content">
        <h1 class="title has-text-white">O Nerd Experience é sobre</h1>
        <p class="is-size-4 has-text-white">trazer aos jovens de diversas regiões do nosso estado um ambiente de intensa imersão que crie oportunidades de viver verdadeiramente o universo repleto de tecnologia, conteúdo nerd, gamer e geek</p >
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'about'
})
</script>
<style lang="scss" scoped>

.section {
  @media (max-width: 768px) {
    background: url('~assets/images/1-min.jpg');
    background-size: cover;
    background-position: 50px -100px;
  }
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  background: rgba(0,0,0,.6);
}

.section .container {
  background: url('~assets/images/1-min.jpg');
  background-size: cover;
  background-position: 50px -100px;
  padding: 50px 0px;
  border-radius: 5px;
}

.content {
  width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
  }
}

section .is-flex {
  justify-content: center;
}

.is-size-4 {
  line-height: 1.3;
}
</style>
