import { csrfFetch } from './csrf';
const initialState = { bookingList: [] }

const POPULATE = 'booking/POPULATE'

const load = (bookings) => ({
  type: POPULATE,
  bookings
})

export const getBooking = (userId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/user/${userId}`);
  if (response.ok) {
    const bookings = await response.json()
    console.log(bookings)
    dispatch(load(bookings))
  }
}


const sortList = (bookings) => {
  return bookings
    .sort((bookingsA, bookingsB) => {
      return bookingsA.spotId - bookingsB.spotId;
    })
    .map((booking) => booking.spotId);
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE: {
      console.log(action.bookings)
      const allBooking = {};
      action.bookings.forEach((booking) => {
        allBooking[booking.spotId] = booking;
      });
      return {
        ...allBooking,
        ...state,
        bookingList: sortList(action.bookings)
      };
    }
    default: return state;
  }
}

export default bookingReducer;