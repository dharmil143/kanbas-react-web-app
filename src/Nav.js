import React from "react";
import { Link ,useLocation} from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
 return (
   <nav className="nav nav-tabs mt-2">
     <Link to="/Labs/a3" className={`nav-link ${pathname.includes("/a3") ? "active" : "/Labs"}`}>A3</Link>
     <Link to="/Labs/a4" className={`nav-link ${pathname.includes("/a4") ? "active" : "/Labs"}`}>A4</Link>
     <Link to="/Labs/a5" className={`nav-link ${pathname.includes("/a5") ? "active" : "/Labs"}`}>A5</Link>
     <Link to="/hello" className={`nav-link ${pathname.includes("/hello") ? "active" : "/hello"}`}>Hello</Link>
     <Link to="/Kanbas" className={`nav-link ${pathname.includes("/Kanbas") ? "active" : "/Kanbas"}`}>Kanbas</Link>
     <Link to="/project" className={`nav-link ${pathname.includes("/project") ? "active" : "/project"}`}>Project A6</Link>
   </nav>
 );
}
export default Nav;