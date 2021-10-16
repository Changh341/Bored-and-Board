import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { cancelBooking, getBooking } from "../../store/booking";
import './BookingView.css'


const BookingUserView = () => {
  const dispatch = useDispatch()
  const userId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
    return null
  })
  const booking = useSelector(state => {
    if (state.session.user) {
      return state.booking.bookingList.map(spotId => state.booking[spotId])
    }
    return null
  })

  useEffect(() => {
    dispatch(getBooking(userId));
  }, [dispatch]);

  const handleSubmit = (bookingId) => async (event) => {
    event.preventDefault();
    dispatch(cancelBooking(bookingId))
  }


  return (
    <>
      <div id='booking-user-browser'>
        <h3>Upcoming stayings</h3>
        <div id='booking-up-coming'>
          {booking.map((booking) => {
            if (booking) {
              return (
                <div key={`listing${booking.id}`} className='booking-listing' >
                  <span key={`clickable${booking.id}`} className='clickable-booking'>Your stay at '{booking.Place.name}'  from {booking.startDate} to {booking.endDate}</span>
                  <div key={`btn${booking.id}`} className='bookings-btn'>
                    <button key={`detail-btn${booking.id}`} >Details</button>
                    <button key={`cancel-btn${booking.id}`} onClick={handleSubmit(booking.id)}>Cancel</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}
export default BookingUserView