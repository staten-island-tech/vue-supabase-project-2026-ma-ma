<template>
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

      <div class="flex justify-between">
        <PageLink to="register">New here? Register</PageLink>
        <PageLink to="reset">Forgot password?</PageLink>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  transitionGroup: "auth",
});
</script>

<style scoped></style>
