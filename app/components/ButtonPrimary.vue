<template>
  <div>
    <button
      v-bind="$attrs"
      :class="[
        'p-5',
        'border-4 border-double border-primary-border bg-primary shadow-solid',
        'text-on-primary font-pixelify text-2xl',
        'transition-all duration-200',
        'hover:border-primary-hover hover:bg-primary-hover hover:text-on-primary-hover hover:shadow-solid-lg',
        'active:translate-y-1 active:shadow-none',
      ]"
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
