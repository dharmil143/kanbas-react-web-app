import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Route,Routes,Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

function Kanbas() {
   return (
     <div className="d-flex">
       <KanbasNavigation/>
       <div style={{flexGrow:1}}>
         <Routes>
         <Route path="/" element={<Navigate to="Dashboard" />} />
         <Route path="/Account" element={<Account/>}></Route>
         <Route path="/Dashboard" element={<Dashboard/>}></Route>
         <Route path="/Courses" element={<h3>Courses</h3>}></Route>
         <Route path="/Courses/:courseId/*" element={<Courses/>}></Route>
         <Route path="/Calendar" element={<h1>Calendar</h1>}></Route>
         <Route path="/Inbox" element={<h1>Inbox</h1>}></Route>
         <Route path="/History" element={<h1>History</h1>}></Route>
         <Route path="/Studio" element={<h1>Studio</h1>}></Route>
         <Route path="/Commons" element={<h1>Commons</h1>}></Route>
         <Route path="/Help" element={<h1>Help</h1>}></Route>
         </Routes>
       </div>
     </div>
   );
 }
 
 export default Kanbas