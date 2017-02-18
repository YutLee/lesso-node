import { combineReducers } from 'redux'

function getUser(state = {}, action) {
  return Object.assign({}, state, {
    username: action.username
  })
}

const index = combineReducers({
  getUser
})

export default index