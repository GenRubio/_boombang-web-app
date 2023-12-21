<script setup>
document.title = "Dashboard";
const { ipcRenderer } = require("electron");

const openGame = () => {
  ipcRenderer.send("open-window");
};
</script>

<template>
  <div>
    <button @click="openGame">Test</button>
  </div>
</template>

<style scoped></style>
