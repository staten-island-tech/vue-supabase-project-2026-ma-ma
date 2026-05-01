<template>
  <DomainBackground class="absolute -z-10" />
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <Card>
      <h2 class="text-xl font-medium text-slate-500">Log in to your account</h2>

      <TextInput
        label="Username"
        type="text"
        placeholder="Enter username"
        class="w-full"
      />

      <TextInput
        label="Password"
        type="password"
        placeholder="••••••••••••"
        class="w-full"
      />

      <ButtonPrimary label="Log In" />
    </Card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
