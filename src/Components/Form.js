import React, { useState } from "react";
import SideInfo from "./SideInfo";

function Form({ createStudent }) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value }); // لانها اوبجت عطيتها }{}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent(student);
  };

  return (
    <div className="form-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* to do :  create your form here  */}
        Name
        <input
          name="name"
          placeholder="enter your name"
          onChange={(e) => handleChange(e)}
        />
        Last Name
        <input name="lastName" onChange={(e) => handleChange(e)} />
        Phone Number
        <input name="phoneNumber" onChange={(e) => handleChange(e)} />
        Power
        <input name="power" onChange={(e) => handleChange(e)} />
        Email Address
        <input name="emailAddress" onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
