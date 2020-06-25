import {Component} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export class TagHelper extends Vue{
  createTag(){
    const name = window.prompt('输入标签名');
    if (!name || name.length===0) {return window.alert('标签名不能为空');}
    this.$store.commit('createTag', name);
  }
}

export default TagHelper