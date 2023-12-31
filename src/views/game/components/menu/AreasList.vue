<script setup>
import { useWebSocket } from "../../../../services/websocketService";
import AreasCountUsers from "./AreasCountUsers.vue";
import { onMounted, ref, watchEffect } from "vue";

const jwt = ref(localStorage.getItem("token"));
const areas = ref([]);
const { subscribe, sendMessage } = useWebSocket(jwt.value);

subscribe((data) => {
  if (data.key === "render-areas") {
    areas.value = data.areas;
  }
});

const goToArea = (area) => {
  sendMessage({
    key: "go-to-area",
    jwt: jwt.value,
    scenery_id: area.Id,
  });
};

</script>

<template>
  <div v-for="area in areas" :key="area.Id" class="scenery-container" :class="area.UserInArea ? 'active' : ''">
    <div class="w-100 d-flex justify-content-between" @click="goToArea(area)">
      <div>{{ area.Name }}</div>
      <AreasCountUsers :areaId="area.Id"/>
    </div>
  </div>
</template>

<style scoped>
.scenery-container {
  padding: 10px;
  background-color: #0474a3;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-bottom: 5px;
}
.scenery-container:hover {
  background-color: #0493c4;
}
.active {
  background-color: #0493c4;
}
</style>
