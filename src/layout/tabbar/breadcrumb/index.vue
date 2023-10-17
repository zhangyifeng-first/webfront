<template>
    <!-- 顶部左侧 -->
    <el-icon style="margin-right: 10px;" @click="expand">
        <component :is="layoutSettingStore.isExpand ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="margin:0 5px">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'

import useLayoutSettingStore from '@/store/modules/setting'
let layoutSettingStore = useLayoutSettingStore()
let $route = useRoute()
let expand = () => {
    layoutSettingStore.isExpand = !layoutSettingStore.isExpand
    console.log($route.matched);
}
</script>
<script lang="ts">
export default {
    name: 'Breadcrumb'
}
</script>
<style lang="scss" scoped></style>