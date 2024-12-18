<template>
  <div style="height: 100vh; width: 100vw">
    <router-view />
    <div v-if="$route.path == '/'" style="height: 100%">
      <div class="headers"></div>
      <div class="appMain">
        <div class="leftContent"></div>
        <div class="middleContent">
          <!-- <el-table :data="list_menu" style="width: 50%">
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="text"
                  :class="scope.row[0].icon"
                  style="font-size: 18px"
                  @click="scope.row[0].callback"
                >
                  <svg-icon
                    v-if="scope.row[0].icon ? false : true"
                    :icon-class="scope.row[0].icon ? '' : scope.row[0].svg"
                    style="
                      vertical-align: sub;
                      min-height: auto;
                      min-width: none;
                    "
                  />&nbsp;{{ scope.row[0].name }}</el-button
                >
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="text"
                  :class="scope.row[1].icon"
                  style="font-size: 18px"
                  @click="scope.row[1].callback"
                >
                  <svg-icon
                    v-if="scope.row[1].icon ? false : true"
                    :icon-class="scope.row[1].icon ? '' : scope.row[1].svg"
                    style="
                      vertical-align: sub;
                      min-height: auto;
                      min-width: none;
                    "
                  />&nbsp;{{ scope.row[1].name }}</el-button
                >
              </template>
            </el-table-column>
          </el-table> -->
          <table style="width: 100%;table-layout: fixed;">
            <!-- <thead>
              <tr>
                <th>1</th>
                <th>2</th>
              </tr>
            </thead> -->
            <tbody style="width: 100%;">
              <tr v-for="(item, index) in list_menu" :key="index"  style="width: 100%;">
                <td v-for="(it, ind) in col" :key="it" :style="'width: ' + 100 / col + '%;'">
                  <!-- {{ it }},
                  {{ ind }} -->
                  <el-button
                    v-if="item[ind]"
                    type="text"
                    :class="item[ind].icon"
                    style="font-size: 18px"
                    @click="item[ind].callback"
                  >
                    <svg-icon
                      v-if="item[ind].icon ? false : true"
                      :icon-class="item[ind].icon ? '' : item[ind].svg"
                      style="
                        vertical-align: sub;
                        min-height: auto;
                        min-width: none;
                      "
                    />&nbsp;{{ item[ind].name }}</el-button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
        <div class="rightContent"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      toolsConf: [
        {
          name: "练习",
          icon: "el-icon-notebook-1",
          callback: () => {
            this.toToolDeatail("practise");
          },
        },
        {
          name: "ELE",
          icon: "el-icon-eleme",
          callback: () => {
            this.toToolDeatail("element");
          },
        },
        {
          name: "jQuery",
          svg: "jquery",
          callback: () => {
            this.toToolDeatail("jQuery");
          },
        },
        {
          name: "zhangxinxuWeb",
          svg: "fish",
          callback: () => {
            this.toToolDeatail("zhangxinxuWeb");
          },
        },
        {
          name: "jsProNote",
          svg: "javascript",
          callback: () => {
            this.toToolDeatail("jsProNote");
          },
        },
        {
          name: "20191226",
          icon: "el-icon-date",
          callback: () => {
            this.toToolDeatail("20191226");
          },
        },
        {
          name: "20221026",
          icon: "el-icon-date",
          callback: () => {
            this.toToolDeatail("20221026");
          },
        },
      ],
      col: 2,
    };
  },
  computed: {
    list_menu() {
      let list = [];
      // for (let i = 0; i < this.toolsConf.length; i += this.col) {
      //   list.push([]);
      //   for (let j = 0; this.toolsConf[i + j] && j < this.col; j++) {
      //     list[list.length - 1].push(this.toolsConf[i + j]);
      //   }
      // }

      // this.toolsConf.forEach((item, index) => {
      //   if (index % this.col == 0) list.push([]);
      //   list[list.length - 1].push(item);
      // });


      let len = Math.ceil(this.toolsConf.length / this.col);
      for (let i = 0; i < len; i++) {
        list.push(this.toolsConf.slice(i * this.col, (i + 1) * this.col));
      }

      
      // let list0 = [];
      // Object.assign(list0, this.toolsConf);
      // while(list0.length) list.push(list0.splice(0, this.col));
      return list;
    }
  },
  methods: {
    toToolDeatail(type) {
      let query = {
        openIsClose: this.$route.query.openIsClose,
      };
      let path = "";
      // 练习
      if (type == "practise") {
        path = "/practise/practiseMainEdit";
      }
      // ele
      if (type == "element") {
        path = "/element/index";
      }
      if (type == "jQuery") {
        path = "/jQuery/parent";
      }
      if (type == "zhangxinxuWeb") {
        path = "/zhangxinxuWeb/overlappingPosition";
      }
      if (type == "jsProNote") {
        path = "/jsProNote/index";
      }
      if (type == "20191226") {
        path = "/20191226/index";
      }
      if (type == "20221026") {
        path = "/20221026/empty";
      }
      const routeUrl = this.$router.resolve({
        path: path,
        query: query,
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
.headers {
  width: 100%;
  height: 20%;
}
.appMain {
  width: 100%;
  height: 80%;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  box-sizing: border-box;
  & > div {
    box-sizing: border-box;
  }
  .leftContent {
    width: 25%;
    height: 100%;
    border: 1px solid blue;
    overflow: hidden;
  }
  .middleContent {
    width: 50%;
    height: 100%;
    border: 1px solid blue;
    float: left;
  }
}
::v-deep .el-button {
  width: 100%;
  white-space: normal;
  text-align: left;
  &:hover {
    background-color: #00000007;
  }
  span {
    display: inline-block;
    word-break: break-all;
  }
}
</style>
