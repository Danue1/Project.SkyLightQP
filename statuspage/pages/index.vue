<template>
  <section>
    <Alert />
    <Row>
      <Panel :isSuccess="true" localName="서부" />
      <Panel :isSuccess="false" localName="동부" />
    </Row>
    <Row>
      <Panel :isSuccess="true" localName="서부" />
      <Panel :isSuccess="false" localName="동부" />
    </Row>
    <Row>
      <Panel :isSuccess="true" localName="서부" />
      <Panel :isSuccess="false" localName="동부" />
    </Row>
  </section>
</template>

<script>
  import Row from '~/components/Row'
  import Alert from '~/components/Alert'
  import Panel from '~/components/Panel'

  export default {
    components: {
      Row,
      Alert,
      Panel
    }
  }
</script>
