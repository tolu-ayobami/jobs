import React, { useState } from "react";
import Men from "./joblist";
import "./App.css";
import Cat from "./cat";
import Hang from "./button"


function App() {

  const[ret, setRet]= useState(0);

return(

  <div className="section"> 

  <Cat />

  <div className="jru">

  <Hang breg={setRet} bet={ret} />

<Men nam={ret} />
  </div>
  
  


  </div>
);


}
export default App; 