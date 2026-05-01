<template>
  <div class="flex justify-center items-center p-32 w-screen h-screen bg-black">
    <!-- Login card -->
    <div
      class="flex justify-center items-center gap-5 p-16 w-full max-w-xl h-full bg-white"
    >
      <ButtonSecondary label="secondary" class="w-full" />
      <ButtonPrimary label="primary" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginBackground from '~/components/LoginBackground.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';
</script>

<style scoped></style>