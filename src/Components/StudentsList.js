import React from "react";
import Student from "./Student";

function StudentsList(props) {
  const list = props.list.map((student) => (
    <Student
      key={student.id}
      student={student}
      deleteStudent={props.deleteStudent}
    /> // key is a property so react would know each student has one property
    //that includes all the "name,fullname....." ف تميز رياكت بين كل الستدونتس
  ));
  return <div>{list}</div>;
}
// لانهم حاطين بروبس داخل student list
// لما ارسلناها حطينا props.
//لو بدونها وحاطين{} اقدر اخليها مثل الاسم
//بدون كلمه بروبس

export default StudentsList;
