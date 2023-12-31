<script setup>
import { useWebSocket } from "../../../../services/websocketService";
import { onMounted, ref, watchEffect } from "vue";

const props = defineProps([
    'areaId'
]);

const jwt = ref(localStorage.getItem("token"));
const countUsers = ref(0);
const { subscribe, sendMessage } = useWebSocket(jwt.value);

subscribe((data) => {
  if (data.key === "render-areas-count-users") {
    if (data.areas.length === 0) {
      return;
    }
    data.areas.forEach((area) => {
      if (area.Id === props.areaId) {
        countUsers.value = area.Count;
      }
    });
  }
});
</script>

<template>
  <div>{{ countUsers }}</div>
</template>

<style scoped></style>
