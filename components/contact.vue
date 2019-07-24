<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Tem alguma dúvida ou sugestão ?</h1>
          <p class="is-size-5">Fale diretamente com a gente. Responderemos o mais breve que for possível!</p>
        </div>
        <div class="column">
          <form @submit.prevent="sendEmail">
            <b-field label="Email">
              <b-input v-model="email" placeholder="Seu email"></b-input>
            </b-field>
            <b-field label="Assunto">
              <b-input v-model="subject" placeholder="Assunto"></b-input>
            </b-field>
            <b-field label="Message">
              <b-input maxlength="600" type="textarea"></b-input>
            </b-field>
            <b-button type="is-primary" native-type="submit">Enviar meu email</b-button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'about',
  data () {
    return {
      email: '',
      subject: '',
      bodyText: ''
    }
  },
  methods: {
    sendEmail () {
      this.$toast.open({
        message: 'Seu email foi enviado!',
        type: 'is-success'
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.section .container {
  background: rgba(240,240,240,1);
  border-radius: 5px;
  padding: 30px;
}

</style>
