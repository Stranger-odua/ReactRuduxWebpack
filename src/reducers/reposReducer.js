const SET_COUNT = 'SET_COUNT'


// дефолтный стор
const defaultStore = {
  items: [],
  isFetching: true,
  count: true,
}


// редюсер
export default function reposReducer (state = defaultStore, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload
      }

    default:
      return state
  }
}

// функция action creator, которая возвращает объект action
export const setCount = (count) => ({type: SET_COUNT, payload: count})










