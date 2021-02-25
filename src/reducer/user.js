import * as actionTypes from '@/constaints'

const defaultState = {
  data: {
    loginname: '',
    avatar_url: '',
    score: '',
    create_at: '',
    recent_replies: [],
    recent_topics: [],
  },
  loading: false
}

const user = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        loading: true
      }
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        data: action.data,
        loading: false
      }
    case actionTypes.UPDATE_USER_ERROR:
      return {
        data: defaultState.data,
        loading: false
      }
    default:
      return state
  }
}

export default user