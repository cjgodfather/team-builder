import React from "react";

const MemberCard = props => {
  return (
    <div className="cardContainer">
      <p className="name">
        <em>Name:</em>
        {props.name}
      </p>
      <p>
        <em>Role:</em>
        {props.role}
      </p>
      <p className="email">
        <em>Email:</em>
        {props.email}
      </p>
      <button className="btn" onClick={props.editMember}>
        Edit
      </button>
    </div>
  );
};

export default MemberCard;
