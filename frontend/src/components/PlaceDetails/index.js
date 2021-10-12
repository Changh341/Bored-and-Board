import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOne } from "../../store/place"


const PlaceDetail = () => {
  const { id } = useParams()
  const place = useSelector((state) => state.place.details)
  const userId = useSelector((state) => state.session.user.id)
  const dispatch = useDispatch()
  const editTool = (userId == place.hostId)
  console.log(editTool)
  useEffect(() => {
    dispatch(getOne(id))
  }, [id])

  if (!place) {
    return <div>Did not load</div>
  }
  const edit = () => {
    return <div>
      <button>Edit</button>
    </div>
  }

  return (<div>
    {editTool ? edit() : null}
    <h1>{place.name}</h1>
    <p>{place.address}, {place.city}, {place.state}</p>
    <p>{place.description}</p>
    <span>${place.price}/night</span>
  </div>)
}

export default PlaceDetail