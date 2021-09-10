import React from "react";
import Team from "./team";
//import script from './script.js';

const t_name=["Shekhar Kumar", "Yash Chaudhary", "Abhishek Kumar Meel", "Navneet Das", "Chandresh Singh", "Govind Prasad Sharma", "Rishabh Rathore", "Samik Choudhury", "Robin choudhary", "Tarun Mishra"];
const t_role=["GDSC Lead", "Machine Learning", "Management Head", "Android & Cloud Technologies", "Android", "Web Technologies", "UI/UX", "Android & Public Relations", "Web Technologies", "Web & UI/UX"];
function App(){
  return(
    <div className="app">
      <h1 className="headings">Our Team</h1>
      <div className="member">
      <Team name={t_name[0]} role={t_role[0]} />
      <Team name={t_name[1]} role={t_role[1]} />
      <Team name={t_name[2]} role={t_role[2]} />
      <Team name={t_name[3]} role={t_role[3]} />
      <Team name={t_name[4]} role={t_role[4]} />
      <Team name={t_name[5]} role={t_role[5]} />
      <Team name={t_name[6]} role={t_role[6]} />
      <Team name={t_name[7]} role={t_role[7]} />
      <Team name={t_name[8]} role={t_role[8]} />
      <Team name={t_name[9]} role={t_role[9]} />
      </div>
    </div>
  );
}

export default App;
