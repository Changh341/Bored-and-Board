import { csrfFetch } from './csrf';
const initialState = { bookingList: [] }

const POPULATE = 'booking/POPULATE'
const CANCEL = 'booking/CANCEL'

const load = (bookings) => ({
  type: POPULATE,
  bookings
})

const deleteBooking = (booking) => ({
  type: CANCEL,
  booking
})

export const getBooking = (userId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/user/${userId}`);
  if (response.ok) {
    const bookings = await response.json()
    dispatch(load(bookings))
  }
}

export const postBooking = (data) => async (dispatch) => {
  const response = await csrfFetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const bookings = await response.json()
    const { userId } = bookings
    dispatch(getBooking(userId))
  }
}

export const cancelBooking = (bookingId) => async (dispatch) => {
  // const response = await csrfFetch(`/api/bookings/${bookingId}`, {
  //   method: 'DELETE',
  // })
  // if (response.ok) {
  dispatch(deleteBooking(bookingId))
  // }
}

const sortList = (bookings) => {
  return bookings
    .sort((bookingsA, bookingsB) => {
      return bookingsA.id - bookingsB.id;
    })
    .map((booking) => booking.id);
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE: {
      const allBooking = {};
      action.bookings.forEach((booking) => {
        allBooking[booking.id] = booking;
      });
      return {
        ...allBooking,
        ...state,
        bookingList: sortList(action.bookings)
      };
    }
    case CANCEL: {
      console.log(state)
    }
    default: return state;
  }
}

export default bookingReducer;