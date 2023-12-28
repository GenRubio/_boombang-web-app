<script setup>
import { ref } from "vue";
import http from "@/services/http.service";
import { useAuth } from "@/store/auth.store";
import router from "@/router";

const auth = useAuth();

if (auth.isAuthenticated) {
  router.push("/game");
}

const userData = ref({
  email: "",
  password: "",
});

async function login() {
  try {
    const { data } = await http.post("/auth/login", userData.value);
    auth.setToken(data.access_token);
    auth.setIsAuth(true);

    router.push("/game");
  } catch (error) {
    console.log(error?.response?.data);
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <div class="input-group">
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
      <button type="submit" class="btn btn-blok btn-primary">Login</button>
    </div>
  </form>
</template>

<style scoped></style>
