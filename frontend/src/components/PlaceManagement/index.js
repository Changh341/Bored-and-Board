import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { destroyPlace, getHostPlace } from '../../store/place';
import { useHistory, NavLink } from 'react-router-dom';
import './management.css'
import EditPlaceForm from '../PlaceEditForm';

const PlaceManager = () => {
  const dispatch = useDispatch()
  const history = useHistory()


  const hostId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
    return null
  })

  if (hostId === null) {
    history.push('/')
  }

  useEffect(() => {
    dispatch(getHostPlace(hostId));
  }, [dispatch]);

  const place = useSelector(state => {
    return state.place.hostList.map(placeId => state.place[placeId]);
  });

  const addPlace = () => {

    history.push('/addlisting')
  }

  const deletePlace = (hostId, id) => {
    dispatch(destroyPlace(hostId, id))
  }

  if (!place) {
    return null
  }

  const shortenDesc = (desc) => {
    if (desc.length > 25) {
      const shortString = desc.slice(0, 25);
      return shortString + '...'
    }
  }
  return (
    <>
      <div id='manager-toolkit'>
        <button onClick={(event) => addPlace()}>Create listing</button>
      </div>
      <div className='manager-window'>
        {
          place.map((place) => {
            if (place) {
              return (
                <div key={place.id} className='manage-card'>
                  {place.name}
                  <div>

                    {'$' + place.price + '/night'}
                  </div>
                  <div>
                    {shortenDesc(place.description)}
                  </div>
                  <div>
                    <NavLink className='edit-btn' to={`/myplaces/edit/${place.id}`}>Edit</NavLink>
                    <button onClick={(event) => deletePlace(hostId, place.id)}>Delete</button>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </>
  )
}


export default PlaceManager