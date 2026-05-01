<template>
  <div class="flex">
    <button
      v-bind="$attrs"
      :class="[
        'w-full p-2',
        'border-4 border-double border-primary-border bg-primary shadow-transparent-md',
        'text-md text-primary-foreground',
        'transition-all duration-150',
        'hover:border-primary-hover hover:bg-primary-hover hover:text-primary-hover-foreground hover:shadow-transparent-lg',
        'active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
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
