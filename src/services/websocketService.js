import { ref } from 'vue';

const socket = ref(null);
const subscribers = [];

export function useWebSocket(jwtToken) {
  if (socket.value === null) {
    socket.value = new WebSocket(import.meta.env.VITE_API_URL_WS);

    socket.value.onopen = () => {
      sendMessage({
        key: "set-websocket-user",
        jwt: jwtToken,
      });
    };

    socket.value.onmessage = (event) => {
      const data = JSON.parse(event.data);
      subscribers.forEach((callback) => callback(data));
    };

    socket.value.onerror = (error) => {
      location.reload();
    };

    socket.value.onclose = (event) => {
      location.reload();
    };
  }

  function sendMessage(message) {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(JSON.stringify(message));
    }
  }

  function subscribe(callback) {
    subscribers.push(callback);
    return () => {
      const index = subscribers.indexOf(callback);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }

  return { sendMessage, subscribe };
}
