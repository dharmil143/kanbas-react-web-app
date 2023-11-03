import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { Dropdown } from "bootstrap";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
  <div style={{flexGrow:1}}>
    <hr/>
      <label>Assignment Name</label>
      <input value={assignment.title}
             className="form-control mb-2 w-50" />
      <textarea className="form-control w-50"></textarea>      
      <div>
      <table style={{marginTop:20}}>
        <div className="d-flex flex-row" style={{marginTop:10}}>
          <div className="d-flex flex-column" style={{alignContent:"center",width:200,flexGrow:1}}>
              <h6 style={{paddingLeft:130,marginTop:5}}>Points</h6>
              </div>
          <div className="d-flex flex-column">
          <input type={Number} value="100"
             className="form-control mb-2" />
          </div>
        </div>
        <div className="d-flex flex-row" style={{marginTop:10}}>
          <div className="d-flex flex-column" style={{alignContent:"center",width:200,flexGrow:1}}>
              <h6 style={{paddingLeft:40,marginTop:5}}>Assignment Group</h6>
              </div>
          <div className="d-flex flex-column">
          <select type={Dropdown}
             className="form-control mb-2 ">
              <option>Assignment
              </option>
              <option>Quiz
              </option>
             </select>
          </div>
        </div>
      </table>
      </div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;

