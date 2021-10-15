import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBooking } from "../../store/booking";
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



  return (
    <>
      <div id='booking-user-browser'>
        <div id='booking-content'>

          {booking.map((booking) => {
            return (
              <div key={booking.id}>Your stay at '{booking.Place.name}'  from {booking.startDate} to {booking.endDate}</div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default BookingUserView