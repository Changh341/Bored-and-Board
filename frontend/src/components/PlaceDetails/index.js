
import { useDispatch, useSelector } from "react-redux"
import BookingForm from "../BookingForm/detailForm.js"
import './placedetail.css'



const PlaceDetail = ({ displayDetail, id }) => {
  const place = useSelector((state) => state.place)
  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id
    } else { return null }
  })

  const editTool = (userId == place[id].hostId)



  if (!place) {
    return <div>Did not load</div>
  }
  const edit = () => {
    return <span style={{ color: "green" }}>This is your listing</span>

  }
  const houseImg = (url) => {
    if (url) {
      return <img src={url} className='detailed-house-image' />
    } else {
      return <img src='https://i.imgur.com/A70WZMn.jpg' className='detailed-house-image' />
    }
  }


  return (
    <div id='modal-container'>
      <div className='modal-background' onClick={(event) => displayDetail(false)}>
      </div>
      <div id='detailmodal'>
        <div className="top-details">
          <button className='x-btn' onClick={(event) => displayDetail(false)}> X </button>
          <div id='detail-content'>
            <h1>{place[id].name}</h1>
            {editTool ? edit() : null}
            <p>{place[id].address}, {place[id].city}, {place[id].state}</p>
            <p>{place[id].description}</p>
            <span>${place[id].price}/night</span>
          </div>
          <div id='booking-placement'>
            <BookingForm place={place} id={id} />
          </div>
        </div>
        <div id='place-pictures'>
          {place[id].Image ? houseImg(place[id].Image.url) : houseImg()}
        </div>
      </div>
    </div>
  )
}

export default PlaceDetail