<template>
    <div class="custom-select">
      <!-- 单选/多选模式 -->
      <div class="select-input" @click="toggleDropdown" :class="{ disabled }">
        <template v-if="multiple">
          <span v-for="item in selectedItems" :key="item.value" class="selected-tag">
            {{ item.label }}
            <span class="remove-tag" @click.stop="removeSelected(item.value)">×</span>
          </span>
          <input
            v-model="searchText"
            @input="handleSearch"
            placeholder="请选择"
            :disabled="disabled"
          />
        </template>
        <template v-else>
          <input
            v-model="selectedLabel"
            @input="handleSearch"
            placeholder="请选择"
            :disabled="disabled"
            readonly
          />
        </template>
        <span class="arrow-icon" >▼</span>
        <span v-if="clearable && selectedItems.length" class="clear-btn" @click.stop="clearSelection">×</span>
      </div>
  
      <!-- 下拉选项 -->
      <div v-show="dropdownVisible" class="dropdown-menu">
        <template v-if="loading">
          <div class="loading-text">加载中...</div>
        </template>
        <template v-else-if="filteredOptions.length">
          <div
            v-for="item in filteredOptions"
            :key="item.value"
            class="dropdown-item"
            @click="handleSelect(item)"
            :class="{ selected: isSelected(item), disabled: item.disabled }"
          >
            <slot name="option" :item="item">
              {{ item.label }}
            </slot>
          </div>
        </template>
        <template v-else>
          <div class="no-data">无匹配数据</div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomSelect',
    props: {
      options: {
        type: Array,
        default: () => []
      },
      value: {
        type: [String, Number, Array],
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      remote: {
        type: Boolean,
        default: false
      },
      remoteMethod: {
        type: Function,
        default: null
      },
      clearable: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dropdownVisible: false,
        searchText: '',
        selectedItems: [],
        selectedLabel: ''
      }
    },
    computed: {
      filteredOptions() {
        if (this.remote) return this.options
        return this.options.filter(item => 
          item.label.toLowerCase().includes(this.searchText.toLowerCase())
        )
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(newVal) {
          this.updateSelectedItems(newVal)
        }
      },
      options() {
        this.updateSelectedItems(this.value)
      }
    },
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
    mounted() {
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.dropdownVisible = false
        }
      })
    }
  }
  </script>
  
  <style scoped>
  .custom-select {
    position: relative;
    display: inline-block;
    width: 200px;
    font-size: 14px;
  }
  
  .select-input {
    position: relative;
    padding: 6px 24px 6px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    min-height: 36px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .select-input.disabled {
    background-color: #f5f7fa;
    cursor: not-allowed;
  }
  
  .select-input input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    cursor: pointer;
  }
  
  .select-input input:disabled {
    cursor: not-allowed;
  }
  
  .arrow-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s;
  }
  
  
  .clear-btn {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 4px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .dropdown-item {
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f5f7fa;
  }
  
  .dropdown-item.selected {
    color: #409eff;
    background-color: #f0f7ff;
  }
  
  .dropdown-item.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: #fff;
  }
  
  .loading-text,
  .no-data {
    padding: 8px 16px;
    color: #c0c4cc;
    text-align: center;
  }
  
  .selected-tag {
    display: inline-flex;
    align-items: center;
    margin: 2px;
    padding: 0 6px;
    background-color: #f0f2f5;
    border-radius: 3px;
  }
  
  .remove-tag {
    margin-left: 4px;
    cursor: pointer;
  }
  
  .remove-tag:hover {
    color: #409eff;
  }
  </style>