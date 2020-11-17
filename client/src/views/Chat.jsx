import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

export default ({ username }) => {
  //Pass callback to initialize socket
  const [socket] = useState(() => io(":8000"));
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [msgList]);

  useEffect(() => {
    //setup event listeners in useeffect callback
    console.log("Running");

    socket.on("messages", (data) =>
      setMsgList(() => {
        return [...data];
      })
    );
    socket.emit("new_user", {
      username,
      msg: `${username} has joined!`,
    });

    //We are returning a callback
    //This ensures that the underlying socket will be closed if App is unmounted
    //This would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  useEffect(() => {
    socket.on("user_join", (data) =>
      setMsgList((prevMsg) => {
        return [...prevMsg, data];
      })
    );
    return () => socket.disconnect(true);
  }, []);

  useEffect(() => {
    socket.on("new_message_from_server", (data) => {
      setMsgList((prevMsg) => {
        return [...prevMsg, data];
      });
      return () => socket.disconnect(true);
    });
  }, []);

  const sendMsg = (e) => {
    e.preventDefault();

    socket.emit("new_message_from_client", { username, msg });

    setMsg("");
    return false;
  };

  return (
    <div className="container">
      <div className="d-flex flex-column">
        {msgList &&
          msgList.map((msg, index) =>
            username == msg.username ? (
              //Mine
              <div
                key={index}
                className="border rounded bg-info w-25 mb-4 align-self-end p-2"
              >
                <p className="font-weight-bold">{msg.username}</p>
                <p>{msg.msg}</p>
              </div>
            ) : (
              //Not mine

              <div key={index} className="border rounded w-25 mb-4 p-2">
                <p className="font-weight-bold">{msg.username}</p>
                <p>{msg.msg}</p>
              </div>
            )
          )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMsg} className="d-flex justify-content-between mb-4">
        <input
          className="form-control "
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <input className="btn btn-primary btn-md" type="submit" />
      </form>
    </div>
  );
};
