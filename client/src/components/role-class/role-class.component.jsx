import React from "react";

//CSS:
import "./role-class.css";


const RoleClass = ({ roleClass }) => {
  const { classType, image } = roleClass;
  return (
    <div>
      <img className="classImg grow" alt={classType} src={image} />
    </div>
  );
};

export default RoleClass;
