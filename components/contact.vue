<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Tem alguma dúvida ou sugestão ?</h1>
          <p class="is-size-5">Fale diretamente com a gente. Responderemos o mais breve que for possível!</p>
        </div>
        <div class="column" id="contact">
          <form @submit.prevent="sendEmail">
            <b-field label="Email">
              <b-input v-model="email" placeholder="Seu email"></b-input>
            </b-field>
            <b-field label="Assunto">
              <b-input v-model="subject" placeholder="Assunto"></b-input>
            </b-field>
            <b-field label="Message">
              <b-input maxlength="600" v-model="bodyText" type="textarea"></b-input>
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
    async sendEmail () {
      var data = {
          service_id: 'allanpinheirodelima_gmail_com',
          template_id: 'template_axIXx3LE',
          user_id: 'user_crG9HjOGXlWPo7JDkBhue',
          template_params: {
            'to_name': 'NerdExperience',
            'from_name': this.email,
            'subject': this.subject,
            'message_html': this.bodyText
          }
      };

      await this.$axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(resp => {
        this.$toast.open({
          message: 'Seu email foi enviado!',
          type: 'is-success'
        })

        this.sendCopy()
      })
      .catch(e => this.$toast.open({
        message: 'Algo deu errado',
        type: 'is-danger'
      }))
    },
    async sendCopy () {
      var data = {
        service_id: 'allanpinheirodelima_gmail_com',
        template_id: 'template_axIXx3LE',
        user_id: 'user_crG9HjOGXlWPo7JDkBhue',
        template_params: {
          'to_name': this.email,
          'from_name': 'NerdExperience',
          'subject': this.subject,
          'message_html': `este email é uma cópia <br /> ${this.bodyText}`
        }
      };

      await this.$axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    }
  }
})
</script>
<style lang="scss" scoped>
.section {
  margin-bottom: 30px;
  @media (max-width: 768px) {
    background: rgba(240,240,240,1);
  }
}
.section .container {
  background: rgba(240,240,240,1);
  border-radius: 5px;
  padding: 30px;
}

</style>
