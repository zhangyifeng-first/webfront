<template>
    <el-button size="small" icon="Refresh" circle></el-button>
    <el-button size="small" icon="FullScreen" circle></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img src="../../../../../public/vite.svg" alt="" style="height: 24px;width: 24px; margin: 0 10px;">
    <el-dropdown>
        <span class="el-dropdown-link">
            Dropdown
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>


</script>
<script lang="ts">
export default {
    name: 'Setting'
}
</script>
<style lang="scss" scoped></style>