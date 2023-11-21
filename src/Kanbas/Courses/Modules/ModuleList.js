import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group" style={{width:800}}>
      <li className="list-group-item">
        <div className="d-flex">
        <div style={{width:400}}>
        <input className="form-control" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="form-control"  value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>
        <div style={{flexGrow:1}}>
        <button style={{float:"right",marginRight:10,backgroundColor:"green"}} className="btn btn-primary" onClick={handleAddModule}>Add</button>
        <button style={{float:"right",marginRight:10}} className="btn btn-primary" onClick={handleUpdateModule}>
                Update
        </button>
        </div>
        </div>
      </li>

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <div className="d-flex">
              <div>
             <h3>{module.name}</h3>
             </div>
             <div style={{flexGrow:1}}>
            <button className="btn btn-primary" style={{backgroundColor:"red",marginRight:10,float:"right"}}
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <button className="btn btn-primary" style={{color:"black",marginRight:10,backgroundColor:"yellow",float:"right"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            </div>
             </div>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;