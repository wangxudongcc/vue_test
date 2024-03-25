<template>
    <div>
        <div>
            <div id="main-down" class="main-down">
                <app-main />
            </div>
        </div>
    </div>
</template>

<script>
// import ResizeMixin from "./mixin/ResizeHandler";
import Logo from "@/assets/logo.png";
import AppMain from "./components/AppMain.vue";
// import settings from "@/settings";

export default {
    name: "Layout",
    components: {
        AppMain,

    },
    // mixins: [ResizeMixin],
    data() {
        return {
            Logo: Logo,
            mouseInAsideBar: false,
        };
    },
    computed: {
        // ...mapGetters(["currentPath", "sideBarSpread"]),
        // toolbarOpened() {
        //     return this.$store.state.app.toolbarOpened;
        // },
        // extendsFlag() {
        //     return !this.isHomePath && this.toolbarOpened;
        // },
        // isHomePath() {
        //     return this.$route.path === settings.homePath;
        // },
        // pathAndToolbar() {
        //     return { isHomePath: this.isHomePath, toolbarOpened: this.toolbarOpened };
        // }
    },
    watch: {
        // pathAndToolbar: {
        //     immediate: true,
        //     handler(val) {
        //         const { isHomePath, toolbarOpened } = val;
        //         if (isHomePath) {
        //             if (toolbarOpened) {
        //                 this.$store.dispatch("app/setSideBarSpread", false);
        //             } else {
        //                 this.$store.dispatch("app/setSideBarSpread", true);
        //             }
        //         } else {
        //             this.$store.dispatch("app/setSideBarSpread", this.mouseInAsideBar);
        //         }
        //     }
        // }
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
            }
        });
    },
    methods: {
        // spreadSidebar() {
        //     this.mouseInAsideBar = true;
        //     this.$store.dispatch("app/setSideBarSpread", true);
        // },
        // shrinkSidebar() {
        //     this.mouseInAsideBar = false;
        //     if (!this.isHomePath) {
        //         this.$store.dispatch("app/setSideBarSpread", false);
        //     } else {
        //         this.$store.dispatch("app/setSideBarSpread", !this.toolbarOpened);
        //     }
        // },
        // handleClickOutside() {
        //     this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
        // },
        // heightScreen() {
        //     return window.innerHeight - 90 + "px";
        // },
        // heightFullScreen() {
        //     return window.innerHeight + "px";
        // }
    }
};
</script>

<style lang="scss">
.main-down {
    transition: padding-right 0.2s ease-in;
    height: 100%;
    padding-top: 90px;
}
</style>