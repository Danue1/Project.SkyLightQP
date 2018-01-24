<template>
  <span id="IconLink">
    <a class="text-muted" :href="href" :class="(upper) && 'upper'">
      <fa-icon pack="fas" :name="icon" :fixed-width="true" />
      <slot />
    </a>
  </span>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    upper: Boolean
  }
}
</script>

<style>
  #IconLink .upper {
    text-transform: uppercase;
  }
</style>
