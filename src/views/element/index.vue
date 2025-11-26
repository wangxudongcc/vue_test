<template>
  <div>
    {{ value }}
    <a-select
      v-model="value"
      :labelInValue="true"
      @change="onChange"
      @autoClearSearchValue="true"
      mode="multiple"
      :optionFilterProp='label'
      :optionLabelProp='children'
      :showSearch = "true"
      :showArrow="false"
      placeholder="请选择????"
      :clearIcon="false"
      >
    <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled222
      </a-select-option>
    </a-select>
    <div class="box">
    <a href="##" @click="typeColor">张</a>
    <a href="##" @click="start">鑫</a>
    <a href="##" @click="open">旭</a>
    </div>
  </div>
</template>

<script>
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
export default {
  data() {
    return {
      buttonName: "保存",
      list: [],
      timer: null,
      value:
       [
        // {
        //   key: "13873678067",
        //   label: "张绥",
        //   value: "1821443870558384129",
        //   text: "张绥",
        //   departName: "四川帮安迪信息科技股份有限公司",
        //   departIds: "84c04d2f0df5483c9db889d41ff9725e",
        //   orgCode: "100105",
        //   id: "1821443870558384129",
        //   phone: "13873678067",
        // },
      ],
    };
  },

  props: {
    defaultDepartment: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    needDealPopup: {
      type: Boolean,
      default: true,
    },
    otherField: {
      type: String,
      default: "",
    },
  },
  created() {},
  mounted() {},
   computed: {
    filteredOptions() {
      return OPTIONS.filter(o => !this.selectedItems.includes(o));
    },
  },
  methods: {
     handleChange(selectedItems) {
      this.selectedItems = selectedItems;
    },
    typeColor() {
      let typeColorNumber = parseInt(Math.random() * 10);
      console.log(typeColorNumber,'typeColorNumber123');
      if (typeColorNumber < 2) {
        return "primary";
      } else if (typeColorNumber < 4) {
        return "warning";
      } else if (typeColorNumber < 6) {
        return "success";
      } else if (typeColorNumber < 8) {
        return "danger";
      } else if (typeColorNumber < 10) {
        return "info";
      }
    },
    className() {
      // console.log(parseInt(Math.random()*10))
      let typeColorNumber = parseInt(Math.random() * 10);
      if (typeColorNumber < 2) {
        return "el-icon-bicycle";
      } else if (typeColorNumber < 4) {
        return "el-icon-edit";
      } else if (typeColorNumber < 6) {
        return "el-icon-ship";
      } else if (typeColorNumber < 8) {
        return "el-icon-heavy-rain";
      } else if (typeColorNumber < 10) {
        return "el-icon-food";
      }
    },
    start() {
      for (let i = 0; i < 8; i++) {
        this.$set(this.list, i, {
          id: i,
          typeName: this.typeColor(),
          className: this.className(),
        });
      }
      this.timer = setInterval(() => {
        for (let i = 0; i < 8; i++) {
          this.$set(this.list, i, {
            id: i,
            typeName: this.typeColor(),
            className: this.className(),
          });
        }
      }, 12000);
    },
    stop() {
      clearInterval(this.timer);
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          // 使用Ant Design Vue的消息提示
          this.$message.info(`action: ${action}`);
        },
      });
    },
    onChange(value) {
      if (!this.value) {
        this.value = [];
      }
      if (this.multiple) {
        value.forEach((val) => {
          // 使用Object.prototype.hasOwnProperty.call()替代直接调用，避免潜在的原型污染问题
          if (!Object.prototype.hasOwnProperty.call(this.selectKeys, val.key)) {
            this.value.push(val);
          }
        });
      } else {
        this.value = value;
      }
      let param = [];
      if (this.value.length > 0) {
        param = JSON.parse(JSON.stringify(this.value));
        for (let i = 0; i < param.length; i++) {
          delete param[i].elm;
          delete param[i].isRootInsert;
        }
      }
      console.log(param);
      this.$emit("change", param);
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
}

.box :first-child {
  order: 2;
}
</style>
