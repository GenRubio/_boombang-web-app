<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

document.title = "Dashboard";
const { ipcRenderer } = require("electron");

const router = useRouter();
const routeParams = ref(router.currentRoute.value.params);

const openGame = () => {

  const access_token = routeParams.value.access_token;
  const socket_token = routeParams.value.socket_token;


  console.log("TOKEN EN DASHBOARD",access_token);
  console.log("Socket token en dashboard",socket_token)


  router.push({
    name: 'Game',
    params: {
      access_token: access_token,
      socket_token: socket_token
    }
  });
};
</script>

<template>
  <div>
    <button @click="openGame">Test</button>
  </div>
</template>

<style scoped></style>
