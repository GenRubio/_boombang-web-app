<script setup>
import { onMounted,ref } from "vue";

const access_token = ref("");
const socket_token = ref("");

document.title = 'Game'
onMounted(() => {

  access_token.value = $route.params.access_token;
  socket_token.value = $route.params.socket_token;

  var flashvars = {
    sw1: "13247",
    sw2: "0",
    sw3: "0",
    sw4: "0",
    sw5: "0",
    lang: "esp",
    locale: "es_ES",
    ver: "1325245546",
    attr1: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDM2NDEzODYsImV4cCI6MTcwMzY0NDk4NiwibmJmIjoxNzAzNjQxMzg2LCJqdGkiOiJva0VnRm5MeGZjSTEzWkF6Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.-E8-x3Hre-9dfFcy0hdwB0ewYgPUTxB9wMhzFCViphs",
    attr2: "a8dda36b-5f79-4ffe-a317-7053be5cf614"
  };
  var params = {
    play: "true",
    loop: "false",
    quality: "high",
    allowscriptaccess: "always",
    allowFullScreen: "true",
    bgcolor: "#0099cc",
  };
  var attributes = {
    id: "flash_boombang",
  };
  swfobject.embedSWF(
    "/static14/flash_esp/BoomBangLoader.swf",
    "flash_boombang",
    "100%",
    "100%",
    "9.0.115",
    "./http://boombang.tv/swfobject/expressInstall.swf/",
    flashvars,
    params,
    attributes
  );
});

</script>

<template>
  <div id="bb_swf_container">
    <div id="flash_boombang"></div>
  </div>
</template>

<style scoped>
#bb_swf_container {
  width: 1012px;
  height: 657px;
}
#flash_boombang {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9;
  text-align: center;
}
</style>
