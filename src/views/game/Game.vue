<script setup>
import { onMounted, ref } from "vue";
document.title = 'Game';

const socket = ref(null);
const jwt = ref(localStorage.getItem("token"));

const connectToWebSocket = () => {
  socket.value = new WebSocket(import.meta.env.VITE_API_URL_WS);

  socket.value.onopen = () => {
    socket.value.send(JSON.stringify({
      "key": "set-websocket-user",
      "jwt": jwt.value,
    }));
  };

  socket.value.onmessage = (event) => {
    let data = JSON.parse(event.data);
    switch(data.key){
      case 'ser-in-scenery':
        console.log(data.test_1)
        break;
    }
  };

  socket.value.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.value.onclose = (event) => {
    console.log('WebSocket connection closed:', event);
  };
};

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
    attr1: jwt.value,
    attr2: jwt.value
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
  connectToWebSocket();
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
