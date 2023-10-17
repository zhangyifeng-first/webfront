<template>
    <template v-for="item in menus" :key="item.path" :index="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRouter">
                <el-icon v-if="item.meta.icon">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!-- 有子路由且只有一个 -->
        <template v-if="item.children && item.children.length === 1">
            <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path" @click="goRouter">
                <el-icon v-if="item.children[0].meta.icon">
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!-- 有子路由且不止有一个 -->
        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
                <el-icon v-if="item.meta.icon">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <Menu :menus="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
defineProps(['menus'])
let $router = useRouter()
const goRouter = (vc: any) => {
    $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped></style>