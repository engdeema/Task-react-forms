import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsArray, setStudentsArray] = useState([]);
  const createStudent = (student) => {
    student.id = studentsArray.length + 1; // بحط اي دي حق الستودنت داخل الاراي عشان اذا شافها ريأكت يخليها يونيك
    // منو اللي نبيه نعطيه آي دي؟ ستيودنت
    //.length اهوا طول الأراي
    setStudentsArray([...studentsArray, student]);
    console.log(student);
  };
  const deleteStudent = (id) => {
    setStudentsArray(studentsArray.filter((student) => student.id !== id));
  };
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      <StudentsList list={studentsArray} deleteStudent={deleteStudent} />
      <Form createStudent={createStudent} /> // we are passing a function as a
      prop
    </div>
  );
}

export default App;
