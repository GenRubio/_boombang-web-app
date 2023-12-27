<script setup>
import { ref } from "vue";
import http from "@/services/http.service";
import { useAuth } from "../../../../store/auth.store";
import router from '@/router';

const auth = useAuth();

const userData = ref({
  email: "",
  password: "",
});

async function login() {
  try {
    const response = await http.post("http://localhost:8000/api/auth/login", userData.value);
    const data = response.data;

    console.log('Response data:', data); // Add this line to inspect the structure

    auth.setToken(data.access_token);
    auth.setUser(data); 
    auth.setIsAuth(true);

;
    router.push({
      name: 'Game',
      params: {
        access_token: auth.getToken(),
        socket_token: auth.getUser().socket_token,
      },
    });
  } catch (error) {
    console.log('Error:', error);
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
