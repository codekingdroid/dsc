import React from "react";
import Team from "./team";

function App(){
  let members=[
    {name:"Shekhar Kumar",        role: "GDSC Lead"}, 
    {name:"Yash Chaudhary",       role: "Machine Learning"}, 
    {name:"Abhishek Kumar Meel",  role: "Management Head"}, 
    {name:"Navneet Das",          role: "Android & Cloud Technologies"}, 
    {name:"Chandresh Singh",      role: "Android"}, 
    {name:"Govind Prasad Sharma", role: "Web Technologies"}, 
    {name:"Rishabh Rathore",      role: "UI/UX"}, 
    {name:"Samik Choudhury",      role: "Android & Public Relations"}, 
    {name:"Robin choudhary",      role: "Web Technologies"}, 
    {name:"Tarun Mishra",         role: "Web & UI/UX"}
  ];
  return(
    <div className="app">
      <h1 className="headings">Our Team</h1>
      <div className="member">
      {
        members.map((member,ind)=>{
          return(
            <Team key = {ind} name={member.name} role={member.role}/>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
