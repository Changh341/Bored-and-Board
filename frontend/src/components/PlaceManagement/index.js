import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { destroyPlace, getHostPlace } from '../../store/place';
import { useHistory } from 'react-router-dom';


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

  return (
    <>

      <div className='manager-window'>
        <button onClick={(event) => addPlace()}>Create listing</button>
        {
          place.map((place) => {
            if (place) {

              return (
                <div key={place.id} className='place-card'>
                  {place.name}
                  {'$' + place.price}
                  <button onClick={(event) => deletePlace(hostId, place.id)}>Delete</button>
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