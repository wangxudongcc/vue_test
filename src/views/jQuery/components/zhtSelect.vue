<template>
    <div>
        <div @click="toggleDropdown" :class="disabled">
            <template v-if="multiple">
                <span v-for="item in selectedItems" :key="item.value" class="selected-item">
                    {{ item.label }}
                    <span @click.stop="removeSelected(item.value)">x</span>
                </span>
                <input v-model="selectedLabel" @input="handleSearch" :disabled="disabled" />
            </template>
            <template v-else>
                <input v-model="selectedLabel" @input="handleSearch" :disabled="disabled" readonly />
                <span>▲</span>
                <span v-if="clearable && selectedItems.length" @click.stop="clearSelection">x</span>
            </template>
        </div>
        <!-- 下拉选项 -->
        <div v-show="dropdownVisible">
            <template v-if="loading">
                <div>加载中...</div>
            </template>
            <template v-else-if="filteredOptions.length">
                <div v-for="item in filteredOptions" :key="item.value" class="dropdown-item"
                    @click="handleSelect(item)">
                    <slot name="option" :item="item">
                        {{ item.label }}
                    </slot>
                </div>
            </template>
            <template v-else>无匹配数据</template>
        </div>
    </div>
</template>
<script>
export default {
    name: "zhtSelect",
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [String, Number, Array],
            default: "",
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        remote: {
            type: Boolean,
            default: false,
        },
        remoteMethod: {
            type: Function,
            default: () => { },
        },
    },
    data() {
        return {
            dropdownVisible: false,
            selectedItems: [], // 选中的项
            searchText: '',
            selectedLabel: ''
        };
    },
    computed: {
        filteredOptions() {
            if (this.remote) return this.options
            return this.options.filter(item => item.label.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    watch: {
        value(newVal) {
            this.updateSelectedItems(newVal)
        },
        options() {
            this.updateSelectedItems(this.value)
        }
    },
    mounted() { },
    methods: {
        toggleDropdown() {
            if (this.disabled) return
            this.dropdownVisible = !this.dropdownVisible
            if (this.dropdownVisible) {
                this.searchText = ''
            }
        },
        handleSearch() {
            if (this.remote && this.remoteMethod) {
                this.remoteMethod(this.searchText)
            }
        },
        isSelected(item) {
            if (this.multiple) {
                return this.selectedItems.some(selected => selected.value === item.value)
            }
            return this.selectedItems.length && this.selectedItems[0].value === item.value
        },
        handleSelect(item) {
            if (item.disabled) return

            if (this.multiple) {
                const index = this.selectedItems.findIndex(selected => selected.value === item.value)
                if (index > -1) {
                    this.selectedItems.splice(index, 1)
                } else {
                    this.selectedItems.push(item)
                }
                this.$emit('input', this.selectedItems.map(i => i.value))
            } else {
                this.selectedItems = [item]
                this.selectedLabel = item.label
                this.$emit('input', item.value)
                this.dropdownVisible = false
            }
            this.$emit('change', this.multiple ? this.selectedItems : item)
        },
        removeSelected(value) {
            if (this.disabled) return
            this.selectedItems = this.selectedItems.filter(item => item.value !== value)
            this.$emit('input', this.selectedItems.map(i => i.value))
            this.$emit('change', this.selectedItems)
        },
        clearSelection() {
            if (this.disabled) return
            this.selectedItems = []
            this.selectedLabel = ''
            this.$emit('input', this.multiple ? [] : '')
            this.$emit('change', null)
        },
        updateSelectedItems(value) {
            if (!value || (Array.isArray(value) && value.length === 0)) {
                this.selectedItems = []
                this.selectedLabel = ''
                return
            }
            const values = this.multiple ? value : [value]
            this.selectedItems = this.options.filter(item => values.includes(item.value))
            if (!this.multiple && this.selectedItems.length) {
                this.selectedLabel = this.selectedItems[0].label
            }
        }
    },
};
</script>
