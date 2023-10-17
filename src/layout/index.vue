<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ fold: layoutSettingStore.isExpand }">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <!-- 放置菜单 -->
                <el-menu :default-active="$route.path" :collapse="layoutSettingStore.isExpand">
                    <Menu :menus="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: layoutSettingStore.isExpand }">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{ fold: layoutSettingStore.isExpand }">
            <Main></Main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'
// 获取路由对象
import { useRoute } from 'vue-router'
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()
let $route = useRoute()
</script>
<script lang="ts">
export default {
    name: 'Layout'
}
</script>
<style lang="scss" scoped>
.layout_container {
    width: 100%;
    height: 100vh;


    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background-color;
        transition: all 0.4s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        top: 0;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        transition: all 0.4s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        left: $base-menu-width;
        top: $base-tabbar-height;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        padding: 20px;
        overflow: auto;
        transition: all 0.4s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>