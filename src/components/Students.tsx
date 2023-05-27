interface Props{
  items: any[]
}

const Students = ({items}:Props) => {
  return (
    <div className="students">
      <div className="students-header">
        <p>Students List</p>
        <img src="arrows.svg" alt="arrows"></img>
        <button>ADD NEW STUDENT</button>
      </div>
      <hr/>
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
            <img src={item.img} alt={item.name} className="student-img"></img>
            <p className="students-info-name">{item.name}</p>
            <p className="students-info-email">{item.email}</p>
            <p className="students-info-phone">{item.phone}</p>
            <p className="students-info-number">{item.number}</p>
            <p className="students-info-date">{item.date}</p>
            <img src="pin.svg" alt="pin" className="students-pin"></img>
            <img src="trash.svg" alt="trash" className="students-trash"></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students