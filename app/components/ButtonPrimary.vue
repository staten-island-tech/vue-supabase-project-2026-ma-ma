<template>
  <div>
    <button
      v-bind="$attrs"
      class="p-5 border-4 border-double border-primary rounded bg-white text-primary font-pixelify text-2xl shadow-solid transition-all duration-200 hover:bg-primary-hover hover:text-on-primary hover:shadow-solid-lg active:translate-y-1 active:shadow-none"
    >
      {{ props.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<style scoped></style>
