import { useState } from "react";
import { handleCreateSubmet, uploadImage } from "../App";

interface Props {
  isTrigger: boolean;
  setIsTrigger: any;
}

const CreateStudent = ({ isTrigger, setIsTrigger }: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [filled, setFilled] = useState(true);

  const handleSubmet = async () => {
    if (
      selectedImage &&
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

      const imageUrl = await uploadImage(selectedImage);

      await handleCreateSubmet(
        imageUrl,
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
              <p>ADD NEW STUDENT</p>
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
              <label htmlFor="image">Photo</label>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  e.target.files instanceof FileList
                    ? setSelectedImage(e.target.files[0])
                    : "";
                }}
              ></input>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setSelectedName(e.target.value)}
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setSelectedEmail(e.target.value)}
              ></input>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setSelectedPhone(e.target.value)}
              ></input>
              <label htmlFor="number">Enroll Number</label>
              <input
                type="text"
                id="number"
                onChange={(e) => setSelectedNumber(e.target.value)}
              ></input>
              <label htmlFor="date">Date of admission</label>
              <input
                type="date"
                id="date"
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

export default CreateStudent;
