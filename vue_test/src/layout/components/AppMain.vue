<template>
    <section>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :key="key" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="key" />
        <div id="container"></div>
    </section>
</template>

<script>
export default {
    name: "AppMain",
    data() {
        return {
            mainBgColor: '',
           
        };
    },
    computed: {
        cachedViews() {
            return this.$store.state.tagsView.cachedViews;
        },
        key() {
            return this.$route.fullPath;
        }
    },
    watch: {
        $route: function (to, from) {
            console.log(from,'from')
            if (to.meta.bgClass) {
                this.mainBgColor = "grey";
            } else {
                this.mainBgColor = null;
            }
        }
    },
    mounted() {
        if (this.$route.meta.bgClass) {
            this.mainBgColor = "grey";
        }
    }
};
</script>

