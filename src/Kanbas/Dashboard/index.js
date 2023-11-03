import React  from "react";
import { Link } from "react-router-dom";
import "./index.css"

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <div className="wd-dashboard">
      <h2>Published Courses ({courses.length})</h2>
      <hr/>
      <input value={course.name} className="form-control w-25" 
       onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control w-25" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
      <input value={course.startDate} className="form-control w-25" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control w-25" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <div style={{marginTop:10}}>
      <button className="btn btn-primary" onClick={addNewCourse} style={{backgroundColor:"green",marginRight:10}}>
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      </div>
      <div className="d-flex flex-nowrap dashboard">
        <div className="d-flex flex-column">
            <div className="d-flex flex-row flex-wrap">
      {courses.map((c) => (
      <div className="card">
            <div className="card-color1"></div>
            <div className="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${c._id}`}>
            <h5 className="card-title">{c.name}</h5>
                      {c.number}
                       <t/>Fall 2023 Semester<br/>
                       Start Date : {c.startDate}<br/>
                       End Date : {c.endDate}
                       <div style={{marginTop:10}}>
                       <button className="btn btn-primary" style={{backgroundColor:"yellow",marginRight:10,color:"black"}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(c);
              }}>
              Edit
            </button>
          <button className="btn btn-primary" style={{backgroundColor:"red",marginRight:10}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(c._id);
              }}>
              Delete
            </button>
            </div>
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