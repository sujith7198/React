import { useEffect, useState } from "react"


function DEMO(){
//  const isGoal=true;
//  if(isGoal){return("missed");
//  }return("goal");

// }
  var nmid=document.getElementById("nm");
  // nmid.classList.add("false");

  const[name,setName]=useState("");
  const[Password,setPassword]=useState("");
  
if(name==""){
    nmid.classList.add("false")

}
  return(<><>
  <label>User name<input id="nm"  className="mm"type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
  </label>
    <label></label>Password<input type="text " onChange={(e)=>setPassword(e.target.value)} value={Password}></input></>
    <input type="submit"></input></>)
}
export default DEMO









