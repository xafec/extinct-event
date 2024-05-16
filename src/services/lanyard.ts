import WebSocket from "ws";
import type { Lanyard } from "../interfaces/lanyard.model";

const webSocketUrl = "wss://api.lanyard.rest/socket";
const discordId = import.meta.env.DISCORD_ID;

const dataInitial = {
  op: 2,
  d: {
    subscribe_to_id: discordId,
  },
};

let heartbeat_interval: number = 30000;
let heartbeat: NodeJS.Timeout;

const lanyardData: Lanyard[] = [];

const setupWebSocket = (): void => {
  const socket = new WebSocket(webSocketUrl);

  socket.on("open", () => {
    socket.send(JSON.stringify(dataInitial));

    heartbeat = setInterval(() => {
      socket.send(JSON.stringify({ op: 3 }));
    }, heartbeat_interval);
  });

  socket.on("message", (event) => {
    const data = JSON.parse(event.toString());

    heartbeat_interval = data.d.heartbeat_interval;

    if (data.t === "INIT_STATE") {
      setLanyardData(data);
    }

    if (data.t === "PRESENCE_UPDATE") {
      setLanyardData(data);
    }
  });

  socket.on("close", () => {
    clearInterval(heartbeat);

    setTimeout(() => {
      setupWebSocket();
    }, 5000);
  });
};

const setLanyardData = (data: Lanyard): void => {
  lanyardData.push(data);
};

const getLanyardData = (): Lanyard[] => {
  return lanyardData;
};

setupWebSocket();
