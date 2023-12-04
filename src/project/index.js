import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import React from "react";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
import Navigation from "./navigation";
function Project() {
  return (
    <div >
      <div >
        <Nav />
      </div>
      <div className="d-flex">
      <div>
        <Navigation/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/account" element={<Account />} />
          <Route path="/account/:userId" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
      </div>
    </div>
  );
}
export default Project;