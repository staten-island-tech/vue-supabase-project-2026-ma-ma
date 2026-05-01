<template>
  <DomainBackground class="absolute -z-10" />
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <Card>
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
    </Card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

