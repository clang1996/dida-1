<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    /*border: 1px solid red;*/
    box-shadow: 0 0 3px rgba( 0 0 0.1);
    font-size: 12px;
    > .item{
      display: flex;
      flex-direction: column;
      width:33.3333%;
      justify-content: center;
      align-items: center;
      .icon{
        height: 36px;
        width: 36px;
        padding: 2px 0 0 0;
      }
    }
    > .item.selected{
      color: orangered;
    }
  }
</style>