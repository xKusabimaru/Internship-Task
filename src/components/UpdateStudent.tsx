import { useEffect, useState } from "react";
import { handleUpdateSubmet } from "../App";

interface Props {
  isTrigger: boolean;
  setIsTrigger: any;
  id: any;
  name: string;
  email: string;
  phone: string;
  number: string;
  date: string;
}

const UpdateStudent = ({
  isTrigger,
  setIsTrigger,
  id,
  name,
  email,
  phone,
  number,
  date,
}: Props) => {
  useEffect(() => {
    setSelectedName(name);
    setSelectedEmail(email);
    setSelectedPhone(phone);
    setSelectedNumber(number);
    setSelectedDate(date);
  }, [name, email, phone, number, date]);

  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [filled, setFilled] = useState(true);

  const handleSubmet = async () => {
    if (
      selectedName &&
      selectedEmail &&
      selectedPhone &&
      selectedNumber &&
      selectedDate
    ) {
      setFilled(true);

      let date = new Date(selectedDate);
      const day = date.toLocaleString("default", { day: "2-digit" });
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.toLocaleString("default", { year: "numeric" });

      const formatedDate = day + "-" + month + ", " + year;

      await handleUpdateSubmet(
        id,
        selectedName,
        selectedEmail,
        selectedPhone,
        selectedNumber,
        formatedDate
      );

      setIsTrigger(false);
      window.location.reload();
    }
    setFilled(false);
  };

  return (
    <>
      {isTrigger && (
        <div className="create-student">
          <div className="create-student-form">
            <div className="create-student-header">
              <p>UPDATE A STUDENT</p>
              {!filled && (
                <p className="create-student-fill">
                  please fill all the inputs
                </p>
              )}
              <button
                onClick={() => {
                  setIsTrigger(false);
                }}
              >
                Close
              </button>
            </div>
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
              ></input>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={selectedPhone}
                onChange={(e) => setSelectedPhone(e.target.value)}
              ></input>
              <label htmlFor="number">Enroll Number</label>
              <input
                type="text"
                id="number"
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.target.value)}
              ></input>
              <label htmlFor="date">Date of admission</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              ></input>
            </form>
            <button onClick={handleSubmet}>Submit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateStudent;
