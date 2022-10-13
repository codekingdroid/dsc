import React from "react";
import Team from "./team";

function App() {
  let members = {
    data: [
      { name: "Shekhar Kumar", info: [{ role: "GDSC Lead" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Yash Chaudhary", info: [{ role: "Machine Learning" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Abhishek Kumar Meel", info: [{ role: "Management Head" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Navneet Das", info: [{ role: "Android & Cloud Technologies" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Chandresh Singh", info: [{ role: "Android" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Govind Prasad Sharma", info: [{ role: "Web Technologies" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Rishabh Rathore", info: [{ role: "UI/UX" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Samik Choudhury", info: [{ role: "Android & Public Relations" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Robin choudhary", info: [{ role: "Web Technologies" }, { gh: "" }, { ig: "" }, { fb: "" }, { ln: "" }] },
      { name: "Tarun Mishra", info: [{ role: "DevOps Lead" }, { gh: "https://github.com/Illusion0-0" }, { ig: "" }, { fb: "" }, { ln: "linkedin.com/in/codestein-tarun/" }] }
    ]
  }
  return (
    <div className="app">
      <h1 className="headings">GDSC AIT TEAM</h1>
      <div className="member">
        {
          members.data.map((member, ind) => {
            return (
              <Team
                key={ind}
                name={member.name}
                role={member.info[0].role}
                gh={member.info[1].gh}
                ig={member.info[2].ig}
                fb={member.info[3].fb}
                ln={member.info[4].ln}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
