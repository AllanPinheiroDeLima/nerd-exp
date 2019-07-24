<template>
  <section>
    <hero-section />
    <attractions-section />
    <about-section />
    <ticket-section />
    <contact-section />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/hero.vue'
import Attractions from '~/components/attractions.vue'
import About from '~/components/about.vue'
import Ticket from '~/components/ticket.vue'
import Contact from '~/components/contact.vue'

export default Vue.extend({
  name: 'index',
  components: {
    'hero-section': Hero,
    'attractions-section': Attractions,
    'about-section': About,
    'ticket-section': Ticket,
    'contact-section': Contact
  }
})
</script>
