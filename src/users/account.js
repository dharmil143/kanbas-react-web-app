import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Account() {
    const { userId } = useParams();
    const findUserById = async (userId) => {
      try{
        const user = await client.findUserById(userId);
        setAccount(user);
      }
      catch(err){
        console.log(err);
      }
      };    
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  const save = async () => {
    await client.updateUser(account);
  };
  useEffect(() => {
    if (userId) {
        findUserById(userId);
      } else {
        fetchAccount();
      }  
  }, []);
  return (
    <div className="w-100" style={{margin:20}}>
      <h1>Account</h1>
      {account && (
        <div>
          <input className="form-control" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input className="form-control" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input className="form-control" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input className="form-control" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input className="form-control" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select className="form-control" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button className="btn btn-primary" onClick={save}>
     Save
  </button>
  <button className="btn btn-primary" onClick={signout}>
    Signout
  </button >
  <Link to="/project/admin/users" className="btn btn-warning w-100">
    Users
  </Link>
    </div>
  );
}
export default Account;