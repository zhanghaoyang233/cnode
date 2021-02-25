import * as actionTypes from '@/constaints'
import { getTopics } from '@/api/index'

export const updateList = () => ({
  type: actionTypes.UPDATE_LIST
})

export const updateListSuccess = (data) => ({
  type: actionTypes.UPDATE_LIST_SUCCESS,
  data
})

export const updateListError = () => ({
  type: actionTypes.UPDATE_LIST_ERROR
})

export const getTopicList = (params) => {
  return (dispatch) => {
    dispatch(updateList())
    getTopics(params).then(res => {
      dispatch(updateListSuccess(res.data))
    }).catch(() => {
      dispatch(updateListError())
    })
  }
}