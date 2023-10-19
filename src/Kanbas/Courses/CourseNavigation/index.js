import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";
import "./index.css"


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades" ,"Piazza","Zoom Meetings","Quizzes","People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
      <div className="wd-coursenavgation">
      {links.map((link, index) => (
        <div className="navigation">
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
        </div>
      ))}
      </div>
  );
}


export default CourseNavigation;