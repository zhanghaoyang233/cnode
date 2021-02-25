import { combineReducers } from 'redux'
import list from './list'
import detail from './detail'
import user from './user'

const reducer = combineReducers({
  list,
  user,
  detail
})

export default reducer