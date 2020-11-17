import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

export default (props) => {
  const [name, setName] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.setName(name);
    navigate("/chatroom");
  };

  return (
    <form onSubmit={onSubmitHandler} className="container w-50">
      <h3 className="text-center mt-4">Get Started right now!</h3>
      <div className="form-group mt-4">
        <label>I want to start chatting with the name...</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="My name.."
        />
      </div>
      <input
        className="btn btn-md btn-info"
        type="submit"
        value="Start Chatting"
      />
    </form>
  );
};
