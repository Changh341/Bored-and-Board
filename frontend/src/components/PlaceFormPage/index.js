import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { states } from "./statesData"
import { createPlace } from "../../store/place"
import './PlaceForm.css'


const CreatePlaceForm = () => {
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
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(states[0])
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      hostId,
      price,
      address,
      city,
      state,
      country: 'United States',
      description,
    };

    const place = await dispatch(createPlace(payload));
    if (place) {
      history.push('/myplaces');
    }
  }

  if (!hostId) {
    return null
  }

  return (
    <>
      <div className='newplaceform-window'>
        <h2>Tell us about your listing</h2>
        <div className='place-form'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Give your listing a title'
              required
              onChange={(event) => { setName(event.target.value) }} />
            <input
              className='number-input'
              type='number'
              min='0.00'
              max='100000.00'
              step='0.01'
              placeholder='Set your price per night'
              required
              onChange={(event) => { setPrice(parseFloat(event.target.value).toFixed(2)) }} />
            <input
              type='text'
              placeholder='Address'
              required
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
              onChange={(event) => { setCity(event.target.value) }} />
            <textarea
              placeholder='Describe your place in 1000 characters. How many beds and baths? Whats included?'
              cols='80'
              rows='15'
              maxLength='1000'
              onChange={(event) => { setDescription(event.target.value) }} />
            <div>
              <button type="submit">Create listing</button>
            </div>
          </form>
        </div>
      </div>
    </>

  )

}

export default CreatePlaceForm