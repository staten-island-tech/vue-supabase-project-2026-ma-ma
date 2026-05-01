<template>
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <Card>
      <h2 class="text-xl font-medium text-slate-500">Log in to your account</h2>

      <form class="flex flex-col gap-5" @submit.prevent="signIn">
        <TextInput
          label="Email"
          type="text"
          placeholder="Enter email"
          class="w-full"
          v-model="email"
        />

        <TextInput
          label="Password"
          type="password"
          placeholder="••••••••••••"
          class="w-full"
          v-model="password"
        />

        <ButtonPrimary label="Log In" type="submit" />

        <div class="flex justify-between">
          <PageLink to="register">New here? Register</PageLink>
          <PageLink to="reset">Forgot password?</PageLink>
        </div>
      </form>
    </Card>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const email = ref<string>("");
const password = ref<string>("");

definePageMeta({
  layout: "auth",
  transitionGroup: "auth",
});

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) return console.log(error);

  console.log("Logged in successfully!");
  console.log(data);
}
</script>

<style scoped></style>
