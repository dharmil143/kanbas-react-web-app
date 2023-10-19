import ModuleList from "../Modules/ModuleList";
import React from "react";


function Home() {
  return (
    <div className="d-flex">
        <div>
      <h2>Home</h2>
      <ModuleList />
      </div>
      <div>
      <h2>Status</h2>
      </div>
    </div>
  );
}
export default Home;