<template>
  <div>
    <header/>
    <div id="top-dummy"></div>
    <nuxt/>
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
  import Header from '~/components/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>
