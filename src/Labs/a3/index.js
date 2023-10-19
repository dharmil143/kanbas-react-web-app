import JavaScript from "./JavaScript";
import React from "react";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return(
       <div className="container">
          <h1>Assignment 3</h1>
          <TodoList/>
          <ConditionalOutput/>
          <Styles/>
          <DynamicStyling/>
          <PathParameters/>
          <JavaScript/>
          
      
       </div>
    );
 }
 export default Assignment3;