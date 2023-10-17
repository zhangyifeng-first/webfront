<template>
    <div class="logo" v-if="!setting.logoHidden">
        <img :src="setting.logo" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>

<script lang="ts" setup>
import setting from "@/setting"

</script>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    width: 100%;
    height: $base-menu-logo-height;
    color: #fff;
    padding: 10px;

    img {
        width: $base-menu-logo-height;
        height: $base-menu-logo-height;
    }

    p {
        margin-left: 10px;
        font-size: $base-menu-logo-font-size;
    }
}
</style>