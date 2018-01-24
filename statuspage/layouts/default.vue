<template>
  <div id="Default">
    <Header />
    <Container>
      <nuxt />
    </Container>
    <Footer />
  </div>
</template>

<script>
  import 'bootswatch/yeti/bootstrap.css'

  import Header from './Header'
  import Footer from './Footer'
  import Container from './Container'

  export default {
    components: {
      Header,
      Footer,
      Container
    }
  }
</script>

<style>
  @import url(https://cdn.rawgit.com/openhiun/hangul/14c0f6faa2941116bb53001d6a7dcd5e82300c3f/nanumbarungothic.css);

  html {
    font-size: 16px;
  }

  body {
    font-family: "Nanum Barun Gothic";
  }

  #Default > #Container {
    margin-top: 4rem;
  }
</style>
