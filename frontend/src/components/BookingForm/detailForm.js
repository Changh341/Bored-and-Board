import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import BookingConfirmation from "."
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';



const BookingForm = ({ place, id }) => {
  // const minDate = (x) => {
  //   let today = new Date();
  //   let dd = today.getDate() + x
  //   let mm = today.getMonth() + 1;
  //   let yyyy = today.getFullYear();

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [daysTaken, setDaysTaken] = useState([])

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/bookings/place/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, []);
  useEffect(() => {
    pushTakenDays(items)
  }, [items])
  console.log(daysTaken)
  const pushTakenDays = (array) => {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let current = array[i]
      let currentDay = addDays(new Date(current.startDate), +1)
      let stopDate = addDays(new Date(current.endDate), +1)
      while (currentDay <= stopDate) {
        res.push(currentDay)
        currentDay = addDays(currentDay, 1);
      }
    }
    setDaysTaken(res)
  }
  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }

  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }

  //   today = yyyy + '-' + mm + '-' + dd;
  //   return today
  // }
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const stayDuration = (start, end) => {
    if (start && end) {

      const date1 = new Date(start)
      const date2 = new Date(end)
      return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
    }
  }

  const totalCost = (duration) => {
    const res = duration * place[id].price
    if (res > 0) {
      return res
    } else {
      return <span className='error-txt'>**Enter valid dates**</span>
    }
  }


  // const [startDate, setStartDate] = useState(new Date())
  // const [endDate, setEndDate] = useState(null)
  const [confirmation, setConfirmation] = useState(false)
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(new Date());
  //   setEndDate(end);
  // };

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
              <label>Dates:</label>
              {/* <input type='date' value={startDate} min={minDate(1)} onChange={(event) => { setStartDate(event.target.value) }} /> */}
              <DatePicker selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                excludeDates={daysTaken}
                isClearable={true}
                minDate={addDays(new Date(), 1)}
              />
            </div>
            {/* <div>
              <label>End Date:</label> */}
            {/* <DatePicker selected={endDate} onChange={(date) => { setEndDate(date) }} /> */}
            {/* <input type='date' value={endDate} min={startDate} onChange={(event) => { setEndDate(event.target.value) }} /> */}
            {/* </div> */}
            <div>
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