<template>
  <section class="section">
    <div class="container is-flex">
      <div class="has-text-centered content">
        <h1 class="title">O Nerd Experience é sobre</h1>
        <p class="is-size-4">trazer aos jovens de diversas regiões do nosso estado um ambiente de intensa imersão que crie oportunidades de viver verdadeiramente o universo repleto de tecnologia, conteúdo nerd, gamer e geek</p >
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
    background: rgba(240,240,240,1);
  }
}

.section .container {
  background: rgba(240,240,240,1);
  padding: 50px 0px;
  border-radius: 5px;
}

.content {
  width: 50%;
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
