import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplatedLiterals from "./TemplatedLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FUnctionDestructing";
import React from "react";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplatedLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript