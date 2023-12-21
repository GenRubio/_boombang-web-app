<script setup>
import { ref } from "vue";
import http from "@/services/http.service";
import { useAuth } from "@/store/auth.store";

const auth = useAuth();

const userData = ref({
  username: "",
  email: "",
  password: "",
});

async function register() {
  try {
    const { data } = await http.post("/auth/local/register", userData.value);
  } catch (error) {
    console.log(error?.response?.data);
  }
}
</script>

<template>
  <form @submit.prevent="register">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">@</div>
      </div>
      <input
        v-model="userData.username"
        type="text"
        class="form-control"
        placeholder="Username"
      />
    </div>
    <div class="input-group mt-3">
      <div class="input-group-prepend">
        <div class="input-group-text">@</div>
      </div>
      <input
        v-model="userData.email"
        type="text"
        class="form-control"
        placeholder="Email"
      />
    </div>
    <div class="input-group mt-3">
      <div class="input-group-prepend">
        <div class="input-group-text">@</div>
      </div>
      <input
        v-model="userData.password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div class="d-grid gap-2 mt-3">
      <button type="submit" class="btn btn-blok btn-primary">Register</button>
    </div>
  </form>
</template>

<style scoped></style>
