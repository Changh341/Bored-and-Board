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
                <NavLink key={place.id} to={`/places/${place.id}`} >
                  <div className='place-card'>
                    {place.name}
                    {'$' + place.price}
                  </div>
                </NavLink>
              )
            }
          })
        }
      </div>
    </>
  )
}


export default PlaceBrowser