import './BookingForm.css'


const BookingConfirmation = ({ place, id, startDate, endDate, duration, cost, show, userId }) => {
  const totalCost = 10 + cost + Math.round(cost * .12)

  const handleSubmit = async (e) => {

    const payload = {
      spotId: id,
      userId: userId.id,
      startDate,
      endDate
    };

    console.log(payload)

  }
  const validInfo = (cost) => {
    if (isNaN(cost)) {
      return true
    } else { return false }
  }


  return (
    <div id='booking-confirmation-container'>
      <div>
        <h2 id='booking-summary'>Booking Summary</h2>
        <div id='booking-detail-contents'>
          <span>{place[id].name}</span>
          <span>{place[id].address}</span>
          <span>{place[id].city + ', ' + place[id].state}</span>
        </div>
        <div id='cost-breakdown'>
          <h3>Cost Breakdown</h3>
          <span> ${cost} for {duration} days </span>
          <span> $10 Service Fee</span>
          <span id='last-breakdown'> ${Math.round(cost * .12)} Taxes</span>
          <span>${totalCost}</span>
        </div>
        <div id='booking-confirm-btn'>
          <button disabled={validInfo(cost)} onClick={handleSubmit}>Confirm</button>
          <button onClick={(event) => show(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmation