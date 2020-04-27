<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags"/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>
<script lang="js">
  import Tags from '@/components/Money/Tags.vue'
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import Notes from '@/components/Money/Notes.vue'

  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
    data() {
      return {
        tags: ['衣','食']
      }
    },
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>


