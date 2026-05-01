<template>
  <div class="flex justify-center items-center p-32 w-screen h-screen">
    <Card>
      <h2 class="text-xl font-medium text-slate-500">Create a new account</h2>

      <form class="flex flex-col gap-5" @submit.prevent="register">
        <TextInput
          label="Username"
          type="text"
          placeholder="Enter username"
          class="w-full"
          v-model="username"
        />

        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
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

        <ButtonPrimary label="Register" type="submit" />

        <div class="flex justify-between">
          <PageLink to="login">Have an account? Sign in</PageLink>
          <PageLink to="privacy">Privacy Policy</PageLink>
        </div>
      </form>
    </Card>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

definePageMeta({
  layout: "auth",
  transitionGroup: "auth",
});

const username = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

async function register() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        display_name: username.value,
      },
    },
  });

  if (error) return console.log(error);

  console.log("Account registered successfully!");
  console.log(data);
}
</script>

<style scoped></style>
