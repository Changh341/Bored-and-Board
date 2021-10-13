import { csrfFetch } from './csrf';
const initialState = { list: [], hostList: [], details: {} };

const POPULATE = 'place/POPULATE';
const HOST_POPULATE = 'place/HOST_POPULATE';
const LOAD_ONE = 'place/LOAD_ONE'
const ADD = 'place/ADD';
const DELETE = 'place/DELETE';
const EDIT = 'place/EDIT'

const load = (list) => ({
  type: POPULATE,
  list
});

const hostLoad = (hostList) => ({
  type: HOST_POPULATE,
  hostList
})

const loadOne = (details) => ({
  type: LOAD_ONE,
  details
})

const addPlace = (place) => ({
  type: ADD,
  place
})

const deletePlace = (place) => ({
  type: DELETE,
  place
})

const editPlace = (place, id) => ({
  type: EDIT,
  place,
  id
})

export const getPlace = () => async (dispatch) => {
  const response = await fetch(`/api/places`);
  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
}

export const getHostPlace = (id = 0) => async (dispatch) => {
  if (id) {
    const response = await fetch(`/api/places/management/${id}`)
    if (response.ok) {
      const list = await response.json();
      dispatch(hostLoad(list));
    }
  }
}

export const getOne = (id) => async (dispatch) => {
  if (id) {
    const response = await fetch(`/api/places/${id}`)
    if (response.ok) {
      const detail = await response.json()
      dispatch(loadOne(detail))
    }
  }
}

export const createPlace = (data) => async (dispatch) => {
  const response = await csrfFetch('/api/places', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const place = await response.json()
    dispatch(addPlace(place))
    return place
  }
}

export const destroyPlace = (hostId, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/${hostId}/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    dispatch(deletePlace(id))
  }
}

export const changePlace = (data, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const place = await response.json()
    dispatch(editPlace(place, id))
    return place
  }
}

const sortList = (list) => {
  return list
    .sort((placeA, placeB) => {
      return placeA.id - placeB.id;
    })
    .map((place) => place.id);
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE: {
      const allPlace = {};
      action.list.forEach((place) => {
        allPlace[place.id] = place;
      });
      return {
        ...allPlace,
        ...state,
        list: sortList(action.list)
      };
    }
    case HOST_POPULATE: {
      const allPlace = {};
      action.hostList.forEach((place) => {
        allPlace[place.id] = place;
      });
      return {
        ...allPlace,
        ...state,
        hostList: sortList(action.hostList)
      };
    }
    case LOAD_ONE: {
      return { ...state, details: action.details }
    }
    case ADD: {
      if (!state[action.place.id]) {
        const newState = {
          ...state,
          [action.place.id]: action.place
        };
        const placeList = newState.list.map((id) => newState[id]);
        placeList.push(action.place);
        newState.list = sortList(placeList);
        return newState;
      }
      return {
        ...state,
        [action.place.id]: {
          ...state[action.place.id],
          ...action.place
        }
      };
    }
    case DELETE: {
      delete state[action.place]
      return {
        ...state,
      };
    }
    case EDIT: {
      if (!state[action.id]) {
        const newState = {
          ...state,
          [action.id]: action.place
        };
        const placeList = newState.list.map((id) => newState[id]);
        placeList.push(action.place);
        newState.list = sortList(placeList);
        return newState;
      }
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.place
        }
      };
    }
    default: return state;
  }
};

export default placeReducer;