<template>
    <div class="tags">
        <ul class="current">
            <li :class="{selected:selectedTags.indexOf(tag)>=0}" :key="tag.id"
                @click="toggle(tag)"
                v-for="tag in tagList">{{tag.name}}
            </li>
        </ul>
        <div class="new">
            <Button @click="createTag">新增标签</Button>
        </div>
    </div>
</template>

<script lang="ts">
		import {Component} from 'vue-property-decorator';
		import {mixins} from 'vue-class-component';
		import TagHelper from '@/mixins/TagHelper';

		@Component
		export default class Tags extends mixins(TagHelper) {
				selectedTags: string[] = [];

				get tagList() {
						return this.$store.state.tagList;
				}


				created() {
						this.$store.commit('fetchTags');
				}

				toggle(tag: string) {
						const index = this.selectedTags.indexOf(tag);
						if (index >= 0) {
								this.selectedTags.splice(index, 1);
						} else {
								this.selectedTags.push(tag);
						}

						this.$emit('update:value', this.selectedTags);
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
        background: white;

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
                    background-color: #4ebf80;
                }
            }
        }
    }
</style>