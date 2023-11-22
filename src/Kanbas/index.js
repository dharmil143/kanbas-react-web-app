import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Route,Routes,Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useState , useEffect} from "react";
import store from "./store";
import { Provider } from "react-redux";
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = `https://kanbas-node-server-app-0njc.onrender.com/api/courses`;

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses
    ]);
    setCourse({name:""});
  };
  
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  

  const deleteCourse = async (course) => {
    await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id)); 
  };

  const updateCourse = async (course) => {
    await axios.put(
      `${URL}/${course._id}`,
      course
    );
  
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };


   return (
    <Provider store={store}>
     <div className="d-flex">
       <KanbasNavigation style={{height:100}}/>
       <div style={{flexGrow:1}}>
         <Routes>
         <Route path="/" element={<Navigate to="Dashboard" />} />
         <Route path="/Account" element={<Account/>}></Route>
         <Route path="/Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          }></Route>
         <Route path="/Courses" element={<h3>Courses</h3>}></Route>
         <Route path="/Courses/:courseId/*" element={<Courses courses={courses}/>}></Route>
         <Route path="/Calendar" element={<h1>Calendar</h1>}></Route>
         <Route path="/Inbox" element={<h1>Inbox</h1>}></Route>
         <Route path="/History" element={<h1>History</h1>}></Route>
         <Route path="/Studio" element={<h1>Studio</h1>}></Route>
         <Route path="/Commons" element={<h1>Commons</h1>}></Route>
         <Route path="/Help" element={<h1>Help</h1>}></Route>
         </Routes>
       </div>
     </div>
     </Provider>
   );
 }
 
 export default Kanbas