import { combineReducers } from 'redux'
import ui from './UI/reducer'
import user from './User/reducer'

const AppReducer = combineReducers({ ui, user })

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') return AppReducer({}, action)
  return AppReducer(state, action)
}

export default rootReducer
