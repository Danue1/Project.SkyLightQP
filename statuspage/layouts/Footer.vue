<template>
  <footer>
    <hr>
    <div class="text-center text">
      <span class="text-muted">Copyright 2018. SkyLightQP. All rights reserved.</span>
      <div>
        <IconLink href="https://skylightqp.kr" icon="home" :upper="true"> home </IconLinK>
        <IconLink href="http://status.skylightqp.kr" icon="sync-alt" :upper="true"> status </IconLinK>
        <IconLink href="mailto:me@skylightqp.kr" icon="envelope" :upper="true"> mail </IconLinK>
      </div>
    </div>
  </footer>
</template>

<script>
  import IconLink from '~/components/IconLink'

  export default {
    components: {
      IconLink
    }
  }
</script>

<style>
  footer {
    bottom: 0;
    height: 10rem; /* Set the fixed height of the footer here */
    /* line-height: 100px; /* Vertically center the text there */
  }

  footer > .text {
    margin-top: 4rem;
  }
</style>
