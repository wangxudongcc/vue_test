<template>
  <div style="height: 100vh; width: 100vw">
    <router-view />
    <div v-if="$route.path == '/'" style="height: 100%">
      <div class="headers"></div>
      <div class="appMain">
        <div class="leftContent"></div>
        <div class="middleContent">
          <el-table :data="toolsConf" style="width: 50%">
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="text"
                  :class="scope.row.icon"
                  style="font-size: 18px"
                  @click="scope.row.callback"
                >
                  <svg-icon
                    v-if="scope.row.icon ? false : true"
                    :icon-class="scope.row.icon ? '' : scope.row.svg"
                    style="
                      vertical-align: sub;
                      min-height: auto;
                      min-width: none;
                    "
                  />&nbsp;{{ scope.row.name }}</el-button
                >
              </template>
            </el-table-column>
          </el-table>
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
          name: "ruanyifeng",
          svg: "ryf",
          callback: () => {
            this.toToolDeatail("ruanyifeng");
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
    };
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
      if (type == "ruanyifeng") {
        path = "/ruanyifeng/index";
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
</style>
