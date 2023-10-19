import ES5Functons from "./ES5Functons";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import React from "react";

function WorkingWithFunctions() {
    return(
       <div className="container">
          <ES5Functons/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
       </div>
    );
 }
 export default WorkingWithFunctions;