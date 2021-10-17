import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getPlace } from '../../store/place';
import { NavLink, Route } from 'react-router-dom';
import PlaceDetail from '../PlaceDetails';
import './browser.css'
import Pagination from './Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const amtOfPage = Math.ceil(place.length / 10)

  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const content = place.slice(indexOfFirstPost, indexOfLastPost)
  if (!place) {
    return null
  }

  const houseImg = (url) => {
    if (url) {
      return <img src={url} className='housePic' />
    } else {
      return <img src='https://i.imgur.com/A70WZMn.jpg' className='housePic' />
    }
  }
  return (
    <>
      <div className='browser-window'>
        {
          content.map((place) => {
            if (place) {
              return (
                <div key={place.id} onClick={(event) => {
                  setDetails(place.id)
                  setDisplayDetail(true)
                }} >
                  <div className='place-card'>
                    <div> {place.name}</div>
                    <div>{place.city}, {place.state}</div>
                    <div>{'$' + place.price}/Night</div>
                    <div className='house-pic-container'>
                      {place.Image ? houseImg(place.Image.url) : houseImg()}
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        <Pagination totalPosts={place.length - 1} paginate={paginate} />
      </div>
      {displayDetail && <PlaceDetail displayDetail={setDisplayDetail} id={details} />}
    </>
  )
}


export default PlaceBrowser