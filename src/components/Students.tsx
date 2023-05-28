import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import CreateStudent from "./CreateStudent";
import { useState } from "react";
import UpdateStudent from "./UpdateStudent";

interface Props {
  items: any[];
}

const Students = ({ items }: Props) => {
  const deleteStudent = async (id: any) => {
    const studentDoc = doc(db, "students", id);
    await deleteDoc(studentDoc);
    window.location.reload();
  };

  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const [id, setId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="students">
      <div className="students-header">
        <p>Students List</p>
        <img src="arrows.svg" alt="arrows"></img>
        <button onClick={() => setIsCreate(true)}>ADD NEW STUDENT</button>
      </div>
      <hr />
      <div className="students-labels">
        <p className="students-labels-name">Name</p>
        <p className="students-labels-email">Email</p>
        <p className="students-labels-phone">Phone</p>
        <p className="students-labels-number">Enroll Number</p>
        <p className="students-labels-date">Date of admission</p>
      </div>
      <div className="students-info-wrapper">
        {items.map((item, index) => (
          <div className="students-info" key={index}>
            <img src={item.image} alt={item.name} className="student-img"></img>
            <p className="students-info-name">{item.name}</p>
            <p className="students-info-email">{item.email}</p>
            <p className="students-info-phone">{item.phone}</p>
            <p className="students-info-number">{item.number}</p>
            <p className="students-info-date">{item.date}</p>
            <img
              src="pin.svg"
              alt="pin"
              className="students-pin"
              onClick={() => {
                setIsupdate(true);
                setId(item.id);
                setSelectedName(item.name);
                setSelectedEmail(item.email);
                setSelectedPhone(item.phone);
                setSelectedNumber(item.number);
                setSelectedDate(item.date);
              }}
            ></img>
            <img
              src="trash.svg"
              alt="trash"
              className="students-trash"
              onClick={() => {
                deleteStudent(item.id);
              }}
            ></img>
          </div>
        ))}
      </div>
      <CreateStudent isTrigger={isCreate} setIsTrigger={setIsCreate} />
      <UpdateStudent
        isTrigger={isUpdate}
        setIsTrigger={setIsupdate}
        id={id}
        name={selectedName}
        email={selectedEmail}
        phone={selectedPhone}
        number={selectedNumber}
        date={selectedDate}
      />
    </div>
  );
};

export default Students;
