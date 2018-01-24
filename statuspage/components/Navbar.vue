<template>
  <nav id="Navbar" class="navbar navbar-default navbar-fixed-top">
    <Container>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#NavbarCollapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="http://status.skylightqp.kr">상태</a>
      </div>
      <div id="NavbarCollapse" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://github.com/SkyLightQP" target="_blank"><fa-icon pack="fab" name="github" :fixed-width="true" /> GitHub</a></li>
          <li><a href="http://blog.skylightqp.kr" target="_blank"><fa-icon pack="fab" name="blogger-b" :fixed-width="true" /> Blog</a></li>
        </ul>
      </div>
    </Container>
  </nav>
</template>

<script>
  import Container from '~/layouts/Container'

  export default {
    components: {
      Container
    }
  }
</script>
