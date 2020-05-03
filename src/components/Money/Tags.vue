<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
    <div class="new">
      <Button @click="create">新增标签</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      if (this.selectedTags.indexOf(tag) >= 0) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags)
    }

    create() {
      const name = window.prompt('输入标签名');
      if (name === '') {
      } else if (this.dataSource) {
        this.$emit('update:dataSource', [...this.dataSource, name]);
      }
    }
  }


</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    > .new {
      padding-top: 16px;

      button {
        border: none;
        background-color: transparent;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $bg: #d9d9d9;
        background-color: $bg;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-top: 4px;
        margin-right: 12px;

        &.selected {
          background-color: orangered;
        }
      }
    }
  }
</style>