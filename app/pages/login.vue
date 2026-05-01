<template>
<div class="flex justify-center items-center p-32 w-screen h-screen">
  <LoginBackground/>
  <div class="flex flex-col gap-5 p-10 w-full max-w-md rounded bg-white/5 backdrop-blur-sm border border-white/10">
    
    <h2 class="text-xl font-medium text-white">Sign in</h2>

    <div class="flex flex-col gap-1.5">
      <label for="Username" class="text-sm text-white/50">Email</label>
      <input id="Username" type="text" placeholder="tungtungtungsahur"
        class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder:text-white/20" />
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="password" class="text-sm text-white/50">Password</label>
      <input id="password" type="password" placeholder="••••••••"
        class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder:text-white/20" />
    </div>

    <ButtonPrimary label="Sign in" class="w-full" />
    <ButtonSecondary label="I forgot the password because I am a bum" class="w-full" />
  </div>
</div>
</template>

<script setup lang="ts">
import LoginBackground from '~/components/LoginBackground.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';
</script>

<style scoped></style>