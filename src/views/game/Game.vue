<script setup>
import { onMounted } from "vue";

document.title = 'Game'
onMounted(() => {
  var flashvars = {
    sw1: "13247",
    sw2: "0",
    sw3: "0",
    sw4: "0",
    sw5: "0",
    lang: "esp",
    locale: "es_ES",
    ver: "1325245546",
    attr1: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDMxNTcwOTIsImV4cCI6MTcwMzE2MDY5MiwibmJmIjoxNzAzMTU3MDkyLCJqdGkiOiJYeVNmang1UjU4d0lQT2lKIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.8671XlwbjPou6r_vKIJOc3kjHQ6RopTfMuS1U8iWhBA",
    attr2: "b64a3ec4-216b-4851-afcf-b8855ffce09d"
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
