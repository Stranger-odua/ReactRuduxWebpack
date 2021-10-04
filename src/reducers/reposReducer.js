const SET_REPOS = 'SET_REPOS'

// дефолтный state
const defaultState = {
  items: [],
  isFetching: true,
}


// редюсер
export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items
      }

    default:
      return state
  }
}

// action creator
export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})










