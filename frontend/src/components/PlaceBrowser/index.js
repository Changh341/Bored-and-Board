import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getPlace } from '../../store/place';
import { NavLink, Route } from 'react-router-dom';
import PlaceDetail from '../PlaceDetails';
import './browser.css'

const PlaceBrowser = () => {
  const dispatch = useDispatch()
  const place = useSelector(state => {
    return state.place.list.map(placeId => state.place[placeId]);
  });

  useEffect(() => {
    dispatch(getPlace());
  }, [dispatch]);

  const [displayDetail, setDisplayDetail] = useState(false)
  const [details, setDetails] = useState('')

  if (!place) {
    return null
  }

  return (
    <>
      <div className='browser-window'>
        {
          place.map((place) => {
            if (place) {
              return (
                <div key={place.id} onClick={(event) => {
                  setDetails(place.id)
                  setDisplayDetail(true)
                }} >
                  <div className='place-card'>
                    <div> {place.name}</div>
                    <div>{'$' + place.price}/Night</div>
                  </div>
                </div>
              )
            }
          })
        }
        {displayDetail && <PlaceDetail displayDetail={setDisplayDetail} id={details} />}
      </div>
    </>
  )
}


export default PlaceBrowser