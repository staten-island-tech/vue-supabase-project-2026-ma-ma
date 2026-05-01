<template>
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <Card>
      <h2 class="text-xl font-medium text-slate-500">Create a new account</h2>

      <TextInput
        label="Username"
        type="text"
        placeholder="Enter username"
        class="w-full"
      />

      <TextInput
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        class="w-full"
      />

      <TextInput
        label="Password"
        type="password"
        placeholder="••••••••••••"
        class="w-full"
      />

      <TextInput
        label="Confirm Password"
        type="password"
        placeholder="••••••••••••"
        class="w-full"
      />

      <ButtonPrimary label="Register" />

      <div class="flex justify-between">
        <PageLink to="login">Have an account? Sign in</PageLink>
        <PageLink to="privacy">Privacy Policy</PageLink>
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
