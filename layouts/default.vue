<template>
  <div>
    <nuxt />
    <main-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/main-footer.vue'

export default Vue.extend({
  components: {
    'main-footer': Footer
  }
})
</script>
