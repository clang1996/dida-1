<template>
    <Layout class-prefix="layout">
      <Tags/>
      <Notes/>
      <Types/>
      <NumberPad/>
    </Layout>
</template>
<script lang="ts">
  import Tags from '@/components/Money/Tags.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default{
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
  };
</script>
<style lang="scss">
    .layout-content{
      display: flex;
      flex-direction: column;
    }
</style>


