<template>
  <section class="section">
    <div class="container is-flex">
      <div class="mini-container has-text-centered">
        <h1 class="title is-size-1">Atrações</h1>
        <h2 class="subtitle is-size-4">
          O <strong>Nerd Experience</strong> vai oferecer um ambiente exclusivo para que você possa se encontrar com seus ídolos e que traga o real sentimento da comunidade.
        </h2>
      </div>
    </div>

    <div class="tiles container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child gaming is-relative is-clipped has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">Games Digitais e Analógicos</h1>
              <p class="is-size-5 has-text-white"><i><b>New-School</b></i> ou <i><b>Old-School</b></i>, todos se encontram e se divertem com a mesma intensidade</p>
            </div>
          </div>
          <div class="tile is-child cosplay is-relative is-clipped has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">Cosplay e Moda</h1>
              <p class="is-size-5 has-text-white">Vem trocar uma ideia com quem conhece e entende da coisa <br>  <b>Cosplayes de Minas Gerais reúnam-se</b></p>
            </div>
          </div>
        </div>

        <div class="tile is-parent is-vertical">
          <div class="tile is-child korea is-relative is-clipped has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">K-POP e Cultura Oriental</h1>
              <p class="is-size-5 has-text-white">Dance, cante e se encante com a cultura oriental. Reveja os clássicos, conheça o novo, vem com a gente</p>
            </div>
          </div>
          <div class="tile is-child comics is-relative is-clipped has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">Livros e Quadrinhos</h1>
              <p class="is-size-5 has-text-white">Sempre quis discutir o final daquele quadrinho que você adora ? Agora é a hora de você fazer isso!</p>
            </div>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <div class="tile is-child movie is-clipped is-relative has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">Filmes e Séries</h1>
              <p class="is-size-5 has-text-white"><b>Conta comigo!</b><br> Vamos falar sobre séries, filmes e até aqueles finais de série que a gente amou ou se decepcionou</p>
            </div>
          </div>
          <div class="tile is-child music is-clipped is-relative has-rounded-border is-flex">
            <div class="background"></div>
            <div class="pop-text">
              <h1 class="title has-text-white">Música e Dublagem</h1>
              <p class="is-size-5 has-text-white"><b>Não vivo sem música!</b><br> Imagina ouvir o que você gosta com gente que gosta das mesmas coisas que você!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style lang="scss" scoped>
.mini-container {
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
}

section .is-flex {
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  align-items: flex-end;
  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 0px;
  }
}

.background {
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  background: rgba(0,0,0,.4);
  position: absolute;
  backdrop-filter: blur(3px)
}

.gaming {
  background: url('~assets/images/gaming.jpg');
  background-size: cover;
  background-position: bottom;
  @media (min-width: 1366px) {
    min-height: 550px
  }
  @media (min-width: 768px) {
    max-height: 350px
  }
  @media (min-width: 0px) {
    background-position: center;
    max-height: 300px;
    .pop-text {
      width: 75%;
    }
  }
}

.korea {
  background: url('~assets/images/korea.jpg');
  background-size: cover;
  padding: 50px;
  @media (min-width: 1366px) {
    min-height: 600px
  }
  @media (min-width: 768px) {
    min-height: 600px
  }
  @media (min-width: 0px) {
    background-position: 0px -400px;
    max-height: 300px
  }
}
.comics {
  background: url('~assets/images/comics.jpg');
  background-size: cover;
  padding: 50px;
  @media (min-width: 1366px) {
    max-height: 600px
  }
  @media (min-width: 768px) {
    min-height: 400px
  }
  @media (min-width: 0px) {
    min-height: 300px
  }
}
.movie {
  background: url('~assets/images/popcorn.jpg');
  background-size: cover;
  padding: 50px;
  @media (min-width: 1366px) {
    min-height: 650px
  }
  @media (min-width: 768px) {
    min-height: 550px
  }
  @media (min-width: 0px) {
    max-height: 300px
  }
}

.cosplay {
  background: url('~assets/images/cosplay.jpg');
  background-size: cover;
  padding: 50px;
  @media (min-width: 1366px) {
    min-height: 600px;
    max-height: 800px
  }
  @media (min-width: 768px) {
    max-height: 700px
  }
  @media (min-width: 0px) {
    min-height: 300px
  }
}
.music {
  background: url('~assets/images/music.jpg');
  background-size: cover;
  background-position: top left;
  padding: 50px;
  @media (min-width: 1366px) {
    max-height: 800px
  }
  @media (min-width: 768px) {
    max-height: 600px
  }

  @media (min-width: 0px) {
    background-position: bottom;
    min-height: 300px
  }
}

.pop-text {
  z-index: 2;
}

.has-rounded-border {
  border-radius: 5px;
}
</style>
