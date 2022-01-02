
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { states } from "../PlaceFormPage/statesData"
import { useParams, useHistory } from "react-router-dom"
import { changePlace } from "../../store/place"

const EditPlaceForm = () => {
  const { id } = useParams()
  const history = useHistory()
  const place = useSelector((state) => state.place)
  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id
    } else { return null }
  })

  const dispatch = useDispatch()

  const [name, setName] = useState(place[id].name)
  const [price, setPrice] = useState(place[id].price)
  const [address, setAddress] = useState(place[id].address)
  const [city, setCity] = useState(place[id].city)
  const [state, setState] = useState(place[id].state)
  const [description, setDescription] = useState(place[id].description)
  const [image, setImage] = useState(null);

  const goBack = async () => {
    history.push('/myplaces')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      hostId: userId,
      price,
      address,
      city,
      state,
      country: 'United States',
      description,
      image
    };

    const place = await dispatch(changePlace(payload, id))
    if (place) {
      history.push('/myplaces')
    }
  }
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className='newplaceform-window'>
      <div className='place-form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Give your listing a title'
            required
            value={name}
            onChange={(event) => { setName(event.target.value) }} />
          <input
            className='number-input'
            type='number'
            min='0.00'
            max='100000.00'
            step='0.01'
            placeholder='Set your price per night'
            required
            value={price}
            onChange={(event) => { setPrice(parseFloat(event.target.value).toFixed(2)) }} />
          <input
            type='text'
            placeholder='Address'
            required
            value={address}
            onChange={(event) => { setAddress(event.target.value) }} />
          <input
            type='text'
            value='United States'
            disabled={true} />
          <select onChange={(event) => setState(event.target.value)} value={state}>
            {states.map(state =>
              <option key={state}>{state}</option>
            )}
          </select>
          <input
            type='text'
            placeholder='City'
            required
            value={city}
            onChange={(event) => { setCity(event.target.value) }} />
          <div>
            <label>
              Change Picture:
              <input type="file" onChange={updateFile} />
            </label>
          </div>
          <textarea
            placeholder='Describe your place in 1000 characters. How many beds and baths? Whats included?'
            cols='80'
            rows='15'
            maxLength='1000'
            value={description}
            onChange={(event) => { setDescription(event.target.value) }} />
          <div>
            <button type="submit">Submit Changes</button>
          </div>
        </form>
        <div>
          <button onClick={(event) => goBack()}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default EditPlaceForm