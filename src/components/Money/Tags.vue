<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>


    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
    .tags{
      font-size: 14px;
      padding: 16px;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      > .new{
        padding-top: 16px;
        button{
          border: none;
          background-color: transparent;
          color: #999;
          border-bottom: 1px solid;
          padding: 0 4px;
        }
      }
      > .current{
        display: flex;
        flex-wrap: wrap;
        > li{
          background-color: #d9d9d9;
          $h:24px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 16px;
          margin-top: 4px;
          margin-right:12px;
        }
      }
    }
</style>