import React, { useState, useEffect } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: ""
  });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    Object.getOwnPropertyNames(props.memberToEdit).length === 0
      ? props.add(member)
      : props.edit(member);

    setMember({ name: "", role: "", email: "" });
  };

  useEffect(() => {
    setMember(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <form className="form" onSubmit={event => handleSubmit(event)}>
      <label>
        name:
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        role:
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        email:
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={event => handleChange(event)}
        />
      </label>
      <button>GO</button>
    </form>
  );
};

export default MemberForm;
