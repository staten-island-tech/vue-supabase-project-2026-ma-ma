<template>
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <LoginBackground />
    <div
      class="flex flex-col gap-5 p-10 w-full max-w-md rounded bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <h2 class="text-xl font-medium text-white">Sign in</h2>

      <TextInput
        label="Username"
        type="text"
        placeholder="Enter username"
        class="w-full"
      />

      <TextInput
        label="Password"
        type="password"
        placeholder="••••••••"
        class="w-full"
      />

      <div class="flex flex-row-reverse gap-5">
        <ButtonPrimary label="Sign In" class="flex-1" />
        <ButtonSecondary label="Register" class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginBackground from "~/components/LoginBackground.vue";
import ButtonPrimary from "~/components/ButtonPrimary.vue";
import ButtonSecondary from "~/components/ButtonSecondary.vue";
import TextInput from "~/components/TextInput.vue";
</script>

<style scoped></style>

