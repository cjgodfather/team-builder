import React, { useState } from "react";
import "./App.css";
import MemberCard from "./MemberCard";
import MemberForm from "./Form";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  };

  const editMemberSetter = member => {
    setMemberToEdit(member);
  };

  const editTeamMember = member => {
    const newList = [...teamList];
    const memIdx = teamList.findIndex(el => el.name === member.name);
    newList[memIdx].email = member.email;
    newList[memIdx].role = member.role;
    setTeamList(newList);
    setMemberToEdit({});
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <h2>Add a Member</h2>
      <MemberForm
        add={addTeamMember}
        memberToEdit={memberToEdit}
        edit={editTeamMember}
      />

      {teamList
        ? teamList.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              email={member.email}
              role={member.role}
              editMember={() => editMemberSetter(member)}
            />
          ))
        : null}
    </div>
  );
}

export default App;
