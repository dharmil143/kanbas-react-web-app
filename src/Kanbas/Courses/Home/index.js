import ModuleList from "../Modules/ModuleList";
import React from "react";


function Home() {
  return (
    <div className="d-flex">
        <div>
      <hr/>
      <ModuleList />
      </div>
      <div>
      <h2 style={{marginLeft:20}}>Status</h2>
      </div>
    </div>
  );
}
export default Home;