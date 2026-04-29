<template>
  <div class="login-wrapper">
    <div class="bg-slash left" />
    <div class="bg-slash right" />

    <div class="login-card">
      <div class="login-header">
        <div class="logo-mark">MMK</div>
        <p>Sign in to continue</p>
      </div>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="field" :class="{ error: errors.username }">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            placeholder="your_username"
            autocomplete="username"
            @blur="validateUsername"
          />
          <span v-if="errors.username" class="error-msg">{{ errors.username }}</span>
        </div>

        <div class="field" :class="{ error: errors.password }">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              autocomplete="current-password"
              @blur="validatePassword"
            />
            <button
              type="button"
              class="toggle-pw"
              @click="showPassword = !showPassword"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
        </div>

        <div class="form-footer">
          <label class="remember-me">
            <input type="checkbox" v-model="form.rememberMe" />
            <span>Remember me</span>
          </label>
          <a href="/forgot-password" class="forgot-link">Forgot password?</a>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading">
          <span v-if="isLoading" class="spinner" />
          <span>{{ isLoading ? 'Signing in…' : 'Sign in' }}</span>
        </button>

        <p v-if="apiError" class="api-error">{{ apiError }}</p>
      </form>

      <p class="signup-cta">
        No account? <a href="/signup">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface LoginForm {
  username: string
  password: string
  rememberMe: boolean
}

interface FormErrors {
  username: string
  password: string
}

interface LoginResponse {
  message?: string
}

const form = reactive<LoginForm>({ username: '', password: '', rememberMe: false })
const errors = reactive<FormErrors>({ username: '', password: '' })
const showPassword = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const apiError = ref<string>('')

function validateUsername(): void {
  if (!form.username) {
    errors.username = 'Username is required.'
  } else if (form.username.length < 3) {
    errors.username = 'Username must be at least 3 characters.'
  } else {
    errors.username = ''
  }
}

function validatePassword(): void {
  if (!form.password) {
    errors.password = 'Password is required.'
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  } else {
    errors.password = ''
  }
}

function isFormValid(): boolean {
  validateUsername()
  validatePassword()
  return !errors.username && !errors.password
}

async function handleSubmit(): Promise<void> {
  apiError.value = ''
  if (!isFormValid()) return

  isLoading.value = true
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        rememberMe: form.rememberMe,
      }),
    })

    if (!res.ok) {
      const data: LoginResponse = await res.json().catch(() => ({}))
      throw new Error(data.message ?? 'Invalid username or password.')
    }

    // router.push('/dashboard')
  } catch (err) {
    apiError.value = err instanceof Error ? err.message : 'Something went wrong.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.bg-slash {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-slash.left {
  background: #c8001a;
  clip-path: polygon(0 0, 52% 0, 38% 100%, 0 100%);
  opacity: 0.18;
}

.bg-slash.right {
  background: #0038c8;
  clip-path: polygon(62% 0, 100% 0, 100% 100%, 48% 100%);
  opacity: 0.18;
}

.login-card {
  position: relative;
  z-index: 1;
  background: rgba(10, 10, 18, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 2.75rem 2.25rem;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(18px);
  box-shadow:
    0 0 0 1px rgba(200, 0, 26, 0.15),
    0 0 60px rgba(200, 0, 26, 0.07),
    0 0 60px rgba(0, 56, 200, 0.07);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo-mark {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(110deg, #ff2244 30%, #4477ff 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.6rem;
  display: block;
}

.login-header p {
  color: rgba(255,255,255,0.4);
  margin: 0;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  color: #fff;
  background: rgba(255,255,255,0.05);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s, background 0.15s;
  font-family: inherit;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: rgba(255, 34, 68, 0.6);
  background: rgba(255,255,255,0.08);
}

input::placeholder { color: rgba(255,255,255,0.2); }

.field.error input { border-color: rgba(255, 60, 60, 0.7); }

.error-msg {
  font-size: 0.78rem;
  color: #ff6060;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper input { padding-right: 2.5rem; }

.toggle-pw {
  position: absolute;
  right: 0.6rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  line-height: 1;
  opacity: 0.5;
}

.toggle-pw:hover { opacity: 1; }

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
}

.forgot-link {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.35);
  text-decoration: none;
  transition: color 0.15s;
}

.forgot-link:hover { color: #ff4466; }

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(110deg, #c8001a, #0038c8);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.1s;
  font-family: inherit;
  margin-top: 0.25rem;
}

.submit-btn:hover:not(:disabled) { opacity: 0.88; }
.submit-btn:active:not(:disabled) { transform: scale(0.98); }
.submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
}

@keyframes spin { to { transform: rotate(360deg); } }

.api-error {
  text-align: center;
  font-size: 0.82rem;
  color: #ff8080;
  margin: 0;
  background: rgba(200, 0, 26, 0.12);
  border: 1px solid rgba(200, 0, 26, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
}

.signup-cta {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.3);
  margin: 1.5rem 0 0;
}

.signup-cta a {
  color: #7799ff;
  font-weight: 600;
  text-decoration: none;
}

.signup-cta a:hover { text-decoration: underline; }
</style>