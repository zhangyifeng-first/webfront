<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="fullName" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// 接受父组件传过来的参数
const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    defalut: '16px',
  },
})
let fullName = computed(() => props.prefix + props.name)
</script>

<style lang="scss" scoped></style>
