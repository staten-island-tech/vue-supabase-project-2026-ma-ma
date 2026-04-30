<template>
  <div>
    <button
      v-bind="$attrs"
      :class="[
        'p-5',
        'border-4 border-double border-secondary-border bg-secondary shadow-transparent-md',
        'text-2xl text-secondary-foreground',
        'transition-all duration-150',
        'hover:border-secondary-hover hover:bg-secondary-hover hover:text-secondary-hover-foreground hover:shadow-transparent-lg',
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
