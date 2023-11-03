import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css"
import {BiUserCircle} from "react-icons/bi"
import {TfiDashboard} from "react-icons/tfi"
import {BiBookAlt} from "react-icons/bi"
import {BsFillCalendarFill} from "react-icons/bs"
import {HiInbox} from "react-icons/hi2"
import {GoHistory} from "react-icons/go"
import {PiDesktopBold} from "react-icons/pi"
import {FaSignOutAlt} from "react-icons/fa"
import {BiSolidHelpCircle} from "react-icons/bi"

function KanbasNavigation() {
  const links = ["Account", "Dashboard","Courses","Calendar","Inbox","History","Studio","Commons","Help"];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-account"/>,
    Dashboard: <TfiDashboard className="wd-icon"/>,
    Courses: <BiBookAlt className="wd-icon"/>,
    Calendar: <BsFillCalendarFill className="wd-icon"/>,
    Inbox: <HiInbox className="wd-icon"/>,
    History: <GoHistory className="wd-icon"/>,
    Studio: <PiDesktopBold className="wd-icon"/>,
    Commons: <FaSignOutAlt className="wd-icon"/>,
    Help: <BiSolidHelpCircle className="wd-icon"/>

  }
  const { pathname } = useLocation();

  return (
    <div className="list-group wd-kanbasnavigation" style={{ width: 120 }}>
        <img alt="Northeastern icon" className="list-group-item" src="/Kanbas/Northeastern-University-Emblem.png"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}<br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;