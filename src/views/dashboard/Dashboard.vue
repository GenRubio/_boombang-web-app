<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

document.title = "Dashboard";
const { ipcRenderer } = require("electron");

onMounted(() => {
  const access_token = $route.params.access_token;
  const socket_token = $route.params.socket_token;
});

const openGame = () => {
  const router = useRouter();
  const access_token = $route.params.access_token;
  const socket_token = $route.params.socket_token;

  router.push({
    name: 'game',
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
