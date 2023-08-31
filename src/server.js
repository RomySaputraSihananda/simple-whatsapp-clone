const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 4000;

io.on("connection", (socket) => {
  console.log("ok");
  socket.on("chat", (message) => {
    socket.broadcast.emit("newChat", message);
    console.log(message);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
