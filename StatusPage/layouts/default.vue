<template>
  <div>
    <headers/>
    <div id="top-dummy"></div>
    <nuxt/>
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
  import Headers from '~/components/Header.vue'
  import Footers from '~/components/Footer.vue'
  export default {
    components: {
      Headers,
      Footers
    }
  }
</script>
