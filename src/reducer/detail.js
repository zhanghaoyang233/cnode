import * as actionTypes from '@/constaints'

const defaultState = {
  data: {
    author: {
      loginname: '',
      avatar_url: ''
    },
    replies: [],
    reply_count: 0,
    create_at: '',
    good: true
  },
  loading: false
}

const detail = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_DETAIL:
      return {
        ...state,
        loading: true
      }
    case actionTypes.UPDATE_DETAIL_SUCCESS:
      return {
        data: action.data,
        loading: false
      }
    case actionTypes.UPDATE_DETAIL_ERROR:
      return {
        data: defaultState.data,
        loading: false
      }
    default:
      return state
  }
}

export default detail