<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.auth-enter-active,
.auth-leave-active {
  transition: all 0.2s ease;
}

.auth-enter-from {
  opacity: 0;
  filter: blur(8px);
  transform: scale(0.95);
}

.auth-leave-to {
  opacity: 0;
  filter: blur(8px);
  transform: scale(1.05);
}
</style>
