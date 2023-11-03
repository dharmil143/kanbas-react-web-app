import React from "react";
import Add from "./add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvents";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

 function Assignment4() {   
  function sayHello() {
    alert("Hello");
  }

 return(
   <div>
     <h1>Assignment 4</h1>
     <ReduxExamples/>
     <Add a={1} b={2}/>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello}/>
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
   </div>
 );
}
export default Assignment4;