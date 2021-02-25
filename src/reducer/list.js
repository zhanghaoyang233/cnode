import * as actionTypes from '@/constaints'

const defaulState = {
  data: [],
  loading: false
}

const list = (state = defaulState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_LIST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.UPDATE_LIST_SUCCESS:
      return {
        data: action.data,
        loading: false
      }
    case actionTypes.UPDATE_LIST_ERROR:
      return {
        data: [],
        loading: false
      }
    default:
      return state
  }
}

export default list