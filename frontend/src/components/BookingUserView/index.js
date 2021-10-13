import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBooking } from "../../store/booking";


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
      <div>
        <ul>
          {booking.map((booking) => {
            return (
              <li>Your stay at '{booking.Place.name}'  from {booking.startDate} to {booking.endDate}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default BookingUserView