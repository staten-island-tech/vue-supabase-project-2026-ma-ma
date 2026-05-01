<template>
  <div class="flex flex-col gap-2">
    <label class="text-input-label">{{ props.label }}</label>
    <input
      class="p-2 outline-none border-4 border-double border-input-border bg-input text-md text-input-foreground transition-all duration-150 focus:border-input-focus-border focus:bg-input-focus focus:text-input-focus-foreground focus:placeholder:text-input-focus-placeholder placeholder:text-input-placeholder"
      v-bind="$attrs"
      v-model="model"
    >
    </input>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();

const model = defineModel<string>();
</script>

<style scoped></style>
