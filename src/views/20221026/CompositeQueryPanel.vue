    <template>
      <div>
        <el-container>
          <el-header style="height: 100%; border: 1px solid olive;">
            <claim-query-form></claim-query-form>
          </el-header>
          <el-main>
            <el-row>
              <el-col :span="12"><num-add :num.sync="number" style="width: 500px;" ref="getzizujianvalue"> <template>
                    父组件：<el-input :value="number" disabled></el-input>
                  </template>
                </num-add>
              </el-col>
              <el-col :span="6" style="border: 1px dashed yellowgreen">
                <RandomDotLineComponent v-if="number" :title="666" ref="sixsixsix"></RandomDotLineComponent>
                <el-button @click="number = number ? 0 : 1">点我{{ number ? '消失' : '显示' }} </el-button>
              </el-col>
              <el-col :span="6">
                <callVsBind></callVsBind>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </div>
    </template>

<script>
import RandomDotLineComponent from './RandomDotLineComponent.vue';

import callVsBind from '@/views/20221026/callVsBind.vue';
import ClaimQueryForm from '@/views/20221026/ClaimQueryForm.vue';
import numAdd from '@/views/20221026/numAdd.vue';

export default {

  data() {
    return {
      number: 1,
      number1: 1,
    }
  },
  components: {
    RandomDotLineComponent,
    callVsBind,
    ClaimQueryForm,
    numAdd
  },
  created() {
    console.log('这是父组件的created生命周期-');
    this.sixsixsix()
  },
  mounted() {
    console.log('这是父组件的mounted生命周期');
    let a = [["name", "wang"], ["10"], ["age", "19", "12"], ["sex", "男"]];
    console.log(Object.fromEntries(a), 'Object.fromEntries');
    console.log(Object.entries(a), 'Object.entries');
    console.log(this.$refs.getzizujianvalue, 'this.$refs.getzizujianvalue');
    console.log(this.$root, 'this.$root')
  },
  beforeUpdate() {
    console.log('这是父组件的beforeUpdate生命周期');
  },
  updated() {
    console.log('这是父组件的updated生命周期');
  },
  methods: {
    sixsixsix() {
      console.log('这是父组件的sixsixsix方法');
      this.$emit('sixsixsix', '这是父组件的emit');
    },
    clickSix(x) {
      console.log('这是往子组件传递的click方法', x);
    },
    asdf(num) {
      console.log(num);
    },
    toggleNumber() {
      this.number = !this.number; // 切换显示和不显示
      if (this.number === false) {
        this.number = 0
      } else {
        this.number = 1
      }
    }
  }
}</script>

<style scoped>
.container {
  padding-top: 40px;
  border: 1px solid pink;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;

  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
