import { combineReducers } from 'redux'

function getUser(state = [], action) {
  switch (action.type) {
    case 'GET_USER':
      return [
        ...state,
        {
          username: action.username
        }
      ]
    default:
      return state
  }
}

const index = combineReducers({
  getUser
})

export default index