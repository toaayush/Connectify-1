import React from "react";
import "./Myprofile.css";

const Myprofile = (props) => {
  const { openmenu } = props;
  return (
    <div className="myprofilecontainer">
      <div className={openmenu?"openmenu-profilecontainer":"profilecontainer"}>This is Myprofile</div>
    </div>
  );
};

export default Myprofile;
