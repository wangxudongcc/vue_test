    <!-- <template>
  <div class="box">
<div class="container">
      <div class="circle"></div>
      <sixsixsix :title="666" ref="sixsixsix"></sixsixsix>
      <button @sixsixsix="sixsixsix"></button>
      <internalRelations @sixsixsix="sixsixsix"></internalRelations>
      <callVsBind></callVsBind>
      <form1></form1>
      <br>
      <div>
        <num-add :num.sync="number" style="width: 500px;" ref="getzizujianvalue">
          <template>
            父组件：<el-input :value="number" disabled></el-input>
          </template>
        </num-add>
      </div>
    </div>
  </div>
</template> -->

<script>
import sixsixsix from './666.vue';
import internalRelations from '@/views/20221026/internalRelations.vue';
import callVsBind from '@/views/20221026/callVsBind.vue';
import form1 from '@/views/20221026/form.vue';
import numAdd from '@/views/20221026/numAdd.vue';
import mixin from './C'
import ScopedSlotChild from './ScopedSlotChild';
export default {
  render(createElement) {
    console.log(this.$slots, 'this.$slots---这里执行了render方法'); // 存在父组件的作用域插槽里的值
    const items = ['apple', 'bannana', 'orange', 'pear', 'grape'];
    return createElement('div', [createElement('h1', '水果列表'),
    createElement('h1', '水果列表2'),
    createElement(ScopedSlotChild, {
      props: {
        items: items,
      },
      scopedSlots: {
        default: (props) => {
          console.log(props, 'props---存在父组件的作用域插槽里的值')
          return createElement('div', `Fruit:${props.item}`)
        }
      },
    })
    ])
  },
  mixins: [mixin],
  data() {
    return {
      number: 0,
      number1: 1,
    }
  },
  components: {
    sixsixsix,
    internalRelations,
    callVsBind,
    form1,
    numAdd
  },
  created() {
    console.log('这是父组件的created生命周期-');
    this.sixsixsix(6)
  },
  mounted() {
    console.log('这是父组件的mounted生命周期');
    let a = [["name", "wang"], ["10"], ["age", "19", "12"], ["sex", "男"]];
    console.log(Object.fromEntries(a));
    console.log(Object.entries(a));
    console.log(this.$refs.getzizujianvalue, '9999999999');
    console.log(this.$root, 'this.$root')
  },
  methods: {
    sixsixsix(six) {
      console.log(this.$refs.sixsixsix, 'x1x1x1', six);
    },
    asdf(num) {
      console.log(num);
    }
  }
}</script>

<style scoped>
.box {
  /* position: fixed;
  top: 0; */
  width: 100%;
  height: 50px;
  background-image: radial-gradient(transparent 1px, #fff 2px);
  background-size: 9px 9px;
  backdrop-filter: blur(9) saturate(50%);
}

.container {
  padding-top: 40px;
}

.circle {
  height: 60px;
  background-color: red;
}
</style>
