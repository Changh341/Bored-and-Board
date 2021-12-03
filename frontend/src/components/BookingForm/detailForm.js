import { useState } from "react"
import { useSelector } from "react-redux"
import BookingConfirmation from "."




const BookingForm = ({ place, id }) => {
  const minDate = (x) => {
    let today = new Date();
    let dd = today.getDate() + x
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today
  }
  const stayDuration = (start, end) => {
    const date1 = new Date(start)
    const date2 = new Date(end)
    return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
  }

  const totalCost = (duration) => {
    const res = duration * place[id].price
    if (res > 0) {
      return res
    } else {
      return <span className='error-txt'>**Enter valid dates**</span>
    }
  }


  const [startDate, setStartDate] = useState(minDate(1))
  const [endDate, setEndDate] = useState(minDate(2))
  const [confirmation, setConfirmation] = useState(false)

  const cost = totalCost(stayDuration(startDate, endDate))

  const userId = useSelector(state => {
    if (state.session.user === null) {
      return null
    } else {
      return state.session.user
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation(true)
  }



  if (!userId) {
    return (<div>Please login to book location</div>)
  } else {

    const validInfo = (cost) => {
      if (isNaN(cost)) {
        return true
      } else { return false }
    }
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Tell us the duration of your stay</h4>
            <div>
              <label>Start Date:</label>
              <input type='date' value={startDate} min={minDate(1)} onChange={(event) => { setStartDate(event.target.value) }} />
            </div>
            <div>
              <label>End Date:</label>
              <input type='date' value={endDate} min={startDate} onChange={(event) => { setEndDate(event.target.value) }} />
            </div>
            <div>Estimate cost ${cost}</div>
            <button type="submit" disabled={validInfo(cost)}>Book me</button>
          </form>
        </div>
        {confirmation && <BookingConfirmation place={place} id={id} startDate={startDate} endDate={endDate} duration={stayDuration(startDate, endDate)} cost={cost} show={setConfirmation} userId={userId} />}
      </>
    )
  }

}

export default BookingForm