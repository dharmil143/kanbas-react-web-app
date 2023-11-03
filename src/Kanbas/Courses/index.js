import React from "react";
import { Navigate, Route, Routes, useParams ,useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades"
import {VscThreeBars} from "react-icons/vsc"
import './index.css'


function Courses({courses}) {
  const { courseId } = useParams();
  const location = useLocation().pathname;
  const s = location.split("/")
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-courses">
      <div className="d-flex breadcrumb">
      <VscThreeBars className="icon"/>
      <h2>{course.name} / {s[s.length-1]}</h2>
      </div>
      <hr/>
      <div className="d-flex">
      <CourseNavigation />
      <div style={{marginLeft:20,flexGrow:1}}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor style={{flexGrow:1}}/>}
            />
            <Route path="Grades" element={<Grades/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<h1>People</h1>} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Courses;