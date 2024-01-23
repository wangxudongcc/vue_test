<template>
    <div
        class="app-wrapper"
    >
        <div
            style='padding-top: 56px;'
            class="layout-right"
            :class="sideBarSpread ? 'openSidebar' : 'hideSidebar'"
        >
            <div
                id="main-down"
                class="main-down"
                :class="extendsFlag ? 'extends-flag' : ''"
                :style="isqiankun ? 'padding-right: 68px !important' : ''"
            >
                <app-main />
            </div>
        </div>
    </div>
</template>

<script>
import ResizeMixin from "./mixin/ResizeHandler";
import Logo from "@/assets/PICC.png";
import { mapGetters } from "vuex";
import { AppMain } from "./components";
import AppHeader from "./components/AppHeader";
import AppToolbar from "./components/AppToolbar";
import AppSidebar from "./components/AppSidebar";
import settings from "@/settings";

export default {
    name: "Layout",
    components: {
        AppMain,
        AppHeader,
        AppToolbar,
        AppSidebar
    },
    mixins: [ResizeMixin],
    data() {
        return {
            isTagsView: settings.isTagsBar,
            Logo: Logo,
            mouseInAsideBar: false,
            isqiankun: window.__POWERED_BY_QIANKUN__ ? true : false,
        };
    },
    computed: {
        ...mapGetters(["currentPath", "sideBarSpread"]),
        toolbarOpened() {
            return this.$store.state.app.toolbarOpened;
        },
        extendsFlag() {
            return !this.isHomePath && this.toolbarOpened;
        },
        isHomePath() {
            return this.$route.path === settings.homePath;
        },
        pathAndToolbar() {
            return { isHomePath: this.isHomePath, toolbarOpened: this.toolbarOpened };
        }
    },
    watch: {
        pathAndToolbar: {
            immediate: true,
            handler(val) {
                const { isHomePath, toolbarOpened } = val;
                if (isHomePath) {
                    if (toolbarOpened) {
                        this.$store.dispatch("app/setSideBarSpread", false);
                    } else {
                        this.$store.dispatch("app/setSideBarSpread", true);
                    }
                } else {
                    this.$store.dispatch("app/setSideBarSpread", this.mouseInAsideBar);
                }
            }
        }
    },
    mounted() {
        // 解决popper显示的时候会被固定的头覆盖掉
        // 所以在滚动事件中动态给头部header加大z-index,除遮罩外
        window.addEventListener("scroll", () => {
            if (document.body.lastElementChild.classList.contains("el-popper")) {
                const lastChild = document.body.lastElementChild;
                //
                if (!lastChild.classList.contains("picc-nav-dropdown-menu") && !lastChild.classList.contains("picc-popover-message")) {
                    document.querySelector(".main-up").style.zIndex = parseInt(lastChild.style.zIndex) + 1;
                }
            } else {
            }
        });
    },
    methods: {
        spreadSidebar() {
            this.mouseInAsideBar = true;
            this.$store.dispatch("app/setSideBarSpread", true);
        },
        shrinkSidebar() {
            this.mouseInAsideBar = false;
            if (!this.isHomePath) {
                this.$store.dispatch("app/setSideBarSpread", false);
            } else {
                this.$store.dispatch("app/setSideBarSpread", !this.toolbarOpened);
            }
        },
        handleClickOutside() {
            this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
        },
        heightScreen() {
            return window.innerHeight - 90 + "px";
        },
        heightFullScreen() {
            return window.innerHeight + "px";
        }
    }
};
</script>

<style lang="scss">

.extends-flag {
    transition: padding-right 0.2s ease-in;
    padding-right: 360px !important;
}
.main-down {
    transition: padding-right 0.2s ease-in;
    height: 100%;
    padding-top: 90px;
    padding-right: 2px !important;
    position: fixed;
}
.openSidebar {
    width: calc(100vw - 56px);
   
}
.hideSidebar {
    width: calc(100vw - 56px);
   
}
</style>
<style lang="scss" scoped>
.app-wrapper.qiankun,
.app-wrapper.qiankun .app-main {
    background: none !important;
}
#containerBody::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
/*正常情况下滑块的样式*/

#containerBody::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 10px;
    -webkit-box-shadow: inset 1px 1px 0 #dddddd;
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/

#containerBody:hover::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 10px;
    -webkit-box-shadow: inset 1px 1px 0 #dddddd;
}
/*鼠标悬浮在滑块上时滑块的样式*/

#containerBody::-webkit-scrollbar-thumb:hover {
    background-color: #dddddd;
    -webkit-box-shadow: inset 1px 1px 0 #dddddd;
}
/*正常时候的主干部分*/

#containerBody::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #dddddd;
    background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/

#containerBody::-webkit-scrollbar-track:hover {
    -webkit-box-shadow: inset 0 0 6px #dddddd;
    background-color: #ffffff;
}
</style>
