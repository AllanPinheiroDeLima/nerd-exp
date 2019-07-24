<template>
  <footer class="has-text-white">
    <p class="is-size-7">Designed with
      <b-icon
        type="is-primary"
        icon="heart"
        size="is-small">
      </b-icon> by Allan Lima</p>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'main-footer'
})
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: 30px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
