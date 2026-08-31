import { io } from 'socket.io-client';

// In local development, the Express+Socket.IO backend runs on port 5001.
// In production, use the same origin unless an explicit socket URL is provided.
const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  (window.location.hostname === 'localhost' ? 'http://localhost:5001' : window.location.origin);
const socket = io(SOCKET_URL, {
  autoConnect: false,
  withCredentials: true,
});

export default socket;
