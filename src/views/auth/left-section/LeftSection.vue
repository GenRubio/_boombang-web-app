<script setup>
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const isLogin = ref(true);

const changeForm = () => {
  isLogin.value = !isLogin.value;
};

</script>

<template>
  <div class="left-menu">
    <button class="btn btn-primary mb-3" @click="changeForm">Change</button>
    <LoginForm v-if="isLogin" />
    <RegisterForm v-else />
  </div>
</template>

<style scoped>
.left-menu {
  border: 1px solid black;
  height: 100vh;
  width: 350px;
  padding: 15px;
}
</style>
