<template>
  <div>
    <headers/>
    <div id="top-dummy"></div>
    <div class="container">
      <nuxt/>
    </div>
    <footers/>
  </div>
</template>

<style>
  @import url(https://cdn.rawgit.com/openhiun/hangul/14c0f6faa2941116bb53001d6a7dcd5e82300c3f/nanumbarungothic.css);
  body {
    font-family: "Nanum Barun Gothic";
  }
</style>
<script>
  import '~/assets/style.css'
  import headers from '~/components/Header.vue'
  import footers from '~/components/Footer.vue'
  export default {
    components: {
      headers,
      footers
    }
  }
</script>
