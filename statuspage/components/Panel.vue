<template>
  <div id="Panel" class="col-md-6">
    <div class="panel" :class="'panel-' + status">
      <div class="panel-heading">
        <h3 class="panel-title"><b>Test</b></h3>
      </div>
      <div class="panel-body">
        <p>
          <span :class="'text-' + status"><fa-icon pack="fas" name="check-circle" :fixed-width="true" /></span> {{heading}}.
        </p>
        <small>- 대한민국 {{localName}}</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isSuccess: {
        type: Boolean,
        required: true
      },
      localName: {
        type: String,
        required: true
      }
    },
    computed: {
      status () {
        return (this.isSuccess)
          ? 'success'
          : 'danger'
      },
      heading () {
        return (this.isSuccess)
          ? '서버가 정상 가동 중입니다'
          : '서버가 닫혀있습니다'
      }
    }
  }
</script>
