<template>
  <div>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      v-bind="$attrs"
      :class="[
        'p-5',
        'outline-none',
        'border-4 border-double border-input-border bg-input',
        'text-xl text-input-foreground',
        'transition-all duration-150',
        'focus:border-input-focus-border focus:bg-input-focus focus:text-input-focus-foreground',
        'placeholder:text-input-placeholder',
      ]"
    >
    </input>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    type: string;
    placeholder: string;
  }>()
</script>

<style scoped></style>
