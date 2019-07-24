<template>
  <section>
    <hero-section />
    <attractions-section />
    <about-section />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/hero.vue'
import Attractions from '~/components/attractions.vue'
import About from '~/components/about.vue'

export default Vue.extend({
  name: 'index',
  components: {
    'hero-section': Hero,
    'attractions-section': Attractions,
    'about-section': About
  }
})
</script>
