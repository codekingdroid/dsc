import React from "react";
import Team from "./team";
//import script from './script.js';

const t_name=["Tarun Mishra", "Samik Chaudhary", "Robin", "Shekhar Sir", "Rishabh Sir", "Navneet Sir"];
const t_role=["Web & UI/UX","Android","Cloud"];
function App(){
  return(
    <div className="app">
      <div className="Nav">This is NavBar</div>
      <h1 className="headings">Our Team</h1>
      <div className="member">
      <Team name={t_name[0]} role={t_role[0]} />
      <Team name={t_name[1]} role={t_role[1]} />
      <Team name={t_name[3]} role={t_role[1]} />
      <Team name={t_name[5]} role={t_role[2]} />
      <Team name={t_name[0]} role={t_role[0]} />
      <Team name={t_name[1]} role={t_role[1]} />
      <Team name={t_name[3]} role={t_role[1]} />
      <Team name={t_name[5]} role={t_role[2]} />
      </div>
    </div>
  );
}

export default App;
