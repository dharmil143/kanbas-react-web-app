import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <div className="wd-dashboard">
      <h2>Published Courses ({courses.length})</h2>
      <hr/>
      <div className="d-flex flex-nowrap dashboard">
        <div className="d-flex flex-column">
            <div className="d-flex flex-row flex-wrap">
      {courses.map((course) => (
      <div class="card">
            <div className="card-color1"></div>
            <div className="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <h5 class="card-title">{course.name}</h5>
                      {course.number}
                       <t/>Fall 2023 Semester<br/>
                       Start Date : {course.startDate}<br/>
                       End Date : {course.endDate}
          </Link>
          </div>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
      </div>
  );
}
export default Dashboard;