<template>
  <layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
      <FormItem
        field-name="标签名"
        placeholder="输入标签名"
      />
      <Button>删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import FormItem from '@/components/Money/FofmItem.vue';
  @Component({
    components: {FormItem}
  })
  export default class EditLabel extends Vue {
    created() {
      console.log(this.$route.params);
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(tag => tag.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>