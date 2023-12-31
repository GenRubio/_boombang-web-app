<script setup>
import AreasList from "./components/menu/AreasList.vue";
import { useWebSocket } from "../../services/websocketService";
import { onMounted, ref } from "vue";
document.title = "Game";

const socket = ref(null);
const jwt = ref(localStorage.getItem("token"));
const loading = ref(true);
const { subscribe } = useWebSocket(jwt.value);

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
    attr2: jwt.value,
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

  subscribe((data) => {
    if (data.key === "loading") {
      if (data.loading === true) {
        location.reload();
      } else {
        loading.value = data.loading;
      }
    }
  });
});
</script>

<template>
  <div v-if="loading" class="loading">Cargando...</div>
  <div class="d-flex">
    <div class="left-menu d-flex justify-content-start">
      <div class="left-menu__icons"></div>
      <div class="left-menu__items">
        <div class="left-menu__items-search"></div>
        <div class="scenery-list">
          <AreasList />
        </div>
      </div>
    </div>
    <div>
      <div class="flash-top"></div>
      <div id="bb_swf_container">
        <div id="flash_boombang"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;
  width: 1328px;
  height: 100%;
  z-index: 999;
  background-color: #043967;
}
.scenery-list {
  padding: 7px;
}
.left-menu__icons {
  width: 75px;
  height: 100vh;
  background-color: #043967;
}
.left-menu__items {
  width: calc(100% - 75px);
  height: 100vh;
  background-color: #045383;
}
.left-menu__items-search {
  height: 52px;
  border-bottom: 1px solid #043967;
}
.flash-top {
  height: 51px;
  background-color: #04689b;
}
.left-menu {
  width: 316px;
}
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
