import * as client from "./client";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div style={{margin:20}}>
      <h1>Signin</h1>
      <label>Username :</label>
      <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <label>Password :</label>
      <input className="form-control" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary" onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;