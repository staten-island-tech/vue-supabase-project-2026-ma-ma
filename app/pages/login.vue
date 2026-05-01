<template>
<div class="flex justify-center items-center p-32 w-screen h-screen">
  <LoginBackground/>
  <div class="flex flex-col gap-5 p-10 w-full max-w-md rounded bg-white/5 backdrop-blur-sm border border-white/10">
    
    <h2 class="text-xl font-medium text-white">Sign in</h2>

    <div class="flex flex-col gap-1.5">
      <label for="Username" class="text-sm text-white/50">Email</label>
      <TextInput id="Username" type="text" placeholder="tungtungtungsahur" class="w-full" />
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="password" class="text-sm text-white/50">Password</label>
      <TextInput id="password" type="password" placeholder="••••••••" class="w-full" />
    </div>

    <div class="flex gap-2">
      <ButtonPrimary label="Sign in" class="flex-1 text-sm py-1.5" />
      <ButtonSecondary label="Forgot password" class="flex-1 text-sm py-1.5" />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import LoginBackground from '~/components/LoginBackground.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';
import ButtonSecondary from '~/components/ButtonSecondary.vue';
import TextInput from '~/components/TextInput.vue';
</script>

<style scoped></style>