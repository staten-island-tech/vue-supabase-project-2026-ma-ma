<template>
  <DomainBackground class="absolute -z-10" />
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <div
      class="flex flex-col gap-5 p-10 w-full max-w-md border-double border-8 border-slate-400 ring-4 ring-slate-300 ring-inset bg-slate-100 shadow-xl"
    >
      <h2 class="text-xl font-medium text-slate-500">Sign In</h2>

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

<script setup lang="ts"></script>

<style scoped></style>

