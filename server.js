const express = require("express");
const cors = require("cors");

const app = express();
const msgList = [];

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(8000, () =>
  console.log("The server is running on port 8000")
);

//Initialize socket, invoke new instance of socket and pass in server + cors settings
const io = require("socket.io")(server, {
  cors: {
    origin: "*",

    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
  },
});

io.on("connection", (socket) => {
  //Each client that connects gets its own socket id
  console.log(`${socket.id} has connected`);
  console.log(msgList);
  io.emit("messages", msgList);

  //If this is logged, our client has successfully completed the handshake
  //Add all event listeners HERE. connection is a built in event listener
  socket.on("new_user", (data) => {
    msgList.push(data);
    io.emit("user_join", { username: data.username, msg: data.msg });
  });

  socket.on("new_message_from_client", (data) => {
    msgList.push(data);

    io.emit("new_message_from_server", {
      username: data.username,
      msg: data.msg,
    });
  });
});
