interface Props {
  items: any[];
}

const Payment = ({ items }: Props) => {
  return (
    <div className="payment">
      <div className="payment-header">
        <p>Payment Details</p>
        <img src="arrows.svg" alt="arrows"></img>
      </div>
      <hr />
      <div className="payment-labels">
        <p className="payment-labels-name">Name</p>
        <p className="payment-labels-schedule">Payment Schedule</p>
        <p className="payment-labels-bill">Bill Number</p>
        <p className="payment-labels-paid">Amount Paid</p>
        <p className="payment-labels-balance">Balance amount</p>
        <p className="payment-labels-date">Date</p>
      </div>
      <div className="payment-info-wrapper">
        {items.map((item, index) => (
          <div className="payment-info" key={index}>
            <p className="payment-info-name">{item.name}</p>
            <p className="payment-info-schedule">{item.schedule}</p>
            <p className="payment-info-bill">{item.bill}</p>
            <p className="payment-info-paid">{item.paid}</p>
            <p className="payment-info-balance">{item.balance}</p>
            <p className="payment-info-date">{item.date}</p>
            <img src="eye.svg" alt="eye" className="payment-info-eye"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
