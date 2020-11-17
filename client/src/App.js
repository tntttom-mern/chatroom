import React, { useState } from "react";
import Chat from "./views/Chat";
import Main from "./views/Main";
import { Router } from "@reach/router";

function App() {
  const [username, setUsername] = useState("");

  const updateName = (name) => {
    setUsername(name);
  };
  console.log(username);
  return (
    <div className="container mt-4">
      <h1 className=" text-center">MERN Chat</h1>
      <Router>
        <Main path="/" setName={updateName} />
        <Chat path="/chatroom" username={username} />
      </Router>
    </div>
  );
}

export default App;
